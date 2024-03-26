package com.backend.backend.repository;

import com.backend.backend.model.FavSeries;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavSerRepository extends JpaRepository<FavSeries, Integer> {
}
