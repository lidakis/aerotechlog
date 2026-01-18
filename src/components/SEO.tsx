import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  structuredData?: object | object[]
}

export default function SEO({
  title = 'AeroTechLog | Digital Aircraft Technical Log for Airlines',
  description = 'AeroTechLog - The complete digital aircraft technical log solution. Paperless journey log, maintenance tracking, defect management, and regulatory compliance for airlines and operators.',
  keywords = 'aircraft technical log, digital tech log, journey log, aircraft maintenance, defect management, MEL tracking, ADD tracking, paperless aviation, airline operations, aircraft logbook, EASA technical log, digital ATL',
  canonical = '/',
  structuredData
}: SEOProps) {
  const baseUrl = 'https://aerotechlog.skydynamics.aero'
  const fullCanonical = canonical.startsWith('http') ? canonical : `${baseUrl}${canonical}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="AeroTechLog" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData])}
        </script>
      )}
    </Helmet>
  )
}
