export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Baobab Frontiers",
    "url": "https://baobabfrontiers.com",
    "logo": "https://baobabfrontiers.com/Primary%20Logo%20-%20Coloured.svg",
    "description": "Leading maize supplier in Ghana. Premium quality maize for food processors, feed producers, and exporters. Reliable supply, competitive pricing, and exceptional service.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GH",
      "addressRegion": "Ghana"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+233504688829",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://wa.me/233504688829"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Ghana"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Maize Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Premium Yellow Maize",
            "description": "High-quality yellow maize for food processing and animal feed",
            "category": "Agricultural Product"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
