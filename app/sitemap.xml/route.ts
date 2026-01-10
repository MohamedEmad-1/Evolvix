import { NextResponse } from 'next/server'

export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const pages = ['/', '/#about-me', '/#skills', '/#projects']

  const urls = pages
    .map((path) => `  <url>\n    <loc>${baseUrl}${path}</loc>\n  </url>`)
    .join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

  return new NextResponse(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
