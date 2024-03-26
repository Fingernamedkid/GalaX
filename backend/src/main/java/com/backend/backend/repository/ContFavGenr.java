package com.backend.backend.repository;

import com.backend.backend.model.FavGenre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:4568")
public class ContFavGenr {


        @Autowired
        FavGenrRepository favGenrRepository;
        @Autowired
        FavoriteMoviesRepository favoriteMoviesRepository;
        // te preparer les requette si tu as 12 repo tu inject 12 autoriwere.
        @GetMapping("/FavGenre")
        public FavGenre favGenre(@RequestBody FavGenre favGenre) {

            return favGenre;
        }

    }


