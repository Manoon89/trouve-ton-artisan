-- On vérifie qu'une base de données du même nom n'existe pas déjà ; si c'est le cas on la supprime
DROP DATABASE IF EXISTS `trouve-ton-artisan` ;

-- On crée une nouvelle base de données
CREATE DATABASE IF NOT EXISTS `trouve-ton-artisan`
DEFAULT CHARACTER SET utf8mb4
DEFAULT COLLATE utf8mb4_general_ci ;

-- On se place sur la base de données créée 
USE `trouve-ton-artisan` ;

-- TODO : voir pour créer un utilisateur de manière sécurisée pour modifier la base de données. Puis affecter les droits d'admin. 

-- On crée la table ville
CREATE TABLE IF NOT EXISTS `ville` (
    `id_ville` INT NOT NULL UNIQUE AUTO_INCREMENT, 
    `nom_ville` VARCHAR(45) NOT NULL, 
    PRIMARY KEY (`id_ville`)
) ENGINE=InnoDB ;

-- On crée la table catégorie
CREATE TABLE IF NOT EXISTS `categorie` (
    `id_categorie` INT NOT NULL UNIQUE AUTO_INCREMENT, 
    `nom_categorie` VARCHAR(20) NOT NULL UNIQUE, 
    PRIMARY KEY (`id_categorie`)
) ENGINE=InnoDB ;

-- On crée la table spécialité avec une clé étrangère de la table catégorie
CREATE TABLE IF NOT EXISTS `specialite` (
    `id_specialite` INT NOT NULL UNIQUE AUTO_INCREMENT, 
    `nom_specialite` VARCHAR(30) NOT NULL UNIQUE, 
    `id_categorie` INT NOT NULL, 
    PRIMARY KEY (`id_specialite`), 
    FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id_categorie`)
) ENGINE=InnoDB ;

-- On crée la table artisan avec toutes les foreign key qui le relient aux autres tables
CREATE TABLE IF NOT EXISTS `artisan` (
    `id_artisan` INT NOT NULL UNIQUE AUTO_INCREMENT, 
    `nom_artisan` VARCHAR(45) NOT NULL, 
    `note_artisan` DECIMAL (2,1), 
    `a_propos_artisan` VARCHAR(250), 
    `email_artisan` VARCHAR(45) NOT NULL UNIQUE, 
    `site_web_artisan` VARCHAR(150), 
    `lien_image_artisan` VARCHAR(150), 
    `id_specialite` INT NOT NULL, 
    `id_ville` INT NOT NULL, 
    PRIMARY KEY (`id_artisan`), 
    FOREIGN KEY (`id_specialite`) REFERENCES `specialite`(`id_specialite`), 
    FOREIGN KEY (`id_ville`) REFERENCES `ville`(`id_ville`), 
    KEY (`nom_artisan`)
) ENGINE=InnoDB ;

-- On crée la table mois-année, qui permettra de créer un nouveau trio d'artisans du mois chaque mois
CREATE TABLE IF NOT EXISTS `mois_annee` (
    `id_mois_annee` INT NOT NULL UNIQUE AUTO_INCREMENT, 
    `mois_annee` DATE NOT NULL, 
    PRIMARY KEY (`id_mois_annee`)
) ENGINE=InnoDB ;

-- On crée la table relationnelle est-artisan-du-mois, qui aura en clé primaire les clés étrangères des tables artisan & mois-année
CREATE TABLE IF NOT EXISTS `artisan_mois` (
    `id_artisan` INT NOT NULL,
    `id_mois_annee` INT NOT NULL,
    PRIMARY KEY (`id_artisan`, `id_mois_annee`), 
    FOREIGN KEY (`id_artisan`) REFERENCES `artisan`(`id_artisan`), 
    FOREIGN KEY (`id_mois_annee`) REFERENCES `mois_annee`(`id_mois_annee`) ON DELETE CASCADE
)