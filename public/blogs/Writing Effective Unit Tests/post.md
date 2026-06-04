# Writing Effective Unit Tests

Unit tests are your safety net. But bad tests are worse than no tests — they give false confidence and slow you down.

## Test Behavior, Not Implementation

Test what the function does, not how it does it. If you refactor the internals and tests break, your tests are testing the wrong thing.

```java
// Bad: tests implementation
assertEquals(ArrayList.class, service.getUsers().getClass());

// Good: tests behavior
assertEquals(3, service.getUsers().size());
```

## The AAA Pattern

**Arrange** → set up test data
**Act** → call the method
**Assert** → verify the result

One assert per test is ideal. If you need multiple, they should all verify the same behavior.

## Naming Convention

`testMethodName_givenCondition_expectedResult`

```java
@Test
void testCalculateDiscount_whenVIPCustomer_returns20Percent() { ... }
```

## Test Edge Cases

- Null inputs
- Empty collections
- Boundary values (0, MAX_INT, negative numbers)
- Concurrent access

## Don't Mock Everything

Mock external dependencies (databases, APIs). Don't mock your own business logic — if you need to mock it, the design is wrong.

## Test Coverage Is a Metric, Not a Goal

80% coverage with meaningful tests beats 100% coverage with tests that just check `result != null`.

---

Good tests give you confidence to change code. Great tests document what the code is supposed to do. Write tests you'd want to read.
