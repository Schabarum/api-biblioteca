CREATE TABLE livro (
    id INT PRIMARY KEY NOT NULL,
    nome VARCHAR(30) NOT NULL,
    aquisicao DATE NOT NULL,
    editora VARCHAR(30) NOT NULL,
    assunto VARCHAR(50) NOT NULL
);

CREATE TABLE estudante (
    id INT PRIMARY KEY NOT NULL,
    nome VARCHAR(30) NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    telefone VARCHAR(12) NOT NULL,
    bloqueado VARCHAR(1) NOT NULL
);

CREATE TABLE locacao (
    id INT PRIMARY KEY NOT NULL,
    id_livro INT NOT NULL,
    id_estudante INT NOT NULL,
    data_reserva DATE NOT NULL,
    semanas_locacao VARCHAR(2) NOT NULL
);

CREATE TABLE funcionario (
    id INT PRIMARY KEY NOT NULL,
    nome VARCHAR(40) NOT NULL,
    inicio DATE NOT NULL,
    funcao VARCHAR(40) NOT NULL,
    ativo VARCHAR(1) NOT NULL
);

CREATE TABLE genero (
    id INT PRIMARY KEY NOT NULL,
    nome VARCHAR(40) NOT NULL,
    tipo VARCHAR(20) NOT NULL,
    descricao VARCHAR(30) NOT NULL,
    ativo VARCHAR(1) NOT NULL
);