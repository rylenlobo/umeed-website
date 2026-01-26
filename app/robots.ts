import { MetadataRoute } from 'next'

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://umeed.org' // TODO: Update to production URL

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
