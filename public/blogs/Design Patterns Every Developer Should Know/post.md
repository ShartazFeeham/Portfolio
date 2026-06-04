# Design Patterns Every Developer Should Know

Design patterns are reusable solutions to recurring problems. They're not rules — they're tools. Knowing when to use them (and when not to) separates senior engineers from juniors.

## Strategy Pattern

Encapsulate interchangeable behaviors behind a common interface. When you see long `if-else` chains that select behavior, the strategy pattern is calling.

```java
public interface PricingStrategy {
    BigDecimal calculate(Order order);
}

public class DiscountPricing implements PricingStrategy {
    public BigDecimal calculate(Order order) {
        return order.getTotal().multiply(BigDecimal.valueOf(0.9));
    }
}
```

## Observer Pattern

When one object's state change needs to notify multiple others, the observer pattern decouples the producer from consumers. Event-driven architectures are built on this foundation.

## Repository Pattern

Abstract data access behind a collection-like interface. Your business logic shouldn't know whether data comes from PostgreSQL, Redis, or an external API.

## Factory Pattern

Centralize object creation when the concrete type varies. This keeps construction logic in one place and makes adding new types trivial.

## Singleton (Use Sparingly)

Ensure a class has only one instance. Useful for configuration or connection pools, but overuse leads to hidden global state that makes testing painful.

## Anti-Pattern: Over-Patterning

Don't use a pattern because you read about it yesterday. Use it when the problem genuinely calls for it. A simple `if` statement beats a Strategy pattern with one implementation.

---

Patterns are vocabulary. Knowing their names lets you communicate complex ideas quickly. But the best code often uses no named pattern at all — it's just obvious.
