DROP DATABASE IF EXISTS process.env.DB;
CREATE DATABASE process.env.DB;
USE process.env.DB;

CREATE TABLE hamburgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);