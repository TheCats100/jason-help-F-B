DROP DATABASE IF EXISTS helpJason;

CREATE DATABASE helpJason;

USE helpJason;

CREATE TABLE team (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);


/*---------------------------------------*/


INSERT INTO team (`id`, `name`) VALUES (1, 'Eleftheria'), (2, 'Gennadios'), (3, 'Lysimachos');
