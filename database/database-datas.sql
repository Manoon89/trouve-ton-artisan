-- On se place sur la base de données trouve-ton-artisan pour être sûrs que les instructions seront bien placées sur cette base de données
USE `trouve-ton-artisan` ;

-- Peuplement de la table ville. On saisit l'id pour plus de facilité lors de la création de la table artisan.
INSERT INTO `ville` (`id_ville`, `nom_ville`) VALUES
(1, 'Aix-les-bains'), 
(2, 'Annecy'), 
(3, 'Annonay'), 
(4, 'Bourg-en-bresse'), 
(5, 'Chambéry'), 
(6, 'Chamonix'), 
(7, 'Evian'), 
(8, 'Le Puy-en-Velay'), 
(9, 'Lyon'), 
(10, 'Montélimar'), 
(11, 'Romans-sur-Isère'), 
(12, 'Saint-Priest'), 
(13, 'Valence'), 
(14, 'Vienne') ;

-- Peuplement de la table catégorie. On saisit l'id pour plus de facilité lors de la création de la table artisan.
INSERT INTO `categorie` (`id_categorie`, `nom_categorie`) VALUES
(1, 'Alimentation'), 
(2, 'Bâtiment'), 
(3, 'Fabrication'), 
(4, 'Services') ;

-- Peuplement de la table spécialités. On saisit l'id pour plus de facilité lors de la création de la table artisan.
INSERT INTO `specialite` (`id_specialite`, `nom_specialite`, `id_categorie`) VALUES
(1, 'Bijoutier', 3), 
(2, 'Boucher', 1), 
(3, 'Boulanger', 1), 
(4, 'Chauffagiste', 2), 
(5, 'Chocolatier', 1), 
(6, 'Coiffeur', 4), 
(7, 'Couturier', 3), 
(8, 'Electricien', 2), 
(9, 'Ferronier', 3), 
(10, 'Fleuriste', 4), 
(11, 'Menuisier', 2), 
(12, 'Plombier', 2), 
(13, 'Toiletteur', 4), 
(14, 'Traiteur', 1), 
(15, 'Webdesign', 4) ;

-- Peuplement de la table artisan. On saisit l'id pour plus de facilité lors de la création de la table artisan du mois. 
INSERT INTO `artisan` (`id_artisan`, `nom_artisan`, `note_artisan`, `a_propos_artisan`, `email_artisan`, `site_web_artisan`, `id_specialite`, `id_ville`) VALUES
(1, 'Boucherie Dumont', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boucherie.dumond@gmail.com', '', 2, 9), 
(2, 'Au pain chaud', 4.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'aupainchaud@hotmail.com', '', 3, 10), 
(3, 'Chocolaterie Labbé', 4.9, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 5, 9), 
(4, 'Traiteur Truchon', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 14, 9), 
(5, 'Orville Salmons', 5.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'o-salmons@live.com', '', 4, 7), 
(6, 'Mont Blanc Eléctricité', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 8, 6), 
(7, 'Boutot & fils', 4.7, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 11, 4), 
(8, 'Vallis Bellemare', 4.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 12, 14), 
(9, 'Claude Quinn', 4.2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'claude.quinn@gmail.com', '', 1, 1), 
(10, 'Amitee Lécuyer', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 7, 2), 
(11, 'Ernest Carignan', 5.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'e-carigan@hotmail.com', '', 9, 8), 
(12, 'Royden Charbonneau', 3.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'r.charbonneau@gmail.com', '', 6, 12), 
(13, 'Leala Dennis', 3.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 6, 5), 
(14, 'C''est sup''hair', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'sup-hair@gmail.com', 'https://sup-hair.fr', 6, 1), 
(15, 'Le monde des fleurs', 4.6, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 10, 3), 
(16, 'Valérie Laderoute', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v-laredoute@gmail.com', '', 13, 13), 
(17, 'CM Graphisme', 4.4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 15, 13) ;

-- Peuplement de la table mois-année. Pas de données dans le devoir donc on part juste sur le mois en cours pour pouvoir remonter les artisans
INSERT INTO `mois_annee` (`id_mois_annee`, `mois_annee`) VALUES
(1, 'avril 2025') ;

-- Peuplement de la table artisan du mois.
INSERT INTO `artisan_mois` (`id_artisan`, `id_mois_annee`) VALUES
(2, 1), 
(3, 1), 
(5, 1) ;