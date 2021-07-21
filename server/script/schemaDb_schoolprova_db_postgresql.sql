--
-- Database: schoolprova_db
--

CREATE DATABASE schoolprova_db;

-- ENTITIES

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	mail varchar(130) ,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	roles varchar(130) ,
	surname varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);

--
-- Schema entity course
--

CREATE TABLE IF NOT EXISTS "course" (
	name varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity exame
--

CREATE TABLE IF NOT EXISTS "exame" (
	place varchar(130) ,
	score numeric ,
	valide bool ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity student
--

CREATE TABLE IF NOT EXISTS "student" (
	dob date ,
	name varchar(130)  NOT NULL,
	surname varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity teacher
--

CREATE TABLE IF NOT EXISTS "teacher" (
	name varchar(130) ,
	surname varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);




-- relation 1:m _course exame - course
ALTER TABLE exame ADD COLUMN _course INTEGER  REFERENCES "course"(_id);

-- relation 1:m _student exame - student
ALTER TABLE exame ADD COLUMN _student INTEGER  REFERENCES "student"(_id);

-- relation 1:m _teacher exame - teacher
ALTER TABLE exame ADD COLUMN _teacher INTEGER  REFERENCES "teacher"(_id);

-- relation m:m _course student - course
CREATE TABLE IF NOT EXISTS "student__course" (
    _id SERIAL PRIMARY KEY,
    id_student INTEGER  NOT NULL REFERENCES "student"(_id),
    id_course INTEGER  NOT NULL REFERENCES "course"(_id)
);

-- relation m:m _course teacher - course
CREATE TABLE IF NOT EXISTS "teacher__course" (
    _id SERIAL PRIMARY KEY,
    id_teacher INTEGER  NOT NULL REFERENCES "teacher"(_id),
    id_course INTEGER  NOT NULL REFERENCES "course"(_id)
);
