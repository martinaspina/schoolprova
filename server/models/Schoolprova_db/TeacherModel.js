import TeacherModelGenerated from "./generated/TeacherModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await TeacherModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...TeacherModelGenerated,
  ...customModel
};
