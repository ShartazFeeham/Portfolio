# React Performance: Beyond the Basics

You've memoized your components and virtualized your lists. Here's what actually moves the needle on React performance in production.

## The Re-render Problem

Most React performance issues are unnecessary re-renders. Use React DevTools Profiler to identify them. You'll be surprised which components re-render on every state change.

```jsx
// This re-renders on every parent state change
const ExpensiveList = ({ items }) => { ... }

// This only re-renders when items actually change
const ExpensiveList = React.memo(({ items }) => { ... })
```

## State Colocation

Keep state as close to where it's used as possible. Lifting state too high causes widespread re-renders. A dropdown's open/close state belongs in the dropdown component, not in the page root.

## useMemo Isn't Free

`useMemo` has its own cost — dependency comparison on every render. Only memoize expensive computations (sorting, filtering large arrays). Simple derivations are faster computed fresh.

## Code Splitting

Load only what the user needs. Route-based code splitting with `React.lazy` is the lowest-effort, highest-impact optimization.

```jsx
const BlogPage = React.lazy(() => import('./BlogPage'));
```

## Image Optimization

Unoptimized images are the #1 cause of slow page loads. Use modern formats (WebP, AVIF), responsive `srcset`, and lazy loading for below-the-fold images.

## Server-Side Rendering

For content-heavy pages, SSR or static generation eliminates the "blank screen while JavaScript loads" problem entirely. Consider Next.js or Remix for new projects.

---

Performance is a feature. Not a nice-to-have. Users perceive a 100ms delay as instantaneous and a 1000ms delay as slow. The gap between them is where your users decide to stay or leave.
