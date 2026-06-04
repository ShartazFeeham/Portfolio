# The Art of Writing Clean Code

Clean code is a love letter to your future self. It transcends syntax, focusing on intent and cognitive load. The most powerful line of code is often the one you chose to delete.

## Simplicity Over Cleverness

The best code is boring code. Clever one-liners that require five minutes to understand cost far more than three explicit lines that are immediately clear.

```java
// Clever but fragile
return Optional.ofNullable(map.get(key)).map(List::size).orElse(0);

// Clear and maintainable
if (map.containsKey(key)) {
    return map.get(key).size();
}
return 0;
```

## Naming Is Documentation

Variable names should reveal intent. A name like `data` tells you nothing. `unverifiedUserEmails` tells you everything. Spend time on names — you'll read code ten times more often than you write it.

## Small Functions

A function should do one thing. If you need an "and" to describe what it does, it does too much. Small functions are testable, reusable, and self-documenting.

## The Rule of Three

When you copy-paste code for the third time, it's time to abstract. But abstract earlier than three if the pattern is obvious — duplication is cheaper than the wrong abstraction.

## Delete Dead Code

Version control exists for a reason. Delete unused code instead of commenting it out. Comments like "// might need this later" are lies we tell ourselves.

---

Simplicity is the ultimate engineering challenge. Writing clean code is not about following rules — it's about caring about the people who will read your code after you.
