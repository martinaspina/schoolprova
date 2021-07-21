// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_Schoolprova_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      mail: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "user", timestamps: false }
    );



    /**
      * ------------------------------------
      * course
      * ------------------------------------
      */
    class course extends Sequelize.Model{}
    course.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      _course: {
        type: Sequelize.INTEGER,
        references: {
          model: student,
          key: '_id',
        }
      },
      _course: {
        type: Sequelize.INTEGER,
        references: {
          model: teacher,
          key: '_id',
        }
      },
      _course: {
        type: Sequelize.INTEGER,
        references: {
          model: exame,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "course", timestamps: false }
    );



    /**
      * ------------------------------------
      * exame
      * ------------------------------------
      */
    class exame extends Sequelize.Model{}
    exame.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      place: {
        type: Sequelize.STRING
      },
      
      score: {
        type: Sequelize.FLOAT
      },
      
      valide: {
        type: Sequelize.BOOLEAN
      },
      
      //RELATIONS
        
      _course:  {
        type: Sequelize.INTEGER,
        references: {
          model: "course",
          key: '_id',
        },
      },
        
      _student:  {
        type: Sequelize.INTEGER,
        references: {
          model: "student",
          key: '_id',
        },
      },
        
      _teacher:  {
        type: Sequelize.INTEGER,
        references: {
          model: "teacher",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "exame", timestamps: false }
    );



    /**
      * ------------------------------------
      * student
      * ------------------------------------
      */
    class student extends Sequelize.Model{}
    student.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      dob: {
        type: Sequelize.DATE
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      _student: {
        type: Sequelize.INTEGER,
        references: {
          model: exame,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "student", timestamps: false }
    );



    /**
      * ------------------------------------
      * teacher
      * ------------------------------------
      */
    class teacher extends Sequelize.Model{}
    teacher.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      surname: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      _teacher: {
        type: Sequelize.INTEGER,
        references: {
          model: exame,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "teacher", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
    
    
    student.belongsToMany(course, {
        through: "student__course",
        as: "_course",
        foreignKey: "id_student",
        otherKey: "id_course",
        timestamps: false
    });

    
    teacher.belongsToMany(course, {
        through: "teacher__course",
        as: "_course",
        foreignKey: "id_teacher",
        otherKey: "id_course",
        timestamps: false
    });

  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
