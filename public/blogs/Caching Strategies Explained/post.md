# Caching Strategies Explained

Caching is the easiest way to improve performance — and the easiest way to introduce bugs. Here's how to do it right.

## Cache Aside (Lazy Loading)

The application checks the cache first. On miss, it loads from the database and writes to the cache. Most common pattern.

```java
public User getUser(Long id) {
    User cached = cache.get("user:" + id);
    if (cached != null) return cached;
    User user = userRepository.findById(id);
    cache.set("user:" + id, user, TTL);
    return user;
}
```

## Write-Through

Every write goes to both cache and database. Cache is always consistent but writes are slower.

## Write-Behind (Write-Back)

Writes go to cache first, asynchronously flushed to database. Fast writes but risk of data loss on crash.

## Cache Invalidation

The hardest problem in computer science. Options:

- **TTL**: Auto-expire after a time window
- **Explicit invalidation**: Delete cache key on update
- **Event-driven**: Listen to change events and invalidate

## What to Cache

- Database query results (read-heavy, rarely changes)
- API responses (external services, rate-limited)
- Computed values (aggregations, transformations)
- Static assets (images, CSS, JS)

## What NOT to Cache

- User-specific real-time data
- Financial transactions
- Anything requiring immediate consistency

---

Cache strategically, invalidate aggressively, and always have a fallback when the cache is empty.
