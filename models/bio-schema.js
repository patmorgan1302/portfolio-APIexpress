const mongoose= require('mongoose'); //Always required for schemas and models
const Schema = mongoose.Schema; //This is required to write schemas
//LOOK UP mongoose-timestamp


const bio_schema = new Schema({  //This is how to build a new schema
    bio: {
        type: String,
        required: true
        //LOOK UP format-validators
}})
  


const Bio = mongoose.model('Bio', bio_schema); //Converting our user_schema into a MODEL we can work with
module.exports = Bio;