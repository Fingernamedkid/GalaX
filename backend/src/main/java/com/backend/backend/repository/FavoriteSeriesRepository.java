package com.backend.backend.repository;

import com.backend.backend.model.FavoriteMovies;
import com.backend.backend.model.FavoriteSeries;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoriteSeriesRepository extends JpaRepository<FavoriteSeries,Integer> {
    List<FavoriteMovies> findAllByIdUser(int movieId);
}
