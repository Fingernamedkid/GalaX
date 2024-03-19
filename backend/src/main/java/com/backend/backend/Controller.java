package com.backend.backend;
import com.backend.backend.model.Users;
import com.backend.backend.repository.FavoriteMoviesRepository;
import com.backend.backend.repository.UsersRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static com.backend.backend.Stmp.sendEmailVerificationEmail;

@RestController
@CrossOrigin("http://localhost:4568")
public class Controller {
    @Autowired
    UsersRepository usersRepository;
    @Autowired
    FavoriteMoviesRepository favoriteMoviesRepository;
    // te preparer les requette si tu as 12 repo tu inject 12 autoriwere.
    @PostMapping("/createU")
    public List<String> users1(@RequestBody Users users) {
        Users existed = usersRepository.findUsersByEmail(users.getEmail());
        List<String> respond = new ArrayList<>();

         if ((existed == null) || !existed.getEmail().equals(users.getEmail())) {
         usersRepository.save(users);
         respond.add("Success");
         } else {
         respond.add("failed");
         }

        int userid = users.getIdusers();

        respond.add("Success");
        respond.add(String.valueOf(userid));
        return respond;
    }

    @GetMapping("/verifyU/{id}")
    public List<String> verifyU(@PathVariable("id") int userId) {
        System.out.println(userId);

        Users user = usersRepository.findUsersByIdusers(userId);
        List<String> respond = new ArrayList<>();
        String mail = user.getEmail();
        String token = Token.maketoken();
        sendEmailVerificationEmail(mail,token);
        respond.add("Success");
        respond.add(String.valueOf(userId));
        return respond;
    }
    @PostMapping("/loginU")
    public List<String> login(@RequestBody Users users) {
        Users existed = usersRepository.findUsersByEmail(users.getEmail());
        List<String> respond = new ArrayList<>();

        if ((existed == null) || !existed.getEmail().equals(users.getEmail())) {
            if ((existed == null) || !existed.getPasswrd().equals(users.getPasswrd())) {
                respond.add("Success");
            }
        } else {
            respond.add("failed");
        }

        int userid = users.getIdusers();

        respond.add("Success");
        respond.add(String.valueOf(userid));
        return respond;
    }

}
