const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const commentSchema = new Schema({
num: Number,
comment: String,
username: String,
});
 
 
// Create a model based on that schema
const comment = mongoose.model("comment", commentSchema);
 
 
// export the model
module.exports = comment; 