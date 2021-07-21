--
-- Database: `schoolprova_db`
--

CREATE DATABASE IF NOT EXISTS `schoolprova_db`;
USE `schoolprova_db`;


-- ENTITIES

--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(130) ,
	`name` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`roles` varchar(130) ,
	`surname` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `schoolprova_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `schoolprova_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);


--
-- Struttura della tabella `course`
--

CREATE TABLE IF NOT EXISTS `course` (
	`name` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `exame`
--

CREATE TABLE IF NOT EXISTS `exame` (
	`place` varchar(130) ,
	`score` numeric ,
	`valide` bool ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `student`
--

CREATE TABLE IF NOT EXISTS `student` (
	`dob` date ,
	`name` varchar(130)  NOT NULL,
	`surname` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `teacher`
--

CREATE TABLE IF NOT EXISTS `teacher` (
	`name` varchar(130) ,
	`surname` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





-- relation 1:m _course exame - course
ALTER TABLE `exame` ADD COLUMN `_course` int(11)  REFERENCES course(_id);

-- relation 1:m _student exame - student
ALTER TABLE `exame` ADD COLUMN `_student` int(11)  REFERENCES student(_id);

-- relation 1:m _teacher exame - teacher
ALTER TABLE `exame` ADD COLUMN `_teacher` int(11)  REFERENCES teacher(_id);

-- relation m:m _course student - course
CREATE TABLE IF NOT EXISTS `student__course` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_student` int(11)  NOT NULL REFERENCES student(_id),
    `id_course` int(11)  NOT NULL REFERENCES course(_id)
);

-- relation m:m _course teacher - course
CREATE TABLE IF NOT EXISTS `teacher__course` (
    `_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `id_teacher` int(11)  NOT NULL REFERENCES teacher(_id),
    `id_course` int(11)  NOT NULL REFERENCES course(_id)
);


