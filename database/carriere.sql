CREATE TABLE equipments(
   id INT AUTO_INCREMENT,
   name VARCHAR(40) NOT NULL,
   width DECIMAL(5,3),
   length DECIMAL(5,3),
   height DECIMAL(5,3),
   using_for VARCHAR(50),
   PRIMARY KEY(id)
);

CREATE TABLE addresses(
   id INT AUTO_INCREMENT,
   street VARCHAR(39),
   complement VARCHAR(39),
   zipcode CHAR(5),
   town VARCHAR(39) NOT NULL,
   PRIMARY KEY(id)
);

CREATE TABLE concessions(
   id INT AUTO_INCREMENT,
   name VARCHAR(40) NOT NULL,
   siret CHAR(12) NOT NULL,
   license VARCHAR(512) NOT NULL,
   phone CHAR(10),
   id_adresses INT NOT NULL,
   PRIMARY KEY(id),
   UNIQUE(id_adresses),
   FOREIGN KEY(id_adresses) REFERENCES addresses(id)
);

CREATE TABLE mines(
   id INT AUTO_INCREMENT,
   name VARCHAR(39) NOT NULL,
   longitude DECIMAL(15,12) NOT NULL,
   latitude DECIMAL(15,12) NOT NULL,
   id_concessions INT NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(id_concessions) REFERENCES concessions(id)
);

CREATE TABLE firings(
   id INT AUTO_INCREMENT,
   horodatage DATETIME NOT NULL,
   explosive VARCHAR(50),
   tnt_power SMALLINT NOT NULL,
   sound SMALLINT NOT NULL,
   longitude DECIMAL(15,12) NOT NULL,
   latitude DECIMAL(15,12) NOT NULL,
   altitude DECIMAL(5,3) NOT NULL,
   id_mines INT NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(id_mines) REFERENCES mines(id)
);

CREATE TABLE impacts(
   id INT AUTO_INCREMENT,
   ecosystem ENUM('faune','flore','eau') NOT NULL,
   horodatage DATE NOT NULL,
   quality INT NOT NULL,
   id_mines INT NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(id_mines) REFERENCES mines(id)
);

CREATE TABLE contacts(
   id INT AUTO_INCREMENT,
   lastname VARCHAR(39) NOT NULL,
   firstname VARCHAR(39),
   mail VARCHAR(150) NOT NULL,
   phone VARCHAR(10),
   id_concessions INT,
   PRIMARY KEY(id),
   FOREIGN KEY(id_concessions) REFERENCES concessions(id)
);

CREATE TABLE equipments_mines(
   id_mines INT,
   id_equipments INT,
   date_begin DATE NOT NULL,
   date_end DATE NOT NULL,
   PRIMARY KEY(id_mines, id_equipments),
   FOREIGN KEY(id_mines) REFERENCES mines(id),
   FOREIGN KEY(id_equipments) REFERENCES equipments(id)
);

