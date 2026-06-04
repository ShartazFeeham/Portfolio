# Software Estimation Techniques

Every engineer hates estimation. But it's a skill, not a talent — and it improves with practice.

## Why Estimates Fail

- Unknown unknowns (hidden complexity)
- Optimism bias (best-case scenario planning)
- Ignoring non-coding work (meetings, reviews, debugging)
- Confusing estimate with commitment

## Techniques

### T-Shirt Sizing

Small, Medium, Large, Extra Large. Quick, imprecise, good for early planning. Don't attach hours to these — that defeats the purpose.

### Story Points

Relative sizing using Fibonacci (1, 2, 3, 5, 8, 13, 21). A 5 is harder than a 3, but you don't say by how much. Over time, team velocity converts points to time ranges.

### Three-Point Estimation

Best case, most likely, worst case. Weighted average:

```
Estimate = (Best + 4×MostLikely + Worst) / 6
```

This accounts for uncertainty without pretending precision doesn't exist.

### Bottom-Up Estimation

Break the task into small pieces. Estimate each. Sum them. More accurate but takes longer. Good for sprint planning.

## The Cone of Uncertainty

Early in a project, estimates have 4x variance. As details emerge, variance shrinks. Give ranges, not single numbers:

- "2-4 weeks" early on
- "12-15 days" when design is clear
- "13 days" when implementation starts

## What Actually Works

Track your past estimates vs actuals. Review them quarterly. Your estimation improves when you have data, not just gut feeling.

---

Estimates are predictions, not promises. Communicate uncertainty honestly, update estimates as you learn, and never punish honesty.
