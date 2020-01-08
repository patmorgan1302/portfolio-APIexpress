const mongoose= require('mongoose'); //Always required for schemas and models
const Schema = mongoose.Schema; //This is required to write schemas
//LOOK UP mongoose-timestamp




const user_schema = new Schema({  //This is how to build a new schema
    email: {
        type: String,
        required: true
        //LOOK UP format-validators
    },
    full_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    linkdin: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    }
    
});


const User = mongoose.model('User', user_schema); //Converting our user_schema into a MODEL we can work with
module.exports = User;