-- On vérifie qu'une base de données du même nom n'existe pas déjà ; si c'est le cas on la supprime
DROP DATABASE IF EXISTS `trouve-ton-artisan` ;

-- On crée une nouvelle base de données
CREATE DATABASE IF NOT EXISTS `trouve-ton-artisan`
DEFAULT CHARACTER SET utf8mb4
DEFAULT COLLATE utf8mb4_bin ;

-- On se place sur la base de données créée 
USE `trouve-ton-artisan` ;

-- TODO : voir pour créer un utilisateur de manière sécurisée pour modifier la base de données. Puis affecter les droits d'admin. 

-- On crée la table ville
CREATE TABLE IF NOT EXISTS `ville` (
    `id_ville` INT NOT NULL UNIQUE AUTO_INCREMENT, 
    `nom_ville` VARCHAR(45) NOT NULL, 
    PRIMARY KEY (`id_ville`)
) ENGINE=InnoDB ;