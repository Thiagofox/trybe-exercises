SELECT  *
FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT  first_name
FROM customer
WHERE active = 0
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;

SELECT  title
       ,description
       ,release_year
       ,replacement_cost
FROM film
WHERE rating <> 'NC-17'
AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC
LIMIT 100;

SELECT  COUNT(*) AS quantidade_de_clientes_ativos
FROM customer
WHERE active = 1
AND store_id = 1;

SELECT  *
FROM customer
WHERE active = 0
AND store_id = 1;

SELECT  *
FROM film
WHERE rating = 'NC-17'
AND rental_rate = '0.99'
ORDER BY rental_rate, title ASC
LIMIT 50;

SELECT  *
FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;

SELECT  *
FROM film
WHERE title like '%ace%';

SELECT  *
FROM film
WHERE description like '%china';

SELECT  *
FROM film
WHERE description like '%girl%'
AND title like '%lord';

SELECT  *
FROM film
WHERE title like '___gon%';

SELECT  *
FROM film
WHERE title like '___gon%'
AND description like '%Documentary%';

SELECT  *
FROM film
WHERE title like '%academy' OR title like 'mosquito%';

SELECT  *
FROM film
WHERE description like '%monkey%'
AND description like '%sumo%';

SELECT  first_name
       ,last_name
       ,email
FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

SELECT  email
FROM customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email;

SELECT  COUNT(*) AS quantidade_de_pagamentos
FROM payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';

SELECT  title
       ,release_year
       ,rental_duration
FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title asc;

SELECT  title
       ,rating
FROM film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;

SELECT  COUNT(*) Pagamentos
FROM payment
WHERE DATE(payment_date) = '2005-05-25';

SELECT  COUNT(*) Pagamentos
FROM payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

SELECT  DATE(rental_date)   AS Data
       ,YEAR(rental_date)   AS Ano
       ,MONTH(rental_date)  AS Mes
       ,DAY(rental_date)    AS Dia
       ,HOUR(rental_date)   AS Hora
       ,MINUTE(rental_date) AS Minuto
       ,SECOND(rental_date) AS Segundo
FROM rental
WHERE rental_id = 10330;

SELECT  *
FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28'
AND HOUR(payment_date) >= 22;