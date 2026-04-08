import { NextRequest, NextResponse } from "next/server"
import { getPayPalToken } from "@/lib/paypal"

export async function POST(req: NextRequest) {
  try {
    const { orderID } = await req.json()

    if (!orderID || typeof orderID !== "string") {
      return NextResponse.json({ error: "Missing orderID" }, { status: 400 })
    }

    const token = await getPayPalToken()

    const res = await fetch(
      `${process.env.PAYPAL_API_URL}/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )

    if (!res.ok) {
      console.error("[PayPal] capture-order failed:", res.status, await res.text())
      return NextResponse.json({ error: "Capture failed" }, { status: 502 })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error("[PayPal] capture-order exception:", err)
    return NextResponse.json({ error: "Internal error" }, { status: 500 })
  }
}
