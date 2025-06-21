package com.example;

import org.keycloak.events.Event;
import org.keycloak.events.EventListenerProvider;
import org.keycloak.events.EventType;
import org.keycloak.events.admin.AdminEvent;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.RealmModel;
import org.keycloak.models.UserModel;

import java.io.OutputStream;
import java.io.InputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class PostRegisterEventListenerProvider implements EventListenerProvider {

    private static final String POST_REGISTER_URL = "http://cms-api:3000/api/authentication/post-register";
    private final KeycloakSession session;

    public PostRegisterEventListenerProvider(KeycloakSession session) {
        this.session = session;
    }

    @Override
    public void onEvent(Event event) {
        if (EventType.REGISTER.equals(event.getType())) {
            System.out.println("[PostRegisterEventListener] REGISTER event received");

            String userId = event.getUserId();
            String realmId = event.getRealmId();

            RealmModel realm = session.realms().getRealm(realmId);
            UserModel user = session.users().getUserById(realm, userId);

            if (user == null) {
                System.err.println("[PostRegisterEventListener] User not found with ID: " + userId);
                return;
            }

            String email = user.getEmail() != null ? user.getEmail() : "";
            String firstName = user.getFirstName() != null ? user.getFirstName() : "";
            String lastName = user.getLastName() != null ? user.getLastName() : "";

            // Optional custom attribute handling (if needed)
            String mobileNumber = user.getFirstAttribute("mobileNumber");
            if (mobileNumber == null) mobileNumber = "";

            String password = ""; // Keycloak doesn't expose this, must be handled externally

            String payload = String.format(
                "{" +
                "\"userId\":\"%s\"," +
                "\"realm\":\"%s\"," +
                "\"email\":\"%s\"," +
                "\"name\":\"%s\"," +
                "\"surname\":\"%s\"," +
                "\"mobileNumber\":\"%s\"," +
                "\"password\":\"%s\"" +
                "}",
                userId, realmId, email, firstName, lastName, mobileNumber, password
            );

            try {
                URL url = new URL(POST_REGISTER_URL);
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("POST");
                conn.setRequestProperty("Content-Type", "application/json");
                conn.setDoOutput(true);

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
