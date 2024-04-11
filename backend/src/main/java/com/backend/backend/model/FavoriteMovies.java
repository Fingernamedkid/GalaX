package com.backend.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.boot.context.properties.bind.DefaultValue;


@Entity
@Data
public class FavoriteMovies {

    @Id
    @Column(name = "idFavoriteMovies")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //AutoIncrement
    private int idFavoriteMovies;

    @Column(name = "id_user", nullable = false)
    private int idUser;

    @Column(name = "idTmdb", nullable = false)
    private long idTmdb;



}
