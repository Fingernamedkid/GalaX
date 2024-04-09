package com.backend.backend.service;

import com.backend.backend.model.Users;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.Base64;
import java.util.HashMap;
import java.util.function.Function;

import static io.jsonwebtoken.SignatureAlgorithm.HS256;

@Component

public class JWTUtils {
    private SecretKey Key;

    private static final long Expiration_date= 86400000;

    public JWTUtils(){
        String secretString="MommyBinahPleaseStepOnMyBallsAndCrushThemWithYourDegradedLock";
        byte[] keyBtye = Base64.getDecoder().decode(secretString.getBytes(StandardCharsets.UTF_8));
        this.Key = new SecretKeySpec(keyBtye, "HMACSHA384");
/***
 * Why Byte Array?
 * Cryptographic Algorithms Operate on Bytes: Most cryptographic algorithms, such as HMAC (Hash-based Message Authentication Code) used for JWT, require keys to be byte arrays. These algorithms perform operations on binary data, not on strings or characters. So, to use a key with such algorithms, you need to provide it in byte form.
 * Constructor of SecretKeySpec: public SecretKeySpec(byte[] key,
 *  int offset,
 *  int len,
 *  String algorithm)
 */
    }
    public String generateToken(Users user){
        Date curr_time = new Date(System.currentTimeMillis());
        Date expiration_date = new Date(System.currentTimeMillis() + Expiration_date);

        return Jwts.builder()
                .setSubject(user.getFirst_name())
                .setIssuedAt(curr_time)
                .setExpiration(expiration_date)
                .signWith(HS256,Key)
                .compact();

    }
    public String generateRefToken(HashMap<String, Object> claims, Users user){
        Date curr_time = new Date(System.currentTimeMillis());
        Date expiration_date = new Date(System.currentTimeMillis() + Expiration_date);

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(user.getFirst_name())
                .setIssuedAt(curr_time)
                .setExpiration(expiration_date)
                .signWith(HS256,Key)
                .compact();

    }
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    public String extractUsername(String token){
        return extractClaim(token, Claims::getSubject);
    }


    private Claims extractAllClaims(String token) {
        return Jwts.parser().parseClaimsJws(token).getBody();
    }
    public boolean isTokenValid(String token, Users users){
        final String username = extractUsername(token);
        return (username.equals(users.getFirst_name())&& !isTokenExpired(token));
    }
    public boolean isTokenExpired(String token){
        return extractClaim(token, Claims::getExpiration).before(new Date());
    }
    /***
     *
     * https://www.youtube.com/watch?v=EjrlN_OQVDQ
     */


}
