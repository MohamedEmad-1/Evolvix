import { NextResponse } from 'next/server'

export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const txt = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml`

  return new NextResponse(txt, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
