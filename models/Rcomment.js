const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const RcommentSchema = new Schema({
username: String,
Rcomment: String,
IdCom: String,
id: String
});
 
 
// Create a model based on that schema
const Rcomment = mongoose.model("Rcomment", RcommentSchema);
 
 
// export the model
module.exports = Rcomment; 