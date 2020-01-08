const mongoose= require('mongoose'); //Always required for schemas and models
const Schema = mongoose.Schema; //This is required to write schemas
//LOOK UP mongoose-timestamp

const skills_schema = new Schema({  //This is how to build a new schema
    skill_name: {
        type: String,
        required: true
        //LOOK UP format-validators
    },
    skill_description: {
        type: String,
        required: true
    },
    
});

const Skill = mongoose.model('Skill', skills_schema);
module.exports = Skill;