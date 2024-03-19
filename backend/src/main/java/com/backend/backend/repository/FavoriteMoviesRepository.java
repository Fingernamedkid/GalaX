package com.backend.backend.repository;

import com.backend.backend.model.FavoriteMovies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoriteMoviesRepository extends JpaRepository<FavoriteMovies,Integer> {
}
