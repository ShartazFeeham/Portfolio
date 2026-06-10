export function transformUrl(src, folder) {
  if (src.startsWith('http') || src.startsWith('/')) return src;
  const folderPath = `/blogs/${encodeURIComponent(folder)}`;
  return `${folderPath}/${src}`;
}

export async function fetchManifest() {
  const res = await fetch('/blogs/manifest.json');
  if (!res.ok) throw new Error('Failed to fetch blogs');
  return res.json();
}
