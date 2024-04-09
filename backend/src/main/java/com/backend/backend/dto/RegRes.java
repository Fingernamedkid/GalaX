package com.backend.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.Date;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RegRes {
    private int statusCode;
    private String err;
    private String msg;
    private String tkn;
    private String refreshtkn;
    private String expiration;
    private String first_name;
    private String last_name;
    private String email;
    private String password;

}
