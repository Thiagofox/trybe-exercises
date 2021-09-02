-- Agora, a prática:

-- Desafios sobre VIEW

-- Exercício 1: 
-- Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila . Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.

CREATE VIEW film_with_categories AS 
    SELECT 
        F.title,
        FC.category_id,
        C.name
    FROM sakila.film_category AS FC 
    INNER JOIN sakila.film AS F ON FC.film_id = F.film_id
    INNER JOIN sakila.category AS C ON FC.category_id = C.category_id  
    Order BY F.title;


-- Exercício 2: 
-- Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila . Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.

CREATE VIEW film_info AS
    SELECT 
        FA.actor_id,
        CONCAT(A.first_name, ' ', A.last_name) AS Actor,
        F.title
    FROM sakila.film_actor AS FA
    INNER JOIN sakila.film AS F ON FA.film_id = F.film_id
    INNER JOIN sakila.actor AS A ON FA.actor_id = A.actor_id
    ORDER BY Actor ASC;

-- Exercício 3: 

-- Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila . Sua view deve exibir o address_id , o address , o district , o city_id e a city . Os resultados devem ser ordenados pelo nomes das cidades. Use a imagem abaixo como referência.

CREATE VIEW address_info AS
    SELECT 
        A.address_id,
        A.address,
        A.district,
        C.city_id,
        C.city
    FROM sakila.address AS A 
    INNER JOIN sakila.city AS C ON A.city_id = C.city_id
    ORDER BY city ASC;


-- Exercício 4: 

-- Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila . Sua view deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir.

CREATE VIEW movies_languages AS
    SELECT 
        F.title,
        L.language_id,
        L.name
    FROM sakila.film AS F
    INNER JOIN sakila.language AS L ON F.language_id = L.language_id;

-- Desafios sobre INDEX

-- Exercício 1: 
-- Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ) adicionando-o na coluna name . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan , como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.


CREATE FULLTEXT INDEX category_name_index ON category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

DROP INDEX category_name_index ON category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';

-- Exercício 2: 

-- Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna postal_code . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

CREATE INDEX postal_code_index ON address(postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';

DROP INDEX postal_code_index ON address;

SELECT *
FROM sakila.address
WHERE postal_code = '36693';


-- Desafios sobre ALTER TABLE

-- Desafios

-- Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address para address , mantendo o mesmo tipo e tamanho de dados.

ALTER TABLE locations CHANGE COLUMN street_address address VARCHAR(40);

-- Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.

ALTER TABLE locations CHANGE COLUMN region_name region VARCHAR(25);

-- Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho de dados.

ALTER TABLE locations CHANGE COLUMN country_name country VARCHAR(40);