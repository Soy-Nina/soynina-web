const BASE_URL = "https://www.soynina.org"

/**
 * Returns the absolute URL for a given locale and path.
 * Spanish (default) has no prefix; English uses /en.
 */
export function getLocalizedUrl(locale: string, path: string): string {
  const prefix = locale === "es" ? "" : `/${locale}`
  return `${BASE_URL}${prefix}${path}`
}

/**
 * Returns the `alternates` metadata object for a given locale and path.
 * Includes:
 *  - canonical: the absolute URL for the current locale
 *  - hreflang languages: es (root), en (/en prefix), x-default (Spanish)
 */
export function getAlternates(locale: string, path: string) {
  return {
    canonical: getLocalizedUrl(locale, path),
    languages: {
      es: getLocalizedUrl("es", path),
      en: getLocalizedUrl("en", path),
      "x-default": getLocalizedUrl("es", path),
    },
  }
}
