CREATE DATABASE IF NOT EXISTS live_lecture_26_1;

USE live_lecture_26_1;

DROP TABLE IF EXISTS characters;

CREATE TABLE characters (
id INT unsigned NOT NULL auto_increment,
name VARCHAR(20) NOT NULL,
cartoon VARCHAR(40) NOT NULL,
CONSTRAINT pk_characters PRIMARY KEY (id)
);

INSERT INTO 'live_lecture_26_1'.'characters'
(
`name`,
`cartoon`)
VALUES 
('Abigail', 'KND - A Turma do bairro'),
('Corvo', 'Solar Opposites'),
('Dexter', 'Laborátorio de Dexter');