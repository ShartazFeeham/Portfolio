import { useState, useEffect } from 'react';

export function useBlogData() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/blogs/manifest.json')
      .then(r => r.json())
      .then(data => { setBlogs(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return { blogs, loading };
}
