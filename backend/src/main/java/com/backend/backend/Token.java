package com.backend.backend;

public class Token {
        public static String maketoken(){
            String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789" + "abcdefghijklmnopqrstuvxyz";
            StringBuilder sb = new StringBuilder(20);
            for (int i = 0; i < 20; i++) {
                int index = (int)(AlphaNumericString.length()* Math.random());
                sb.append(AlphaNumericString.charAt(index));
            }
            return sb.toString();
    };
}
