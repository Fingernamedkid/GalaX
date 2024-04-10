package com.backend.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;


@Entity
@Data
public class FavoriteMovies {

    @Id
   private int  idFavoriteMovies;
   private  int idTmdb ;
    private  int idUser ;

    @ManyToOne
    private Users users;

}
