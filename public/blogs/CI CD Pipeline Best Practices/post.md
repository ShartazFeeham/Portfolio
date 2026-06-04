# CI/CD Pipeline Best Practices

A good CI/CD pipeline catches problems early, deploys safely, and gives you confidence to ship every day.

## Continuous Integration

Every commit triggers an automated build and test cycle. If it's green, it's mergeable.

**Pipeline stages:**
1. Build — compile, resolve dependencies
2. Lint — static analysis, code style
3. Unit tests — fast, isolated
4. Integration tests — database, API calls
5. Security scan — dependency vulnerabilities

## Continuous Delivery vs Deployment

- **Continuous Delivery**: Every commit is *ready* to deploy. A human clicks the button.
- **Continuous Deployment**: Every green commit *is* deployed. No human in the loop.

Start with delivery, graduate to deployment when you trust your tests.

## Branch Strategy

Trunk-based development with short-lived branches. Long-lived branches create merge hell.

## Artifact Management

Build once, deploy everywhere. Don't rebuild for each environment. Tag your Docker images with commit SHA, not "latest".

## Blue-Green Deployments

Maintain two identical environments. Deploy to the idle one, switch traffic when healthy. Instant rollback — just switch back.

## Feature Flags

Decouple deployment from release. Deploy to production behind a flag, enable for internal users, then everyone.

---

The goal is not to automate deployments. The goal is to make deployments boring.
