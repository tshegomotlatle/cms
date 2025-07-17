package com.example;

import org.keycloak.Config;
import org.keycloak.events.EventListenerProvider;
import org.keycloak.events.EventListenerProviderFactory;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.KeycloakSessionFactory;

public class PostRegisterEventListenerProviderFactory implements EventListenerProviderFactory {

    @Override
    public EventListenerProvider create(KeycloakSession session) {
        return new PostRegisterEventListenerProvider(session);
    }

    @Override
    public void init(Config.Scope config) {
        System.out.println("[PostRegisterEventListener] Factory init");
    }

    @Override
    public void postInit(KeycloakSessionFactory factory) {
        System.out.println("[PostRegisterEventListener] Factory postInit");
    }

    @Override
    public void close() {
        // No cleanup needed
    }

    @Override
    public String getId() {
        return "post-register-listener";
    }
}
