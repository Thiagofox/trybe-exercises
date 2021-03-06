-- Sintaxe:
CREATE TABLE nome_para_nova_tabela LIKE tabela_a_ser_clonada;

-- Exemplo:
CREATE TABLE actor_clone LIKE sakila.actor;

create table country_clone like sakila.country;

-- Defina em qual banco a view será criada
USE nome_do_banco_de_dados;
-- Comando para criar a view
CREATE VIEW nome_da_view AS query;


-- Um exemplo de uso
-- Suponha que a gerência quer ter uma maneira simples para sempre saber quem são os top 10 clientes que mais compram com a empresa. Pode-se criar uma view para resolver isso!

CREATE VIEW top_10_customers AS
    SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_amount_spent
    FROM sakila.payment p
    INNER JOIN sakila.customer c ON p.customer_id = c.customer_id
    GROUP BY customer_id
    ORDER BY total_amount_spent DESC
    LIMIT 10;

SELECT * FROM top_10_customers;

Para excluir uma VIEW , use o seguinte comando:

DROP VIEW nome_da_view;

-- Algo extremamente comum durante o ciclo de desenvolvimento de software é a necessidade constante de fazer melhorias na estrutura do banco de dados. As tabelas são uma dessas estruturas que podem sofrer alterações.
-- Ao executar o bloco de código abaixo, a tabela noticia será criada. Essa tabela será utilizada como exemplo para testar modificações em sua estrutura.

USE sakila;
CREATE TABLE noticia(
    noticia_id INT PRIMARY KEY,
    titulo VARCHAR(100),
    historia VARCHAR(300)
) engine = InnoDB;

-- Abaixo, algumas das alterações que podem ser feitas em uma tabela.

-- Adicionar uma nova coluna
ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;

-- Modificar o tipo e propriedades de uma coluna
ALTER TABLE noticia MODIFY noticia_id BIGINT;

-- Adicionar incremento automático a uma coluna
-- (especifique o tipo da coluna + auto_increment)
ALTER TABLE noticia MODIFY noticia_id BIGINT auto_increment;

-- Alterar o tipo e nome de uma coluna
ALTER TABLE noticia CHANGE historia conteudo_postagem VARCHAR(1000) NOT NULL;

-- Dropar/Excluir uma coluna
ALTER TABLE noticia DROP COLUMN data_postagem;

-- Adicionar uma nova coluna após outra
ALTER TABLE noticia ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo;

-- Com os comandos acima, foram cobertas as operações mais comuns que você deve saber para alterar uma tabela. Para confirmar se a estrutura da sua tabela foi alterada corretamente, você pode usar o comando SHOW COLUMNS FROM nome_da_tabela; . Veja o exemplo abaixo:

SHOW COLUMNS FROM sakila.noticia;

--INDEX

-- Criando um índice em uma coluna
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna);

-- Criando um índice composto, em duas ou mais colunas
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna1, coluna2);

-- Excluindo índices
DROP INDEX nome_do_indice ON tabela;

Entenda o impacto do INDEX
-- Para entender o impacto de um INDEX , hora de comparar o antes e o depois da adição de um INDEX à coluna first_name da tabela sakila.actor e verificar seu impacto no custo de uma query.

-- Execute o comando abaixo para criar um índice na coluna first_name dentro da tabela actor .

CREATE INDEX index_first_name ON sakila.actor(first_name);

-- Execute a query abaixo e verique seu custo através do execution plan.

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

-- Agora, exclua o índice para fazer a comparação:

DROP INDEX index_first_name ON sakila.actor;

-- Veja o custo da mesma query, quando executada sem um índice na coluna first_name :

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

-- Como se vê, neste caso o índice possui uma melhor performance.


-- Entenda o impacto do FULLTEXT INDEX

-- Hora de fazer outro exemplo para analisar o impacto que um FULLTEXT INDEX em conjunto com uma full-text search, possui na performance de uma query. 

-- Para esse exemplo será alterada a coluna address da tabela sakila.address . Veja a criação do índice logo abaixo:

CREATE FULLTEXT INDEX index_address ON sakila.address(address);

-- Para verificar a diferença na performance, deve-se utilizar os comandos MATCH e AGAINST , conforme foi visto anteriormente no texto sobre full-text search. 

-- Execute a query abaixo e verifique seu custo através do execution plan:

SELECT *
FROM sakila.address
WHERE MATCH(address) AGAINST('drive');


-- gora, exclua o índice para fazer a comparação:

DROP INDEX index_address ON sakila.address;

-- Veja o custo da query, quando executada sem um índice na coluna address :
SELECT *
FROM sakila.address
WHERE address LIKE '%drive%';

-- Entenda o impacto do UNIQUE INDEX

-- A Sintaxe para criar um UNIQUE INDEX é a seguinte:

CREATE UNIQUE INDEX nome_do_indice ON nome_tabela(nome_coluna);

-- Para dropar (excluir), pode-se usar:

DROP INDEX nome_do_indice ON nome_tabela;

-- O UNIQUE INDEX é utilizado em uma coluna para, principalmente, prevenir a duplicação de dados em uma tabela e, secundariamente, melhorar a performance de busca.

-- Colunas que fazem uso dessa restrição podem receber valores nulos . É importante lembrar também que a restrição PRIMARY KEY , quando aplicada a uma coluna, insere por padrão as restrições UNIQUE INDEX + NOT NULL naquela coluna.

-- Logo, pode-se entender que a PRIMARY KEY também é um UNIQUE INDEX que não permite valores nulos .

-- Isso pode ser confirmado usando o comando SHOW INDEX , que lista os detalhes sobre um índice em uma tabela. Veja abaixo um exemplo de uso do comando.

SHOW INDEX FROM sakila.actor;

-- Como se pode ver acima, embora nenhum índice tenha sido criado ainda, todas as colunas do banco de dados que usam a restrição PRIMARY KEY possuem internamente um UNIQUE INDEX . 

-- Isso pode ser confirmado na coluna actor_id pelo Non_Unique = 0 , que quer dizer que a coluna possui um índice único.

-- Um exemplo de uso do UNIQUE INDEX

-- Hora de verificar a performance de uma query antes de inserir um UNIQUE INDEX na coluna name da tabela language .

CREATE UNIQUE INDEX unique_name_index ON sakila.language(name);

SELECT *
FROM sakila.language
WHERE name = 'Mandarin';


DROP INDEX unique_name_index ON sakila.language;

SELECT * FROM sakila.language
WHERE name = 'Mandarin';

-- Aqui, mais uma vez, teve-se uma melhoria na performance.

-- Quando não utilizar índices

-- Mesmo notando que os resultados foram favoráveis para o uso de índices nesses exemplos, é importante ressaltar que eles nem sempre devem ser utilizados. Abaixo, segue uma lista das situações em que o uso de índices deve ser evitado:

-- -> Em tabelas pequenas, pois a diferença de performance será mínima, se houver;

-- -> Em colunas que retornarão uma grande quantidade dados quando filtradas. Por exemplo, você não adicionaria os artigos "o" e "a" ao índice de um livro;
-- -> Em tabelas que frequentemente têm atualizações em grande escala, uma vez que a performance dessas atualizações será afetada;

-- -> Em colunas que são frequentemente manipuladas, haja vista que a manutenção do índice dessa coluna pode demandar muito tempo quando feita em excesso;

-- -> Em colunas que possuem muitos valores nulos.