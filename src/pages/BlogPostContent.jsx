import ReactMarkdown from 'react-markdown';

export default function BlogPostContent({ markdown, folderPath }) {
  const transformUrl = (src) => {
    if (src.startsWith('http') || src.startsWith('/')) return src;
    return `${folderPath}/${src}`;
  };

  return (
    <div className="prose prose-stone max-w-none
      prose-headings:font-serif prose-headings:text-[#2c2a25]
      prose-p:text-[#3d3429] prose-p:leading-relaxed
      prose-a:text-[#5d4037] prose-a:no-underline hover:prose-a:underline
      prose-code:text-[#5d4037] prose-code:bg-[#e8dcc8]/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
      prose-pre:bg-[#2c2a25] prose-pre:text-[#e8dcc8] prose-pre:rounded-lg
      prose-blockquote:border-l-[#3d3429]/20 prose-blockquote:italic prose-blockquote:text-[#3d3429]/70
      prose-img:rounded-lg prose-img:shadow-md
      prose-hr:border-[#3d3429]/10
      prose-li:text-[#3d3429]
      prose-strong:text-[#2c2a25]"
      style={{ fontFamily: '"Merriweather", "Playfair Display", serif' }}>
      <ReactMarkdown
        urlTransform={transformUrl}
        components={{
          img: ({ src, alt, ...props }) => (
            <figure className="my-8">
              <img src={transformUrl(src)} alt={alt || ''} className="rounded-lg shadow-md max-w-full" loading="lazy" {...props} />
              {alt && <figcaption className="text-center text-sm text-[#3d3429]/50 mt-2 italic">{alt}</figcaption>}
            </figure>
          ),
          h1: () => null,
          code: ({ className, children, ...props }) => {
            const isBlock = className?.includes('language-');
            if (isBlock) return <code className={className} {...props}>{children}</code>;
            return <code className={className} {...props}>{children}</code>;
          },
        }}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
