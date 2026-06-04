# Event Sourcing vs CQRS

These two patterns often appear together, but they solve different problems. Understanding them separately prevents over-engineering.

## Event Sourcing

Instead of storing current state, store every state change as an immutable event. The current state is derived by replaying events.

```
Events: AccountCreated → MoneyDeposited(100) → MoneyWithdrawn(30) → MoneyDeposited(50)
Current balance: 120
```

**Benefits:**
- Complete audit trail
- Time travel (replay to any point)
- Natural fit for event-driven systems

**Costs:**
- Event schema evolution is hard
- Replaying large event streams is slow (needs snapshots)
- Mental model shift for developers

## CQRS

Command Query Responsibility Segregation — separate your write model from your read model.

```
Commands (writes) → Write DB (optimized for consistency)
Queries (reads) → Read DB (optimized for performance)
```

**Benefits:**
- Read and write models scale independently
- Reads can use denormalized views for speed
- Writes stay simple and consistent

**Costs:**
- Eventual consistency between read and write models
- More infrastructure (two databases, sync mechanism)
- More complex to debug

## Do You Need Both?

No. You can use CQRS without event sourcing (trigger read model updates on DB changes). You can use event sourcing without CQRS (replay events for every query — slow but simple).

Use them when the problem demands it, not because they sound impressive.

---

Event sourcing gives you a perfect log of what happened. CQRS gives you fast reads. Together they're powerful, but the complexity is real. Start simple, add patterns when the pain justifies them.
