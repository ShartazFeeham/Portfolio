import React from 'react';

export function processChildren(children, spanRefs) {
  spanRefs.current = [];
  let charCounter = 0;

  const processNode = (node) => {
    if (node == null || typeof node === 'boolean') return null;
    if (typeof node === 'string' || typeof node === 'number') {
      const text = String(node);
      return (text.match(/(\S+|\s+)/g) || []).map((part, pIdx) => {
        if (/^\s+$/.test(part)) {
          return part.split('').map((char, i) => {
            const index = charCounter++;
            return <span key={`${pIdx}-${i}`} ref={el => spanRefs.current[index] = el} style={{ visibility: 'hidden' }}>{char}</span>;
          });
        }
        return <span key={pIdx} style={{ whiteSpace: 'nowrap' }}>{part.split('').map((char, i) => {
          const index = charCounter++;
          return <span key={i} ref={el => spanRefs.current[index] = el} style={{ visibility: 'hidden', display: 'inline-block' }}>{char}</span>;
        })}</span>;
      });
    }
    if (React.isValidElement(node)) return React.cloneElement(node, node.props, React.Children.map(node.props.children, processNode));
    if (Array.isArray(node)) return node.map((n, i) => <React.Fragment key={i}>{processNode(n)}</React.Fragment>);
    return node;
  };

  const tree = React.Children.map(children, processNode);
  return { processedChildren: tree, totalChars: charCounter };
}
