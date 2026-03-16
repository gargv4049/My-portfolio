export interface MetaTags {
  title: string
  description: string
  image?: string
  url?: string
  type?: string
}

export function setMetaTags(tags: MetaTags) {
  // Update title
  document.title = tags.title

  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }
  metaDescription.setAttribute('content', tags.description)

  // Update Open Graph tags
  updateOrCreateMetaTag('og:title', tags.title)
  updateOrCreateMetaTag('og:description', tags.description)
  if (tags.image) updateOrCreateMetaTag('og:image', tags.image)
  if (tags.url) updateOrCreateMetaTag('og:url', tags.url)
  if (tags.type) updateOrCreateMetaTag('og:type', tags.type)
}

function updateOrCreateMetaTag(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export const generateStructuredData = (type: 'Person' | 'WebSite', data: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }
}

export const insertStructuredData = (data: any) => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

export const seoConfig = {
  siteName: 'CS Portfolio',
  siteDescription: 'Computer Science student portfolio targeting product-based companies',
  baseUrl: typeof window !== 'undefined' ? window.location.origin : '',
  author: 'Your Name',
  socialProfiles: {
    github: 'https://github.com/garav4049',
    linkedin: 'https://linkedin.com/in/garav4049',
    twitter: 'https://twitter.com/vgarg5960',
  },
}

export const performanceMetrics = {
  // Lighthouse targets
  targetLCP: 2500, // Largest Contentful Paint
  targetFID: 100,  // First Input Delay
  targetCLS: 0.1,  // Cumulative Layout Shift
}

// Hook for tracking performance
export function trackWebVitals() {
  if (typeof window !== 'undefined' && 'web-vital' in window) {
    console.log('Web Vitals tracking is available')
  }
}
