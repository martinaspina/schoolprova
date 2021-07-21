import ExameModelGenerated from "./generated/ExameModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ExameModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ExameModelGenerated,
  ...customModel
};
