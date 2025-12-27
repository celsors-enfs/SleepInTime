/**
 * Vercel Serverless Function to serve sitemap.xml with correct headers
 * This ensures the sitemap is served as XML, not HTML, even with SPA rewrites
 */

import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req: any, res: any) {
  try {
    // Read the sitemap.xml
    // In Vercel build, public files are copied to dist root, so try dist first
    // Then try public (for local dev) and root as fallbacks
    let sitemapContent: string;
    const paths = [
      join(process.cwd(), 'dist', 'sitemap.xml'), // Vercel build output
      join(process.cwd(), 'public', 'sitemap.xml'), // Local dev / source
      join(process.cwd(), 'sitemap.xml'), // Root fallback
    ];
    
    let found = false;
    for (const sitemapPath of paths) {
      try {
        sitemapContent = readFileSync(sitemapPath, 'utf-8');
        found = true;
        break;
      } catch (error) {
        // Try next path
        continue;
      }
    }
    
    if (!found) {
      throw new Error('sitemap.xml not found in any expected location');
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

