package com.backend.backend.repository;


import com.backend.backend.model.FavSeries;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin("http://localhost:4568")
public class ContFavSer {

        @Autowired
        FavSerRepository favSerRepository;

        @GetMapping("/FavSeries")
        public FavSeries favGenre(@RequestBody FavSeries favSeries) {

            return favSeries;
        }

    }

