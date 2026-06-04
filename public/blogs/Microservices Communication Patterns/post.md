# Microservices Communication Patterns

How your services talk to each other determines your system's resilience, performance, and debuggability.

## Synchronous (Request-Response)

Service A calls Service B and waits. Simple but creates temporal coupling — if B is down, A fails.

- **REST**: Simple, ubiquitous, human-readable
- **gRPC**: Fast, typed, bi-directional streaming
- **GraphQL**: Flexible querying, reduces over-fetching

## Asynchronous (Event-Driven)

Service A publishes an event. Service B consumes it when ready. Decoupled but adds complexity.

- **Message Queues** (RabbitMQ): Point-to-point, task distribution
- **Event Streams** (Kafka): Pub/sub, durable, replayable
- **Event Bus**: In-process or distributed, simple pub/sub

## The Hybrid Approach

Use synchronous calls for queries (you need the answer now) and async events for commands (fire and forget). This is the sweet spot for most systems.

## Service Mesh

For large deployments, a service mesh (Istio, Linkerd) handles retry, timeout, circuit breaking, and mutual TLS transparently — without changing application code.

## Backward Compatibility

Never break contracts. Add new fields as optional. Remove fields gradually (deprecate, then remove). Use schema registries for event contracts.

---

Choose the simplest pattern that works. You can always add complexity later. Removing it is much harder.
