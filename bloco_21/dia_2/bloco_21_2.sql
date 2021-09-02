-- Como foi visto no vídeo, o INNER JOIN permite retornar todos os resultados em que a condição da cláusula ON for satisfeita. A sintaxe de um INNER JOIN é a seguinte:
SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;

-- Podemos tornar a query mais legível com um alias , além de evitar o erro de ambiquidade de coluna:

SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;

-- 1. Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .

SELECT 
    a.actor_id, 
    a.first_name, 
    f.film_id 
FROM sakila.actor AS a 
INNER JOIN sakila.film_actor AS f 
ON a.actor_id = f.actor_id;

-- 2. Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .

SELECT 
    s.first_name, 
    s.last_name, 
    a.address
FROM sakila.staff AS s 
INNER JOIN sakila.address AS a 
ON s.address_id = a.address_id;

-- 3. Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .

SELECT 
    c.customer_id, 
    c.first_name, 
    c.last_name, 
    a.address_id, 
    a.address
FROM sakila.address AS a 
INNER JOIN sakila.customer AS c 
ON a.address_id = c.address_id
ORDER BY c.first_name DESC
LIMIT 100;

-- 4. Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.

SELECT 
    c.first_name, 
    c.email, 
    a.address_id, 
    a.address, 
    a.district
FROM sakila.customer AS c 
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE c.first_name LIKE '%rene%' AND a.district = 'California';

-- 5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.

SELECT 
    c.first_name,
    COUNT(a.address) as 'quantidade de endereco'
FROM sakila.customer AS c 
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.first_name
ORDER BY c.first_name DESC;

-- 6. Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

SELECT 
    s.first_name,
    s.last_name,
    AVG(p.amount) as 'Media de Valor'
FROM sakila.payment AS p 
INNER JOIN sakila.staff AS s
ON p.staff_id = s.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

-- 7. Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .

SELECT 
    a.actor_id,
    a.first_name, 
    f.film_id, 
    f.title
FROM sakila.actor AS a 
INNER JOIN sakila.film_actor AS fa 
ON a.actor_id = fa.actor_id
INNER JOIN sakila.film AS f 
ON f.film_id = fa.film_id;

-- Três queries e uma pergunta

-- Vamos visualizar a diferença entre os três joins já vistos até o momento. Rode e analise cada uma das três queries a seguir. Busque notar a diferença entre as colunas da direita e da esquerda e a quantidade de dados retornados em cada query , como foi mostrado no vídeo. 

-- Gaste de 2 a 5 minutos aqui e depois continue.

-- LEFT JOIN

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
LEFT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- RIGHT JOIN

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
RIGHT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- INNER JOIN

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
INNER JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- Como foi visto no vídeo acima, podemos fazer pesquisas e comparações dentro da própria tabela através do SELF JOIN . Lembre-se dessa opção sempre que a informação que você precisa filtrar ou comparar para encontrar algo estiver em uma única tabela.

-- Note que um SELF JOIN não é um tipo diferente de JOIN . É apenas um caso em que uma tabela faz join consigo mesma. Você pode utilzar qualquer dos tipos de JOIN vistos ao realizar um SELF JOIN .

-- Como visto no vídeo, utilizando o schema sakila como exemplo, se quisermos buscar o título e o custo de substitução ( replacement_cost ) dos filmes que possuem a mesma duração, podemos montar a seguinte query usando SELF JOIN :

SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length;

-- Para fixar esses conceitos, tente encontrar as seguintes informações:

-- 1. Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.

SELECT 
    t1.film_id, 
    t1.replacement_cost, 
    t2.film_id, 
    t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.replacement_cost = t2.replacement_cost;

-- 2. Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.

SELECT 
    A.title, 
    A.rental_duration, 
    B.title, 
    B.rental_duration
FROM 
    sakila.film AS A, 
    sakila.film AS B
WHERE
    A.rental_duration = B.rental_duration
HAVING A.rental_duration BETWEEN 2 AND 4;

-- O UNION remove os dados duplicados, enquanto o UNION ALL os mantém. Observe que, para usar o comando corretamente, a mesma quantidade de colunas deve ser utilizada.

-- Vamos trabalhar agora com alguns desafios sobre o UNION :

-- 1. Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor , exibindo apenas o nome e o sobrenome . Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.

SELECT first_name, last_name FROM sakila.staff
UNION
SELECT first_name, last_name FROM sakila.actor;

-- 2. Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor . Exiba apenas os resultados únicos.

SELECT first_name
FROM sakila.customer
WHERE first_name LIKE '%tracy%' 
UNION 
SELECT first_name
FROM sakila.actor
WHERE first_name LIKE '%je%';

-- 3. Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer . Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.

(SELECT first_name 
FROM sakila.actor
ORDER BY actor_id DESC LIMIT 5) 
UNION 
(SELECT first_name
FROM sakila.staff LIMIT 1) 
UNION
(SELECT first_name
FROM sakila.customer
LIMIT 5 OFFSET 15) 
ORDER BY first_name;

-- 4. Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.

(SELECT first_name, last_name
FROM sakila.customer
ORDER BY first_name , last_name LIMIT 60) 
UNION 
(SELECT first_name, last_name
FROM sakila.actor
ORDER BY first_name , last_name LIMIT 60) 
ORDER BY first_name , last_name LIMIT 15 OFFSET 45;

-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
use Pixar;

SELECT 
    M.title,
    B.domestic_sales,
    B.international_sales
FROM Pixar.Movies AS M 
INNER JOIN Pixar.BoxOffice AS B 
ON M.id = B.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).

SELECT
    M.title,
    B.domestic_sales,
    B.international_sales
FROM Pixar.Movies AS M 
INNER JOIN Pixar.BoxOffice AS B 
ON M.id = B.movie_id
WHERE B.international_sales > B.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.

SELECT
    M.title,
    B.rating
FROM Pixar.Movies AS M 
INNER JOIN Pixar.BoxOffice AS B 
ON M.id = B.movie_id
ORDER BY rating DESC;


-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

SELECT 
    T.id,
    T.name,
    T.location,
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM Pixar.Theater AS T 
LEFT JOIN Pixar.Movies AS M 
ON T.id = M.theater_id
ORDER BY T.name DESC;


-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

SELECT 
    t.id,
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Theater t
        RIGHT JOIN
    Movies m ON t.id = m.theater_id
ORDER BY t.name;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.

SELECT title
FROM Movies
WHERE id IN 
    (SELECT movie_id
        FROM BoxOffice
        WHERE rating > 7.5);

SELECT m.title
FROM Movies m
INNER JOIN BoxOffice b
ON b.movie_id = m.id
WHERE b.rating > 7.5;

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.

SELECT 
    M.title,
    M.director,
    M.year,
    B.rating
FROM Movies M 
INNER JOIN BoxOffice B
ON M.id = B.movie_id
WHERE M.year > 2009;

SELECT rating
FROM BoxOffice
WHERE movie_id IN 
    (SELECT id
        FROM Movies
        WHERE year > 2009);

-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.

SELECT 
    t.name, 
    t.location
FROM Theater AS t
WHERE EXISTS
    (SELECT * 
        FROM Movies
        WHERE Movies.theater_id = t.id);

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.

SELECT 
    T.name, 
    T.location
FROM Theater AS T 
WHERE NOT EXISTS
    (SELECT * 
        FROM Movies 
        WHERE Movies.theater_id = T.id);

-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.

SELECT 
    M.title,
    M.director,
    M.year,
    M.length_minutes,
    B.rating
FROM BoxOffice AS B
INNER JOIN Movies AS M 
ON B.movie_id = M.id
WHERE B.rating > 8 AND M.theater_id IS NOT NULL;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.

SELECT 
    t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM
    Movies t1,
    Movies t2
WHERE
    t1.director = t2.director
        AND t1.title <> t2.title;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.

SELECT 
    M.title,
    B.rating
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id
WHERE B.domestic_sales + B.international_sales >= 500000000 AND M.length_minutes > 110;

SELECT 
    m.title
FROM Movies m
WHERE m.id IN 
(SELECT 
    b.movie_id
FROM BoxOffice b 
WHERE b.international_sales >= 500000000)
AND m.length_minutes > 110;