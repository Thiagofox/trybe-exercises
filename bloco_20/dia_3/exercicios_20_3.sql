SELECT  *
FROM Pecas
WHERE name like 'GR%';

SELECT  *
FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor ASC;

SELECT  peca
       ,Preco
       ,Fornecedor
FROM Fornecimentos
WHERE Fornecedor like '%N%';

SELECT  *
FROM Fornecedores
WHERE name like '%LTDA'
ORDER BY name DESC;

SELECT  COUNT(code)
FROM Fornecedores
WHERE code like '%F%';

SELECT  *
FROM Fornecimentos
WHERE preco BETWEEN 15 AND 40
ORDER BY preco ASC;

SELECT  COUNT(*)
FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30'; USE Scientists;

SELECT  *
FROM Scientists
WHERE Name LIKE '%e%';

SELECT  Name
FROM Projects
WHERE Code LIKE 'A%'
ORDER BY Code ASC;

SELECT  Code
       ,Name
FROM Projects
WHERE Code LIKE '%3%'
ORDER BY Name ASC;

SELECT  Scientist
FROM AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');

SELECT  *
FROM Projects
WHERE Hours > 500;

SELECT  *
FROM Projects
WHERE Hours BETWEEN 250 AND 800;

SELECT  Name
       ,Code
FROM Projects
WHERE name not like '%A';

SELECT  Name
FROM Projects
WHERE Code like '%H%';