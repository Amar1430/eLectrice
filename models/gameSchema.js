const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const gameSchema = new Schema({
  name: String,
  category: String,
  body: String,
  gameImage: String,
  gamefile: String,
});
 
 
// Create a model based on that schema
const game = mongoose.model("game", gameSchema);
 
 
// export the model
module.exports = game; 