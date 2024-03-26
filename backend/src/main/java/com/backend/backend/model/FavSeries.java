package com.backend.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
@Entity
@Data
public class FavSeries {
    @Id
    private int  id_favorite_series;
    private  int idusers;


}
