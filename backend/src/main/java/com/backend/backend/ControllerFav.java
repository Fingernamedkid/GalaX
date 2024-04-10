package com.backend.backend;

import com.backend.backend.model.FavoriteMovies;
import com.backend.backend.model.Users;
import com.backend.backend.repository.FavoriteMoviesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4568")
public class ControllerFav {
    @Autowired
    FavoriteMoviesRepository favoriteMoviesRepository;
    @PostMapping("/saveFilm")
    public List<String> users1(@RequestBody FavoriteMovies users) {
        System.out.println(users.toString());
        List<Integer> existed = (List<Integer>) favoriteMoviesRepository.findAllByIdUser(users.getIdUser());
        List<String> respond = new ArrayList<>();
        if (existed == null) {
            favoriteMoviesRepository.save(users);
            respond.add("Success");
        } else {
            respond.add("failed");
        }
        int userid = users.getIdTmdb();
        respond.add(String.valueOf(userid));
        return respond;
    }
}
