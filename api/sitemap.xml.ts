/**
 * Vercel Serverless Function to serve sitemap.xml with correct headers
 * This ensures the sitemap is served as XML, not HTML, even with SPA rewrites
 */

import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req: any, res: any) {
  try {
    // Read the sitemap.xml from public directory (which gets copied to dist during build)
    // In Vercel, the file will be in the root after build
    const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml');
    let sitemapContent: string;
    
    try {
      sitemapContent = readFileSync(sitemapPath, 'utf-8');
    } catch (error) {
      // Fallback: try reading from dist or root
      try {
        const distPath = join(process.cwd(), 'dist', 'sitemap.xml');
        sitemapContent = readFileSync(distPath, 'utf-8');
      } catch {
        const rootPath = join(process.cwd(), 'sitemap.xml');
        sitemapContent = readFileSync(rootPath, 'utf-8');
      }
    }

    // Set correct headers for XML
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');

    // Return the XML content
    res.status(200).send(sitemapContent);
  } catch (error) {
    console.error('Error serving sitemap.xml:', error);
    res.status(500).send('Error generating sitemap');
  }
}

