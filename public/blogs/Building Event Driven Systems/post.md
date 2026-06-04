# Building Event-Driven Systems

Event-driven architecture transforms how systems communicate. Instead of synchronous request-response chains that cascade failures, events create loose coupling that scales naturally.

## Why Events?

Synchronous systems create tight coupling. Service A calls Service B calls Service C. If C is slow, A times out. If B is down, A fails. Events break this chain — Service A publishes an event and moves on.

## Event Sourcing

Store every state change as an immutable event rather than overwriting the current state. This gives you a complete audit trail and the ability to reconstruct any past state.

```
OrderCreated → ItemAdded → PaymentReceived → OrderShipped
```

## CQRS

Command Query Responsibility Segregation separates write operations from reads. Your write model optimizes for consistency; your read model optimizes for query performance. They don't need to share the same database schema.

## Choosing a Broker

- **Kafka**: High throughput, durable, ordered per partition. Best for event streaming.
- **RabbitMQ**: Flexible routing, lower throughput. Best for task queues.
- **Redis Streams**: Lightweight, in-memory. Best for ephemeral events.

## Idempotency Is Mandatory

Consumers will receive duplicate events. It's not a matter of if, but when. Design every consumer to handle the same event multiple times safely.

## Schema Governance

Events are contracts. Use schema registries and enforce backward compatibility. A breaking schema change in one producer can bring down every consumer downstream.

---

Event-driven systems are more complex to build but far simpler to scale. The investment in design upfront pays dividends when your system grows beyond what synchronous architectures can handle.
