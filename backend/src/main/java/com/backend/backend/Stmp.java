package com.backend.backend;
import javax.mail.*;
import javax.mail.internet.*;

import java.util.Properties;
public class Stmp {
    public static void sendEmailVerificationEmail( String to) {
        String host = "smtp.gmail.com";
        String port = "587";
        String from = "teppi0307@gmail.com";
        String password = "Tompihu2275185";
        String subject = "Test Email";
        String text = "This is a test email sent from Java application.";


        Properties properties = new Properties();
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", port);
        // Create session
        Session session = Session.getInstance(properties, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(from, password);
            }
        });

        try {
            // Create MimeMessage object
            MimeMessage message = new MimeMessage(session);

            // Set From: header field of the header
            message.setFrom(new InternetAddress(from));

            // Set To: header field of the header
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

            // Set Subject: header field
            message.setSubject(subject);

            // Set the actual message
            message.setText(text);

            // Send message
            Transport.send(message);
            System.out.println("Email sent successfully.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
