DROP DATABASE   IF     EXISTS bdusers;
CREATE DATABASE if not exists BdUsers;
USE bdusers;
CREATE TABLE users(
idusers int PRIMARY KEY AUTO_INCREMENT not NULL,
Nom VARCHAR(50) NOT NULL,
Prenom VARCHAR(50) NOT NULL, 
Birthday DATE NOT NULL,
email VARCHAR(50) NOT NULL,
passwrd VARCHAR(15) NOT NULL
);

CREATE TABLE FavoriteMovies(
idFavoriteMovies int  AUTO_INCREMENT not NULL,
idusers INT,
FOREIGN KEY (idusers) REFERENCES Users(idusers),
PRIMARY KEY(idFavoriteMovies)
);

CREATE TABLE genre(
idgenre INT AUTO_INCREMENT NOT NULL,
PRIMARY KEY(idgenre),
nomGenre VARCHAR(20) NOT NULL 
);

INSERT  INTO genre(nomGenre) 
VALUE ("Action"),
("Aventure"),
("Science-fiction"),
 ("Horreur"),
 ("Fantastique"),
 ("Guerre"),
 ("Thriller"),
 ("Drame"),
("Animation"),
 ("Musical"),
 ("Biopic"),
 ("Comedy");


CREATE TABLE favoriteGenre(
idfavoriteGenre INT PRIMARY KEY   NOT NULL AUTO_INCREMENT,
idusers INT,
FOREIGN KEY (idusers) REFERENCES Users(idusers)
);


