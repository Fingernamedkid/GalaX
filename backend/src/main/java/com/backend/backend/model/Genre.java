package com.backend.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Genre {
    @Id
    private int idgenre;
    private String nom_genre;

}
