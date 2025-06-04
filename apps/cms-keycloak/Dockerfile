# Stage 1: Build the custom provider JAR using Maven
FROM maven:3.9.6-eclipse-temurin-17 AS builder

WORKDIR /build

# Copy the Maven project files
COPY apps/cms-keycloak/pom.xml .
COPY apps/cms-keycloak/src ./src

# Build the JAR file
RUN mvn clean package -DskipTests

# Stage 2: Build the final Keycloak image with the custom provider
FROM quay.io/keycloak/keycloak:25.0.2

# Copy the built JAR from the builder stage
COPY --from=builder /build/target/keycloak-post-register-listener-1.0.0.jar /opt/keycloak/providers/

# Copy custom themes
#COPY apps/cms-keycloak/themes /opt/keycloak/themes

EXPOSE 8080

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"]
