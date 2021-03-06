/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE teacherModelGenerated.js PLEASE EDIT ../teacherModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_Schoolprova_db";
import Sequelize from "sequelize";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {

  // Start queries
    

  // CRUD METHODS


  /**
  * teacherModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.teacher.create(item);
    let _course = await result.set_course(item._course);
    result._course = _course;
        return result;
  },
  
  /**
  * teacherModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await Database.getConnection().models.teacher.destroy({ where: { _id: id } });
  },
  
  /**
  * teacherModel.findBy_course
  *   @description CRUD ACTION findBy_course
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_course(key) {
    return await Database.getConnection().models.teacher.findAll({ where: { "_course": key } });
  },
  
  /**
  * teacherModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.teacher.findByPk(id);
    let _course = await result.get_course({ raw: true });
    result.dataValues._course = _course.map(item => item._id);
    
    return result;
  },
  
  /**
  * teacherModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() { 
    return await Database.getConnection().models.teacher.findAll();
      },
  
  /**
  * teacherModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.teacher.update(item, {
      where: { _id: item._id }
    });
    result = await Database.getConnection().models.teacher.findByPk(item._id);
    let _course = await result.set_course(item._course);
    result._course = _course;
    
    return result;
  },
  


};

export default generatedModel;
