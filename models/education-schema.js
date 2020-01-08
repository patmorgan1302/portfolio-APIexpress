const mongoose= require('mongoose'); //Always required for schemas and models
const Schema = mongoose.Schema; //This is required to writdde schemas
//LOOK UP mongoose-timestamp

const education_schema = new Schema({  //This is how to build a new schema
    school_name: {
        type: String,
        required: true
        //LOOK UP format-validators
    },
    course_of_study: {
        type: String,
        required: true
    },
});

const Education = mongoose.model('Education', education_schema);
module.exports = Education;