DROP DATABASE IF EXISTS sitest;
CREATE DATABASE IF NOT EXISTS sitest;

USE sitest;

CREATE TABLE IF NOT EXISTS accounts (
	id INT NOT NULL AUTO_INCREMENT,
    name varchar(20) NOT NULL,
    username VARCHAR(10) NOT NULL,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY `username` (username)
);

CREATE TABLE IF NOT EXISTS albuns (
	id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    album_name VARCHAR(20) NOT NULL,
    artist VARCHAR(30) NOT NULL,
    year INT(4) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    duration INT(5),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES accounts(id)
    UNIQUE KEY `album_name` (name)
);

INSERT INTO accounts (id, name, username, password) VALUES
    ('1', 'Administrator', 'username', '123456')

INSERT INTO albuns (id, user_id, album_name, artist, year, gender, duration) VALUES
('1', '1', 'NINE', 'Blink 182', '2019', 'Pop Punk', '41')

INSERT INTO albuns (id, user_id, album_name, artist, year, gender, duration) VALUES
('2', '2', 'Days go By', 'The OffSpring', '2012', 'Punk Rock', '42')