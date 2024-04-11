package com.backend.backend;

import com.backend.backend.model.FavoriteMovies;
import com.backend.backend.model.FavoriteSeries;
import com.backend.backend.repository.FavoriteMoviesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.backend.backend.repository.FavoriteSeriesRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4568")
public class ControllerFav {
    @Autowired
    FavoriteMoviesRepository favoriteMoviesRepository;
    @Autowired
    FavoriteSeriesRepository favoriteSeriesRepository;
    @PostMapping("/saveFilm")
    public List<String> users1(@RequestBody FavoriteMovies film) {
        System.out.println(film.toString());

        List<FavoriteMovies> listFavMovies =  favoriteMoviesRepository.findAllByIdUser(film.getIdUser());
        List<String> respond = new ArrayList<>();
        boolean exists = false;
        FavoriteMovies deletingfilm = new FavoriteMovies();
        for (FavoriteMovies movie : listFavMovies) {
            if (movie.getIdTmdb() == film.getIdTmdb()) {
                exists = true;
                deletingfilm = movie;
                break;
            }
        }
        if (listFavMovies == null || !exists) {
            favoriteMoviesRepository.save(film);
            respond.add("Success");
        } else{
            favoriteMoviesRepository.delete(deletingfilm);
            respond.add("Removed");
        }
        long userid = film.getIdTmdb();
        respond.add(String.valueOf(userid));
        return respond;
    }

    @GetMapping("/getFilms/{userId}")
    public List<String> getAll(@PathVariable("userId") int id) {

        List<FavoriteMovies> listFavMovies = favoriteMoviesRepository.findAllByIdUser(id);
        List<String> respond = new ArrayList<>();

        if (listFavMovies != null && !listFavMovies.isEmpty()) {
                for (FavoriteMovies movie : listFavMovies) {
                respond.add(String.valueOf(movie.getIdTmdb()));
            }
        } else {
            respond.add("failed");
        }

        return respond;
    }
    @PostMapping("/saveSeries")
    public List<String> series(@RequestBody FavoriteSeries series) {
        System.out.println(series.toString());

        List<FavoriteSeries> listFavSeries =  favoriteSeriesRepository.findAllByIdUser(series.getIdUser());
        List<String> respond = new ArrayList<>();
        boolean exists = false;
        FavoriteSeries deletingSeries = new FavoriteSeries();
        for (FavoriteSeries s : listFavSeries) {
            if (s.getIdTmdb() == series.getIdTmdb()) {
                exists = true;
                deletingSeries = s;
                break;
            }
        }
        if (listFavSeries == null || !exists) {
            favoriteSeriesRepository.save(series);
            respond.add("Success");
        } else{
            favoriteSeriesRepository.delete(deletingSeries);
            respond.add("Removed");
        }
        long userid = series.getIdTmdb();
        respond.add(String.valueOf(userid));
        return respond;
    }
    @GetMapping("/getSeries/{userId}")
    public List<String> getAllSeries(@PathVariable("userId") int id) {

        List<FavoriteSeries> listFavSeries = favoriteSeriesRepository.findAllByIdUser(id);
        List<String> respond = new ArrayList<>();

        if (listFavSeries != null && !listFavSeries.isEmpty()) {
            for (FavoriteSeries series : listFavSeries) {
                respond.add(String.valueOf(series.getIdTmdb()));
            }
        } else {
            respond.add("No favorite series found");
        }

        return respond;
    }

}
