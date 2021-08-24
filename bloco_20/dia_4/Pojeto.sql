-- ## Desafios Iniciais

-- 1 - Exiba apenas os nomes dos produtos da tabela `products`.

select product_name from northwind.products;

-- 2 - Exiba os dados de todas as colunas da tabela `products`.

select * from northwind.products;

-- 3 - Escreva uma query que exiba os valores da coluna que contém a primary key da tabela `products`.

select id from northwind.products;

-- 4 - Conte quantos registros existem na coluna `product_name` da tabela `products`.

select count (product_name) from northwind.products;

-- 5 - Monte uma query que exiba os dados da tabela `products` a partir do quarto registro até o décimo terceiro. Tanto o quarto quanto o décimo terceiro registros, precisam aparecer na consulta. Obs.: não use `where` ou `order by`.

select * from northwind.products limit 10 OFFSET 3;

-- 6 - Exiba os dados das colunas `product_name` e `id` da tabela `products` de maneira que os resultados estejam em ordem alfabética dos nomes.

select product_name, id from northwind.products ORDER BY product_name asc;

-- 7 - Mostre apenas os ids dos 5 últimos registros da tabela `products` (a ordernação deve ser baseada na coluna `id`).

select id from northwind.products ORDER BY id desc limit 5;

-- 8 - Faça uma consulta que retorne três colunas. Na primeira coluna, exiba a soma de `5 + 6` (essa soma deve ser realizada pelo SQL). Na segunda coluna deve haver a palavra \"de\". E por fim, na terceira coluna, exiba a soma de `2 + 8` (essa soma deve ser realizada pelo SQL). A primeira coluna deve se chamar \"A\", a segunda coluna deve se chamar \"Trybe\" e a terceira coluna deve se chamar \"eh\". Não use colunas pre-existentes, apenas o que for criado na hora.

select 5 + 6 as 'A', 'de' as 'Trybe', 2 + 8 as 'eh';
-- ---

-- ## Desafios sobre filtragem de dados

-- 9 - Mostre todos os valores da coluna `notes` da tabela `purchase_orders` que não são nulos.

select notes from northwind.purchase_orders where notes is not null;

-- 10 - Mostre todos os dados da tabela `purchase_orders` em ordem decrescente, ordenados por `created_by` em que o `created_by` é maior ou igual a 3. Como critério de desempate para a ordenação, ordene também os resultados pelo `id` de forma crescente.

select * from northwind.purchase_orders where created_by >= 3 order by created_by desc, id;

-- 11 - Exiba os dados da coluna `notes` da tabela `purchase_orders` em que seu valor de \"Purchase generated based on Order\" está entre 30 e 39, incluindo tanto o valor de 30 quanto de 39.

select notes from northwind.purchase_orders where notes like '%30';


-- 12 - Mostre os resultados da coluna `submitted_date` da tabela  `purchase_orders` em que a `submitted_date` é do dia 26 de abril de 2006.

select submitted_date from northwind.purchase_orders where DATE(    submitted_date) = '2006-04-26';

-- 13 - Mostre o resultado da coluna `supplier_id` da tabela `purchase_orders` em que o `supplier_id` seja 1 ou 3.

select supplier_id from northwind.purchase_orders where supplier_id = 1 or supplier_id = 3;

-- 14 - Mostre os resultados da coluna `supplier_id` da tabela `purchase_orders` em que o `supplier_id` esteja entre os valores 1 e 3, incluindo tanto o 1 quanto o 3.

select supplier_id from northwind.purchase_orders where supplier_id BETWEEN 1 and 3; 

-- 15 - Mostre somente as horas (sem os minutos e os segundos) da coluna `submitted_date` de todos registros da tabela `purchase_orders`. Chame essa coluna de `submitted_hour`.

select HOUR(submitted_date) AS 'submitted_hour'from northwind.purchase_orders;

-- 16 - Exiba os resultados da coluna `submitted_date` da tabela `purchase_orders` que estão entre `2006-01-26 00:00:00` e `2006-03-31 23:59:59`.

select submitted_date from northwind.purchase_orders where submitted_date BETWEEN '2006-01-26 00:00:00' and '2006-03-31 23:59:59';

-- 17 - Mostre os registros das colunas `id` e `supplier_id` da tabela `purchase_orders` em que os `supplier_id` sejam tanto 1, ou 3, ou 5, ou 7.

select id, supplier_id from northwind.purchase_orders where supplier_id = 1 or supplier_id = 3 or supplier_id = 5 or supplier_id = 7;

-- 18 - Mostre todos os registros da tabela `purchase_orders` que tem o valor na coluna `supplier_id` igual a 3 e o valor na coluna `status_id` igual a 2.

select * from northwind.purchase_orders where supplier_id = 3 and status_id = 2;

-- 19 - Mostre a quantidade de pedidos que foram feitos na tabela `orders` pelo `employee_id` igual a 5 ou 6, e que foram enviados através do método(coluna) `shipper_id` igual a 2. Chame a coluna de `orders_count`.

select count(*) AS 'orders_count' from northwind.orders where (employee_id = 5 or employee_id = 6) and shipper_id = 2;

-- ---

-- ## Desafios de manipulação de tabelas

-- 20 - Adicione à tabela `order_details` uma linha com os seguintes dados: `order_id`: 69, `product_id`: 80, `quantity`: 15.0000, `unit_price`: 15.0000, `discount`: 0, `status_id`: 2, `date_allocated`: NULL, `purchase_order_id`: NULL e `inventory_id`: 129. Obs.: o `id` deve ser incrementado automaticamente.

insert into northwind.order_details(order_id, product_id, quantity, unit_price, discount, status_id, date_allocated, purchase_order_id, inventory_id)
values (69, 80, 15.000, 15.0000, 0, 2, null, null, 129);

-- 21 - Adicione, com um único `INSERT`, duas linhas à tabela `order_details` com os mesmos dados. Esses dados são novamente `order_id`: 69, `product_id`: 80, `quantity`: 15.0000, `unit_price`: 15.0000, `discount`: 0, `status_id`: 2, `date_allocated`: NULL, `purchase_order_id`: NULL e `inventory_id`: 129. O `ìd` deve ser incrementado automaticamente.

insert into northwind.order_details(order_id, product_id, quantity, unit_price, discount, status_id, date_allocated, purchase_order_id, inventory_id)
values 
(69, 80, 15.000, 15.0000, 0, 2, null, null, 129),
(69, 80, 15.000, 15.0000, 0, 2, null, null, 129);

-- 22 - Atualize os dados na coluna `discount` da tabela `order_details` para 15. (Não é necessário utilizar o SAFE UPDATE em sua query).

SET SQL_SAFE_UPDATES = 0;
UPDATE northwind.order_details 
SET discount = 15;

-- 23 - Atualize os dados da coluna `discount` da tabela `order_details` para 30, onde o valor na coluna `unit_price` seja menor que 10.0000. (Não é necessário utilizar o SAFE UPDATE em sua query).

UPDATE northwind.order_details
SET discount =  30 
WHERE unit_price < 10.0000;

-- 24 - Atualize os dados da coluna `discount` da tabela `order_details` para 45, onde o valor na coluna `unit_price` seja maior que 10.0000 e o id seja um número entre 30 a 40. (Não é necessário utilizar o SAFE UPDATE em sua query).

UPDATE northwind.order_details
SET discount =  45
WHERE (unit_price > 10.0000) and (id BETWEEN 30 and 40); 

-- 25 - Delete todos os dados na coluna `unit_price` da tabela `order_details` em que o valor seja menor que 10.0000.

DELETE FROM northwind.order_details WHERE unit_price < 10.0000;

-- 26 - Delete todos os dados na coluna `unit_price` da tabela `order_details` em que o valor seja maior que 10.0000.

DELETE FROM northwind.order_details WHERE unit_price > 10.0000;

-- 27 - Delete todos os dados da tabela `order_details`.

TRUNCATE northwind.order_details
