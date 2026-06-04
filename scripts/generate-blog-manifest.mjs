/**
 * Build-time script: scans public/blogs/ for blog folders,
 * reads post.md, finds thumbnails, captures folder mtime,
 * and writes public/blogs/manifest.json consumed at runtime.
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'fs';
import { join, basename } from 'path';

const BLOGS_DIR = join(process.cwd(), 'public', 'blogs');

function getThumb(folderPath) {
  for (const ext of ['jpg', 'jpeg', 'png', 'svg', 'webp']) {
    const file = `thumbnail.${ext}`;
    if (existsSync(join(folderPath, file))) return file;
  }
  return null;
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function excerpt(markdown, maxLen = 150) {
  // Remove headings, code blocks, images, links
  const text = markdown
    .replace(/^#+\s.*$/gm, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]*)\]\(.*?\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .replace(/---+/g, '')
    .replace(/\n+/g, ' ')
    .trim();
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).replace(/\s+\S*$/, '') + '...';
}

function scanBlogs() {
  const entries = readdirSync(BLOGS_DIR, { withFileTypes: true });
  const blogs = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const folder = entry.name;
    const folderPath = join(BLOGS_DIR, folder);
    const mdPath = join(folderPath, 'post.md');

    if (!existsSync(mdPath)) continue;

    const md = readFileSync(mdPath, 'utf-8');
    const stat = statSync(folderPath);
    const thumb = getThumb(folderPath);
    const slug = slugify(folder);

    // Find images referenced in the markdown for the manifest
    const imageRefs = [...md.matchAll(/!\[.*?\]\((.*?)\)/g)].map(m => m[1]);

    blogs.push({
      title: folder,
      slug,
      folder,
      thumbnail: thumb ? `/blogs/${encodeURIComponent(folder)}/${thumb}` : null,
      date: stat.birthtime.toISOString(),
      excerpt: excerpt(md),
      images: imageRefs,
    });
  }

  // Sort by date descending
  blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  return blogs;
}

const blogs = scanBlogs();
const outPath = join(BLOGS_DIR, 'manifest.json');

// Write as JSON
const json = JSON.stringify(blogs, null, 2);
import { writeFileSync } from 'fs';
writeFileSync(outPath, json);
console.log(`Blog manifest: ${blogs.length} posts written to public/blogs/manifest.json`);
