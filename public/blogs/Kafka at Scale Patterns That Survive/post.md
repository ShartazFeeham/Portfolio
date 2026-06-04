# Kafka at Scale: Patterns That Survive

Apache Kafka powers some of the world's largest event-driven systems. Here's what keeps them running when traffic spikes and brokers fail.

## Idempotent Producers

Enable idempotent producers from day one. Exactly-once semantics prevent duplicate events during retries, and the overhead is negligible compared to the cost of deduplication downstream.

```properties
enable.idempotence=true
acks=all
```

## Consumer Lag Monitoring

Set up consumer lag alerts with a clear escalation path. When your consumers fall behind, you need to know before your business does. Use tools like Burrow or Kafka's built-in metrics exposed through JMX.

## Partition Strategy

Your partition count determines your parallelism ceiling. Plan for growth but don't over-partition — each partition consumes memory on every broker and increases leader election time during failures.

- Start with a reasonable count (6-12 per topic for most workloads)
- Monitor throughput per partition
- Scale horizontally by adding partitions before you hit limits

## Dead Letter Queues

Not every message can be processed successfully. Dead letter queues (DLQs) capture failures without blocking the main pipeline, giving you time to investigate and replay.

## Schema Evolution

Use a schema registry. Avro or Protobuf schemas with backward compatibility rules prevent silent deserialization failures when producers and consumers are on different versions.

---

Kafka is powerful, but only when you respect its design principles. Build for failure, monitor everything, and keep your schemas tight.
