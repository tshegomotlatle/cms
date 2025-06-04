package com.example;

import org.keycloak.events.Event;
import org.keycloak.events.EventListenerProvider;
import org.keycloak.events.EventType;
import org.keycloak.events.admin.AdminEvent;

import java.io.InputStream;
import java.io.OutputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class PostRegisterEventListenerProvider implements EventListenerProvider {

    private static final String POST_REGISTER_URL = "http://cms-api:3000/api/authentication/post-register";

    @Override
    public void onEvent(Event event) {
        System.out.println("[PostRegisterEventListener] Received event: " + event.getType());
        if (EventType.REGISTER.equals(event.getType())) {
            System.out.println("[PostRegisterEventListener] Processing REGISTER event for userId: " + event.getUserId());
            try {
                URL url = new URL(POST_REGISTER_URL);
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("POST");
                conn.setRequestProperty("Content-Type", "application/json");
                conn.setDoOutput(true);

                String payload = String.format("{\"userId\":\"%s\", \"realm\":\"%s\"}",
                        event.getUserId(), event.getRealmId());

                try (OutputStream os = conn.getOutputStream()) {
                    os.write(payload.getBytes(StandardCharsets.UTF_8));
                    os.flush();
                }

                int responseCode = conn.getResponseCode();
                System.out.println("[PostRegisterEventListener] Response Code: " + responseCode);

                try (InputStream is = conn.getInputStream()) {
                    String responseBody = new String(is.readAllBytes(), StandardCharsets.UTF_8);
                    System.out.println("[PostRegisterEventListener] Response Body: " + responseBody);
                }

            } catch (IOException e) {
                System.err.println("[PostRegisterEventListener] IOException occurred: " + e.getMessage());
                try {
                    HttpURLConnection errorConn = (HttpURLConnection) new URL(POST_REGISTER_URL).openConnection();
                    try (InputStream es = errorConn.getErrorStream()) {
                        if (es != null) {
                            String errorBody = new String(es.readAllBytes(), StandardCharsets.UTF_8);
                            System.err.println("[PostRegisterEventListener] Error Body: " + errorBody);
                        }
                    }
                } catch (IOException ignored) {}
                e.printStackTrace();
            } catch (Exception e) {
                System.err.println("[PostRegisterEventListener] Unexpected error: " + e.getMessage());
                e.printStackTrace();
            }
        }
    }

    @Override
    public void onEvent(AdminEvent adminEvent, boolean includeRepresentation) {
        // No-op
    }

    @Override
    public void close() {
        // Optional: cleanup resources if needed
    }
}
