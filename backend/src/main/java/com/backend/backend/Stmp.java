package com.backend.backend;
import javax.mail.*;
import javax.mail.internet.*;

import java.util.Properties;
public class Stmp {
    public static void sendEmailVerificationEmail( String to) {
        String host = "smtp.gmail.com";
        String port = "587";
        String from = "teppi0307@gmail.com";
        String password = "twwx fvfh ztqd pkdd";
        String subject = "Test Email";
        String text = "Veryfied Email";



        Properties properties = new Properties();
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", port);
        Session session = Session.getInstance(properties, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(from, password);
            }
        });

        try {
            MimeMessage message = new MimeMessage(session);

            message.setFrom(new InternetAddress(from));

            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

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

    public static void main(String[] args) {sendEmailVerificationEmail("minhtri.trandang2005@gmail.com");
    }
}
