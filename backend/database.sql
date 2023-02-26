-- Active: 1667902495509@@127.0.0.1@3306@megacv


SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema megacv
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `megacv` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `megacv` ;

-- -----------------------------------------------------
-- Table `megacv`.`projets`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `megacv`.`projets` ;

CREATE TABLE IF NOT EXISTS `megacv`.`projets` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pic` VARCHAR(255) NULL DEFAULT NULL,
  `title` VARCHAR(80) NOT NULL,
  `description` VARCHAR(680) NOT NULL,
  `link` VARCHAR(80) NOT NULL,
  `techno` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `megacv`.`projets` (pic, title, description, link, techno)
VALUES
  (
    'assets/images/logo_spherus_long_dark.png',
    'Spherus',
    'Projet réalisé dans le cadre de la formation "Développeur web" à la Wild Code School de Nantes. Proposé par l\'entreprise partenaire "Origins Digital", le but est de développer une plateforme d\'hébergement vidéo.  ',
    'http://spherus.eu/',
    'ReactJs, Sass, Express, NodeJs'
  ),