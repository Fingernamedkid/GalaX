package com.backend.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class    Users {
    @Id
    private int idusers;
    private String nom;
    private String prenom;
    private Date birthday;
    private String email;
    private String passwrd;

}






