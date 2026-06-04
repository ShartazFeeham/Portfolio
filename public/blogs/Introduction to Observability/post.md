# Introduction to Observability

Monitoring tells you when something broke. Observability tells you why.

## The Three Pillars

### Logs

Discrete events with timestamps. Great for debugging specific issues.

```
2024-03-15 14:32:01 ERROR PaymentService - Charge failed: timeout connecting to gateway
```

### Metrics

Numeric measurements aggregated over time. Great for dashboards and alerts.

- Request rate (requests/second)
- Error rate (errors/total requests)
- Latency percentiles (p50, p95, p99)
- Saturation (CPU, memory, disk, connections)

### Traces

Follow a single request across multiple services. Essential for distributed systems.

```
[Client] → [API Gateway] → [Order Service] → [Payment Service] → [Notification Service]
   2ms         5ms             45ms              120ms                30ms
```

## Structured Logging

Use JSON logs, not free-form text. This makes logs searchable, filterable, and aggregatable.

```json
{"level": "error", "service": "payment", "trace_id": "abc123", "msg": "charge failed", "duration_ms": 5000}
```

## Alerting

Alert on symptoms (high error rate, slow responses), not causes (high CPU). Users don't care about CPU — they care about latency.

## Tools

- **Logging**: ELK Stack, Loki
- **Metrics**: Prometheus, Grafana
- **Tracing**: Jaeger, Zipkin, OpenTelemetry

---

Observability is not a tool. It's a practice. Instrument early, structure your data, and let the system tell its own story.
