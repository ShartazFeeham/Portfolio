# Docker in Production: Lessons Learned

Docker makes it easy to run things locally. Running containers in production is a different sport. Here's what I wish someone told me before our first deployment.

## Multi-Stage Builds

Your production image should not contain build tools, source code, or package manager caches. Multi-stage builds keep images small and attack surfaces minimal.

```dockerfile
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
RUN mvn package -DskipTests

FROM eclipse-temurin:21-jre-alpine
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
```

## Health Checks

Always define a `HEALTHCHECK` instruction. Orchestrators like Kubernetes use this to decide whether to restart your container. Without it, a container that's alive but broken stays running.

## Don't Run as Root

Containers should never run as root. Add a non-root user and switch to it before your `ENTRYPOINT`.

```dockerfile
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
```

## Logging to stdout

Write logs to stdout/stderr, not files. Container orchestration platforms collect these streams automatically. File-based logging requires volume mounts and log rotation — unnecessary complexity.

## Resource Limits

Always set memory and CPU limits. A single runaway container can starve the entire host without resource constraints.

---

Containers are not VMs. Treat them as ephemeral, stateless processes. The moment you start treating a container like a pet instead of cattle, you've lost the plot.
