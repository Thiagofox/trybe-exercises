-- Solução

-- Identificação das Entidades :

-- Entidade 1: Álbum ;
-- Entidade 2: Artista ;
-- Entidade 3: Estilo Musical ;
-- Entidade 4: Canção ;

-- Identificação dos Atributos :

-- Álbum: album_id , titulo , preco , estilo_id e artista_id ;
-- Artista: artista_id e nome ;
-- Estilo Musical: estilo_id e nome ;
-- Canção: cancao_id , nome e album_id ;
-- Identificação dos Relacionamentos :
-- Um artista pode possuir um ou mais álbuns;
-- Um estilo musical pode estar contido em um ou mais álbuns;
-- Um álbum pode possuir uma ou mais canções;

 DROP SCHEMA IF EXISTS Albuns;
    CREATE SCHEMA Albuns;
    USE Albuns;

    CREATE TABLE artista(
        artista_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL
    );

    CREATE TABLE estilo_musical(
        estilo_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL
    );

    CREATE TABLE album(
        album_id INT PRIMARY KEY AUTO_INCREMENT,
        titulo VARCHAR(50) NOT NULL,
        preço INT NOT NULL,
        estilo_id INT NOT NULL,
        artista_id INT NOT NULL,
        FOREIGN KEY (estilo_id) REFERENCES estilo_musical (estilo_id),
        FOREIGN KEY (artista_id) REFERENCES artista (artista_id)
    );

    CREATE TABLE cancao(
        cancao_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL,
        album_id INT NOT NULL,
        FOREIGN KEY (album_id) REFERENCES album (album_id)
    );



-- 1. Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:
-- Nome;
-- Espécie;
-- Sexo;
-- Idade;
-- Localização;

-- Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.
-- Siga os passos aprendidos no dia de hoje para modelar essa base de dados.

-- Solução
-- Identificação das Entidades :

-- Entidade 1: Animal ;
-- Entidade 2: Cuidador ;
-- Entidade 3: Gerente ;
-- Entidade 4: Cuidador e Animal ;

-- Identificação dos Atributos :

-- Animal: animal_id , nome , especie , sexo , idade e localização ;
-- Cuidador: cuidador_id , nome , gerente_id ;
-- Gerente: gerente_id e nome ;
-- Cuidador e Animal: cuidador_id e animal_id ;

-- Identificar os Relacionamentos :

-- Um animal pode ter um ou mais cuidadores;
-- Um cuidador pode cuidar de um ou mais animais;
-- Um gerente pode gerenciar uma ou mais cuidadores;
-- Um cuidador possui um gerente;

DROP SCHEMA IF EXISTS zoologico;
    CREATE SCHEMA zoologico;
    USE zoologico;

    CREATE TABLE animal(
        animal_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL,
        especie VARCHAR(50) NOT NULL,
        sexo VARCHAR(50) NOT NULL,
        idade INT NOT NULL,
        localizacao VARCHAR(50) NOT NULL
    );

     CREATE TABLE gerente(
        gerente_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL
    );

    CREATE TABLE cuidador(
        cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL,
        gerente_id INT NOT NULL,
        FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
    );

    CREATE TABLE animal_cuidador(
        animal_id INT,
        cuidador_id INT,
        CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
        FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
        FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
    );