# Database Indexing: A Complete Guide

Indexes are the difference between a query that takes 50 milliseconds and one that takes 50 seconds. Understanding how they work is non-negotiable for any backend engineer.

## B-Tree Indexes

The default index type in PostgreSQL and most databases. B-trees work well for equality and range queries. They maintain sorted order, making `WHERE created_at > '2024-01-01'` nearly instant.

```sql
CREATE INDEX idx_orders_created_at ON orders(created_at);
```

## Composite Indexes

Column order matters. A composite index on `(user_id, created_at)` can serve queries filtering by both columns or just `user_id`, but NOT queries filtering only by `created_at`.

**Rule of thumb:** Put the most selective column first, and columns used in equality conditions before range conditions.

## When NOT to Index

- Small tables (sequential scan is faster than index lookup)
- Columns with low cardinality (boolean flags, status enums with 2-3 values)
- Tables with heavy write workloads where index maintenance cost outweighs read benefit

## Partial Indexes

Index only the rows you actually query. This reduces index size and maintenance overhead.

```sql
CREATE INDEX idx_active_users ON users(email) WHERE is_active = true;
```

## EXPLAIN ANALYZE

Always verify your indexes are being used. `EXPLAIN ANALYZE` shows the actual query plan and execution time. An unused index is wasted disk space and write overhead.

---

Indexes are not a silver bullet. Add them deliberately, measure their impact, and remove the ones that aren't pulling their weight.
