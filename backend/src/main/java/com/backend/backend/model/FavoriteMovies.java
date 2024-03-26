package com.backend.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;


@Entity
@Data
public class FavoriteMovies {

    @Id
   private int  id_favorite_movies;
   private  int idusers;



}
