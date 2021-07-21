import StudentModelGenerated from "./generated/StudentModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await StudentModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...StudentModelGenerated,
  ...customModel
};
