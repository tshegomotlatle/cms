FROM purna16/java-maven-app

COPY . .

RUN mvn clean package -e

FROM quay.io/keycloak/keycloak:25.0.2

COPY apps/cms-keycloak/target/keycloak-post-register-listener-1.0.0.jar /opt/keycloak/providers/

EXPOSE 8080

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"]
