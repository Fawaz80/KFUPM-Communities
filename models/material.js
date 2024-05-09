const { ObjectId } = require("mongodb");
const db = require("../db");

// Create a model from the schema
const materials = db.model("materials", {

    id:            { type: ObjectId },
    materialName: {type: String},
   materialCom: {type: ObjectId},
   materialURL:{type: String, unique: true}

});

module.exports = materials;