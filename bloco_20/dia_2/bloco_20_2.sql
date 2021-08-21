SELECT  'Olá,bem-vindo ao SQL!';

SELECT  10;

SELECT  now();

SELECT  20 * 2;

SELECT  50 / 2;

SELECT  18 AS idade;

SELECT  2019 AS ano;

SELECT  'Rafael'
       ,'Martins'
       ,25
       ,'Desenvolvedor Web';

SELECT  'Rafael'            AS nome
       ,'Martins'           AS sobrenome
       ,25                  AS idade
       ,'Desenvolvedor Web' AS 'Área de atuação';

SELECT  'THIAGO CAVALCANTE';

SELECT  'Thiago'
       ,'Cavalcante'
       ,'Belo Horizonte'
       ,'33';

SELECT  'Thiago'         AS nome
       ,'Cavalcante'     AS sobrenome
       ,'Belo Horizonte' AS cidade
       ,'33'             AS idade;

SELECT  18 * 3; ===========================================================================

SELECT  now() AS 'Data Atual'; use sakila;

SELECT  *
FROM city;

SELECT  city
       ,country_id
FROM city;

SELECT  *
FROM city;

SELECT  first_name
       ,last_name
FROM customer; ========================================================================

SELECT  *
FROM rental
SELECT  CONCAT(first_name,last_name)
FROM actor;

SELECT  CONCAT(first_name,' ',last_name)
FROM actor;

SELECT  CONCAT(first_name,' ',last_name) AS 'Nome Completo'
FROM sakila.actor;

SELECT  concat (title,' ',release_year) AS 'lancamento do filme'
FROM film;

SELECT  concat (title,' ',rating) AS 'Classificacao'
FROM film;

SELECT  concat (address,' ',district) AS 'Endereco'
FROM address; ========================================================================

CREATE DATABASE `Escola`;

CREATE TABLE IF NOT EXISTS Escola.Alunos ( `Nome` VARCHAR(7) CHARACTER

SET utf8, `Idade` INT );

INSERT INTO Escola.Alunos VALUES ('Rafael', 25), ('Amanda', 30), ('Roberto', 45), ('Carol', 19), ('Amanda', 25); use Escola;

SELECT  distinct nome
       ,idade
FROM Alunos;

SELECT  distinct nome
FROM Alunos;

SELECT  distinct idade
FROM Alunos; ==========================================================================

SELECT  count (password)
FROM staff;

SELECT  count (DISTINCT first_name,last_name)
FROM staff;

SELECT  count (email)
FROM staff; ===========================================================================

SELECT  COUNT(*)
FROM rental;

SELECT  *
FROM rental
LIMIT 10;

SELECT  *
FROM rental
LIMIT 10 OFFSET 3;

SELECT  *
FROM actor
LIMIT 10 OFFSET 5; ===========================================================================

SELECT  *
FROM address
ORDER BY district ASC, address DESC; ===========================================================================

SELECT  *
FROM film;

SELECT  title
       ,release_year
       ,rating
FROM film;

SELECT  COUNT(TITLE)
FROM film;

SELECT  distinct (last_name)
FROM actor;

SELECT  count (distinct last_name)
FROM actor;

SELECT  *
FROM actor
ORDER BY last_name asc, last_name desc;

SELECT  *
FROM language
LIMIT 5 OFFSET 1;

SELECT  *
FROM film;

SELECT  title,release_year,length,rating replace_const
FROM film
ORDER BY length DESC, replace_const ASC
LIMIT 20;