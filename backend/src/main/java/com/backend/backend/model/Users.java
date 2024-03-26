package com.backend.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class Users {
    @Id
    private int idusers;
    private String first_name;
    private String last_name;
    private Date date;
    private String email;
    private String password;

}






