package com.backend.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class FavGenre {
    @Id
    private int idfavorite_genre;
    private int idusers;
    private int idgenre;
}
