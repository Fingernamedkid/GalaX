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

        List<FavoriteMovies> listFavMovies =  favoriteMoviesRepository.findAllByIdUser(users.getIdUser());
        List<String> respond = new ArrayList<>();
        boolean exists = false;
        for (FavoriteMovies movie : listFavMovies) {
            if (movie.getIdTmdb() == users.getIdTmdb()) {
                exists = true;
                break;
            }
        }
        if (listFavMovies == null || !exists) {
            favoriteMoviesRepository.save(users);
            respond.add("Success");
        } else {
            respond.add("failed");
        }
        long userid = users.getIdTmdb();
        respond.add(String.valueOf(userid));
        return respond;
    }
    @GetMapping("/getFilms/{userId}")
    public List<String> getAll(@PathVariable("userId") int id) {

        List<FavoriteMovies> listFavMovies = favoriteMoviesRepository.findAllByIdUser(id);
        List<String> respond = new ArrayList<>();

        if (listFavMovies != null && !listFavMovies.isEmpty()) {
            respond.add("Success");
            for (FavoriteMovies movie : listFavMovies) {
                respond.add(String.valueOf(movie.getIdTmdb()));
            }
        } else {
            respond.add("failed");
        }

        return respond;     
    }

}
