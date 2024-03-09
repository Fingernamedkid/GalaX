package com.backend.backend;
import com.backend.backend.model.Users;
import com.backend.backend.repository.FavoriteMoviesRepository;
import com.backend.backend.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4568")
public class ControllerU {
    @Autowired
    UsersRepository usersRepository;
    @Autowired
    FavoriteMoviesRepository favoriteMoviesRepository;
    // te preparer les requette si tu as 12 repo tu inject 12 autoriwere.
    @PostMapping("/createU")
    public Users users1( @RequestBody Users users) {
        usersRepository.save(users);
        return users;
    }


}
