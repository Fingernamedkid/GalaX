package com.backend.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.boot.context.properties.bind.DefaultValue;


@Entity
@Data
public class FavoriteSeries {

    @Id
    @Column(name = "idFavoriteSeries")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //AutoIncrement
    private int idFavoriteSeries;

    @Column(name = "id_user", nullable = false)
    private int idUser;



    @Column(name = "idTmdb", nullable = false)

    private long idTmdb;



}
