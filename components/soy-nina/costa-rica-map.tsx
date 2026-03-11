"use client"

import { useEffect, useRef } from "react"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

const communities = [
    { name: "Guararí", lat: 10.0078, lng: -84.1286, description: "Heredia" },
    { name: "Pavas", lat: 9.9411, lng: -84.1333, description: "San José" },
    { name: "Desamparados", lat: 9.8961, lng: -84.0617, description: "San José" },
    { name: "Río Azul", lat: 9.9064, lng: -84.0156, description: "San José" },
    { name: "Los Guido", lat: 9.8833, lng: -84.0403, description: "Desamparados" },
]

const CR_CENTER: [number, number] = [9.95, -84.08]
const CR_ZOOM = 10

export default function CostaRicaMap() {
    const mapContainerRef = useRef<HTMLDivElement>(null)
    const mapInstanceRef = useRef<L.Map | null>(null)

    useEffect(() => {
        if (mapInstanceRef.current || !mapContainerRef.current) return

        // Fix default marker icon paths (Next.js/webpack bundling issue)
        delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: "",
            iconUrl: "",
            shadowUrl: "",
        })

        const map = L.map(mapContainerRef.current, {
            center: CR_CENTER,
            zoom: CR_ZOOM,
            zoomControl: false,
            scrollWheelZoom: true,
            attributionControl: false,
            maxBounds: L.latLngBounds([7.5, -87], [12, -81]),
            minZoom: 8,
            maxZoom: 15,
        })

        // CARTO Voyager Light basemap
        L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
            {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
                subdomains: "abcd",
                maxZoom: 19,
            }
        ).addTo(map)

        // Custom pin icon
        const pinIcon = L.divIcon({
            className: "soynina-pin",
            html: `
        <div class="soynina-pin-wrapper">
          <div class="soynina-pin-pulse"></div>
          <div class="soynina-pin-dot"></div>
        </div>
      `,
            iconSize: [36, 36],
            iconAnchor: [18, 18],
        })

        // Add community markers
        communities.forEach((c) => {
            const marker = L.marker([c.lat, c.lng], { icon: pinIcon }).addTo(map)
            marker.bindTooltip(
                `<strong>${c.name}</strong><br/><span style="opacity:0.7;font-size:11px">${c.description}</span>`,
                {
                    direction: "top",
                    offset: [0, -14],
                    className: "soynina-tooltip",
                }
            )
        })

        // Zoom control bottom-right
        L.control.zoom({ position: "bottomright" }).addTo(map)

        // Attribution bottom-left
        L.control.attribution({ position: "bottomleft", prefix: false }).addTo(map)

        mapInstanceRef.current = map

        // Force a size recalculation after mount
        setTimeout(() => map.invalidateSize(), 100)

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove()
                mapInstanceRef.current = null
            }
        }
    }, [])

    return (
        <div className="relative w-full">
            <style>{customCSS}</style>

            <div
                ref={mapContainerRef}
                className="w-full rounded-2xl overflow-hidden border border-[#e8e4f8]"
                style={{ height: "450px" }}
            />

            {/* Legend */}
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                <span className="inline-block w-3 h-3 rounded-full bg-[#4526c9]" />
                <span>Comunidades activas</span>
            </div>
        </div>
    )
}

// ─── Custom pin + tooltip styles ───
const customCSS = `
.soynina-pin {
  background: transparent !important;
  border: none !important;
}
.soynina-pin-wrapper {
  position: relative;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.soynina-pin-dot {
  width: 12px;
  height: 12px;
  background: #4526c9;
  border-radius: 50%;
  border: 2.5px solid white;
  box-shadow: 0 2px 6px rgba(69,38,201,0.35);
  position: relative;
  z-index: 2;
  transition: transform 0.2s ease;
}
.soynina-pin-wrapper:hover .soynina-pin-dot {
  transform: scale(1.3);
}
.soynina-pin-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(69, 38, 201, 0.15);
  animation: soynina-pulse 2.5s ease-in-out infinite;
  z-index: 1;
}
@keyframes soynina-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(0.5); opacity: 0.8; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.2; }
}
.soynina-tooltip {
  background: #140b3f !important;
  color: white !important;
  border: none !important;
  border-radius: 8px !important;
  padding: 8px 14px !important;
  font-family: system-ui, -apple-system, sans-serif !important;
  font-size: 13px !important;
  line-height: 1.4 !important;
  box-shadow: 0 4px 12px rgba(20, 11, 63, 0.25) !important;
  white-space: nowrap !important;
}
.soynina-tooltip::before {
  border-top-color: #140b3f !important;
}
.leaflet-control-zoom {
  border: none !important;
  border-radius: 10px !important;
  overflow: hidden !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
}
.leaflet-control-zoom a {
  width: 36px !important;
  height: 36px !important;
  line-height: 36px !important;
  background: rgba(255,255,255,0.95) !important;
  color: #4526c9 !important;
  font-weight: 700 !important;
  font-size: 18px !important;
  border-bottom: 1px solid #e8e4f8 !important;
  backdrop-filter: blur(8px) !important;
}
.leaflet-control-zoom a:hover {
  background: #4526c9 !important;
  color: white !important;
}
`
