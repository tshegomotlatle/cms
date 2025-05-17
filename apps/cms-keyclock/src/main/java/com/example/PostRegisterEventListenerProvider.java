package com.example;

import org.keycloak.events.Event;
import org.keycloak.events.EventListenerProvider;
import org.keycloak.events.admin.AdminEvent;

import java.net.HttpURLConnection;
import java.net.URL;
import java.io.OutputStream;

public class PostRegisterEventListenerProvider implements EventListenerProvider {

    @Override
    public void onEvent(Event event) {
        if ("REGISTER".equals(event.getType().toString())) {
            try {
                URL url = new URL("http://localhost:3000/api/authentication/post-register");
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("POST");
                conn.setRequestProperty("Content-Type", "application/json");
                conn.setDoOutput(true);

                String payload = String.format("{\"userId\":\"%s\", \"realm\":\"%s\"}",
                        event.getUserId(), event.getRealmId());

                try (OutputStream os = conn.getOutputStream()) {
                    os.write(payload.getBytes());
                    os.flush();
                }
            System.out.println("Fucking working bro");
                conn.getResponseCode(); // Trigger the request
            } catch (Exception e) {
                System.err.println("Post-register callback failed: " + e.getMessage());
            }
        }
    }

    // 🆕 Implement the second required method
    @Override
    public void onEvent(AdminEvent event, boolean includeRepresentation) {
        // No-op for now (but required to compile)
    }

    @Override
    public void close() {
        // Cleanup logic if needed
    }
}
