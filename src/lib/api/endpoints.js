export const ENDPOINTS = {
  home:             "ford/v1/home",
  about:            "ford/v1/about",
  contact:          "ford/v1/contact",
  header:           "ford/v1/header",
  footer:           "ford/v1/footer",
  products:         "ford/v1/product",
  offersPage:       "ford/v1/offerspage",
  offers:           "ford/v1/offers",
  news:             "ford/v1/news",
  servicePage:      "ford/v1/services",
  fleetPage:        "ford/v1/fleetpage",
  accessoriesPage:  "ford/v1/accessories",
  showroomPage:     "ford/v1/showroom-service-center",
  showroomTab:      "ford/v1/showroom-service-center/tab",
  partsPage:        "ford/v1/parts",
  productDetail:    "ford/v1/product-detail",
  testDriveForm:    "ford/v1/test-drive-form",
  requestAQuoteForm:"ford/v1/request-a-quote-form",
  privacy:          "ford/v1/privacy",
  terms:            "ford/v1/terms",
};

// Use this instead of manually building ar/en endpoint strings
export function getLocalizedEndpoint(resource, locale) {
  return locale === "ar"
    ? `ford/v1/ar/${resource}`
    : `ford/v1/${resource}`;
}
