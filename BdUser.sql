DROP DATABASE   IF     EXISTS bdusers;
CREATE DATABASE if not exists BdUsers;
USE bdusers;
CREATE TABLE users(
idusers int PRIMARY KEY AUTO_INCREMENT not NULL,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL, 
`date` DATE NOT NULL,
email VARCHAR(50) NOT NULL,
`password` VARCHAR(15) NOT NULL
);

CREATE TABLE favorite_movies(
id_favorite_movies int  AUTO_INCREMENT not NULL,
id_tmdb INT,
id_user INT,
FOREIGN KEY (id_user) REFERENCES Users(idusers),
PRIMARY KEY(id_favorite_movies)
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


CREATE TABLE favorite_series(
id_favorite_series int  AUTO_INCREMENT not NULL,
id_tmdb INT,
id_user INT,
FOREIGN KEY (id_user) REFERENCES Users(idusers),
PRIMARY KEY(id_favorite_series)
);


