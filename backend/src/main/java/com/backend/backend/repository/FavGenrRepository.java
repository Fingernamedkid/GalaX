package com.backend.backend.repository;

import com.backend.backend.model.FavGenre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface FavGenrRepository extends JpaRepository<FavGenre, Integer> {



}
