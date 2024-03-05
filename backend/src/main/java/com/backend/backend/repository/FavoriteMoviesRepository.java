package com.backend.backend.repository;

import com.backend.backend.model.FavoriteMovies;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoriteMoviesRepository extends JpaRepository<FavoriteMovies,Integer> {
}
