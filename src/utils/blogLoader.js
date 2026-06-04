
/**
 * Utility to load and parse markdown blog posts using Vite's glob import.
 */
export const loadBlogs = () => {
  const modules = import.meta.glob('/src/content/blogs/*.md', { query: '?raw', eager: true });
  
  const blogs = Object.entries(modules).map(([path, rawContent], index) => {
    // Basic frontmatter parser
    const content = typeof rawContent === 'string' ? rawContent : rawContent.default;
    const match = content.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/);
    
    let frontmatter = {};
    let body = content;

    if (match) {
      const fmText = match[1];
      body = match[2];
      
      // Simple key-value parser for frontmatter
      fmText.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
          const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
          frontmatter[key.trim()] = value;
        }
      });
    }

    return {
      id: index + 1,
      title: frontmatter.title || 'Untitled',
      excerpt: frontmatter.excerpt || '',
      content: body.trim(),
      timestamp: frontmatter.date || new Date().toISOString(),
      link: frontmatter.link || '#',
      ...frontmatter
    };
  });

  // Sort by date descending
  return blogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
};
