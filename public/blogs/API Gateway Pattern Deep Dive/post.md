# API Gateway Pattern: A Deep Dive

An API gateway is the single entry point for all client requests. It handles cross-cutting concerns so your services don't have to.

## What It Does

- **Routing**: Maps external requests to internal services
- **Authentication**: Validates tokens once at the gateway
- **Rate Limiting**: Protects services from abuse
- **Load Balancing**: Distributes traffic across instances
- **Request Transformation**: Adapts requests for different backend versions
- **Response Caching**: Caches frequent responses

## When You Need One

- Multiple client types (web, mobile, third-party) consuming different APIs
- Shared authentication/authorization logic
- Rate limiting requirements
- Request aggregation (one call triggers multiple services)

## When You Don't

- Single service, single client
- Internal service-to-service communication
- Simple CRUD applications

## Popular Implementations

- **Kong**: Open-source, plugin-based
- **Spring Cloud Gateway**: Java-native, integrates with Spring ecosystem
- **AWS API Gateway**: Managed service, serverless-friendly
- **NGINX/Envoy**: High-performance, configurable proxies

## Anti-Pattern: Smart Gateway

Don't put business logic in the gateway. It should route and filter, not orchestrate. If your gateway calls three services and merges responses, you've built a BFF (Backend for Frontend) — that's a different pattern with different tradeoffs.

---

An API gateway reduces complexity for clients. But it's also a single point of failure — design for high availability.
