package com.backend.backend.repository;

import com.backend.backend.model.FavSeries;
import com.backend.backend.model.Genre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4568")


public class ContGenre {

        @Autowired
       GenreRepository genreRepository;

        @GetMapping("/genre")
        public Genre genre(@RequestBody Genre genre) {

            return genre;
        }

    }

