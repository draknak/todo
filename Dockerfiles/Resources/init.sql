-- -----------------------------------------------------
-- Schema todo
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `todo` ;

-- -----------------------------------------------------
-- Schema todo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `todo` DEFAULT CHARACTER SET utf8 ;
USE `todo` ;

-- -----------------------------------------------------
-- Table `todo`.`task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `todo`.`tasks` ;

CREATE TABLE IF NOT EXISTS `todo`.`tasks` (
  `task_id` INT NOT NULL AUTO_INCREMENT,
  `task_title` TEXT NOT NULL,
  `task_description` TEXT NOT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`task_id`))
ENGINE = InnoDB;

INSERT INTO `todo`.`tasks` (`task_id`, `task_title`, `task_description`) VALUES (1, 'test', 'test test');

-- -----------------------------------------------------
-- Table `todo`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `todo`.`user` ;

CREATE TABLE IF NOT EXISTS `todo`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `email` TEXT NULL,
  `password` TEXT NOT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;
