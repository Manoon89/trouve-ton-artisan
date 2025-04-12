-- Quelques petits tests pour vérifier que tout s'est bien passé lors de la création de la base de données

-- Test 1 : vérifier le nombre d'artisans
SELECT COUNT(`id_artisan`) AS `artisans_number`
FROM `artisan` ;

-- Résultat attendu : 17
-- Résultat obtenu : 17
-- Commentaire : ok

-- Test 2 : vérifier pour un artisan ('Mont blanc électricité') que toutes les données remontent bien, y compris des autres tables
SELECT 
    `artisan`.`nom_artisan`, 
    `specialite`.`nom_specialite`, 
    `artisan`.`note_artisan`, 
    `ville`.`nom_ville`, 
    `artisan`.`email_artisan`, 
    `artisan`.`site_web_artisan`, 
    `categorie`.`nom_categorie`
FROM `artisan`
INNER JOIN `ville` ON `artisan`.`id_ville` = `ville`.`id_ville`
INNER JOIN `specialite` ON `artisan`.`id_specialite` = `specialite`.`id_specialite`
INNER JOIN `categorie` ON `specialite`.`id_categorie` = `categorie`.`id_categorie`
WHERE `artisan`.`nom_artisan` = 'Mont Blanc Eléctricité' ;

-- Résultat attendu : Mont Blanc Eléctricité, Electricien, 4.5, Chamonix, contact@mont-blanc-electricite.com, 
-- https://mont-blanc-electricite.com, Bâtiment
-- Résultat obtenu: tous les champs sont corrects sauf la note qui retourne 0.9 au lieu de 4.5
-- Correctif apporté : `note_artisan` DECIMAL (1 ,1) => `note_artisan` DECIMAL (2,1). 
-- Vérification une fois correction apportée : ok

-- Test 3 : vérifier les artisans du mois
SELECT `artisan`.`nom_artisan`, `mois_annee`.`mois_annee` FROM `artisan_mois`
INNER JOIN `artisan` ON `artisan_mois`.`id_artisan` = `artisan`.`id_artisan`
INNER JOIN `mois_annee` ON `artisan_mois`.`id_mois_annee` = `mois_annee`.`id_mois_annee`
WHERE MONTH(`mois_annee`) = MONTH(CURDATE())
    AND YEAR(`mois_annee`.`mois_annee`) = YEAR(CURDATE()) ;

-- Résultat attendu : Au pain chaud, Chocolaterie Labbé, Orville Salmons
-- Résultat obtenu : Au pain chaud, Chocolaterie Labbé, Orville Salmons
-- Commentaire : ok