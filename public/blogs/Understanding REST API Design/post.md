# Understanding REST API Design

REST is the backbone of modern web APIs. But "RESTful" means more than just returning JSON over HTTP.

## Resource Naming

Nouns, not verbs. `/users` not `/getUsers`. `/orders/123` not `/getOrder?id=123`. The HTTP method carries the verb.

## Status Codes Matter

- `200` — Success
- `201` — Created
- `204` — No content (successful delete)
- `400` — Bad request (client error)
- `404` — Not found
- `500` — Server error

Don't return `200` with an error body. Let HTTP status codes do their job.

## Pagination

Never return unbounded lists. Use cursor-based or offset pagination. Include total count and next/prev links in your response.

## Versioning

Prefix your routes: `/v1/users`. When breaking changes are needed, create `/v2/users`. Don't break existing clients.

## Rate Limiting

Protect your API. Return `429 Too Many Requests` with a `Retry-After` header when limits are exceeded.

---

A well-designed API is self-documenting. If developers need to read a 50-page guide to use your API, the design has failed.
