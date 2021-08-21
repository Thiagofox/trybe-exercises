-- DROP SCHEMA IF EXISTS Scientists;


-- CREATE SCHEMA Scientists;
-- USE Scientists;


-- CREATE TABLE Scientists （
-- SSN INT
-- Name CHAR（30） NOT NULL
-- PRIMARY KEY （SSN）
-- ）;


-- CREATE TABLE Projects （
-- Code CHAR（4）
-- Name CHAR（50） NOT NULL
-- Hours INT
-- PRIMARY KEY （Code）
-- ）;


-- CREATE TABLE AssignedTo （
-- Scientist INT NOT NULL
-- Project CHAR（4） NOT NULL
-- PRIMARY KEY （Scientist Project）
-- FOREIGN KEY （Scientist） REFERENCES Scientists （SSN）
-- FOREIGN KEY （Project） REFERENCES Projects （Code）
-- ）;


-- INSERT INTO Scientists（SSN Name）
-- VALUES（123234877 'Michael Rogers'）
-- （152934485 'Anand Manikutty'）
-- （222364883 'Carol Smith'）
-- （326587417 'Joe Stevens'）
-- （332154719 'Mary-Anne Foster'）
-- （332569843 'George ODonnell'）
-- （546523478 'John Doe'）
-- （631231482 'David Smith'）
-- （654873219 'Zacary Efron'）
-- （745685214 'Eric Goldsmith'） 
-- （845657245 'Elizabeth Doe'）
-- （845657246 'Kumar Swamy'）;


-- INSERT INTO Projects （Code Name Hours）
-- VALUES （'AeH1' 'Winds: Studying Bernoullis Principle' 156）
-- （'AeH2' 'Aerodynamics AND Bridge Design' 189）
-- （'AeH3' 'Aerodynamics AND Gas Mileage' 256）
-- （'AeH4' 'Aerodynamics AND Ice Hockey' 789）
-- （'AeH5' 'Aerodynamics of a Football' 98）
-- （'AeH6' 'Aerodynamics of Air Hockey' 89）
-- （'Ast1' 'A Matter of Time' 112）
-- （'Ast2' 'A Puzzling Parallax' 299）
-- （'Ast3' 'Build Your Own Telescope' 6546）
-- （'Bte1' 'Juicy: Extracting Apple Juice WITH Pectinase' 321）
-- （'Bte2' 'A Magnetic Primer Designer' 9684）
-- （'Bte3' 'Bacterial Transformation Efficiency' 321）
-- （'Che1' 'A Silver-Cleaning Battery' 545）
-- （'Che2' 'A Soluble Separation Solution' 778）;


-- INSERT INTO AssignedTo （Scientist Project）
-- VALUES （123234877 'AeH1'）
-- （152934485 'AeH3'）
-- （222364883 'Ast3'）
-- （326587417 'Ast3'）
-- （332154719 'Bte1'）
-- （546523478 'Che1'）
-- （631231482 'Ast3'）
-- （654873219 'Che1'）
-- （745685214 'AeH3'）
-- （845657245 'Ast1'）
-- （845657246 'Ast2'）
-- （332569843 'AeH4'）;

SELECT  'This is SQL Exercise,Practice AND Solution';

SELECT  1
       ,2
       ,3;

SELECT  10 + 15;

SELECT  25 * 32 / 4 + 8;

SELECT  *
FROM Scientists;

SELECT  name  AS 'Nome do Projeto'
       ,hours AS 'Tempo de Trabalho'
FROM Projects;

SELECT  name
FROM Scientists
ORDER BY name ASC;

SELECT  Name
FROM Projects
ORDER BY name DESC;

SELECT  *
FROM Projects;

SELECT  concat ('O projeto ',name,'precisou de ',hours,' horas para ser concluido')
FROM Projects;

SELECT  name
       ,hours
FROM Projects
ORDER BY hours DESC
LIMIT 3;

SELECT  distinct project
FROM AssignedTo;

SELECT  name
FROM Projects
ORDER BY hours desc
LIMIT 1;

SELECT  name
FROM Projects
ORDER BY hours ASC
LIMIT 1 OFFSET 1;

SELECT  *
FROM Projects
ORDER BY hours asc
LIMIT 5;

Select concat ('Existem ',(COUNT (SSN)), ' cientistas na tabela Scientists.') from Scientists;

