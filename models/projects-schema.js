const mongoose= require('mongoose'); //Always required for schemas and models
const Schema = mongoose.Schema; //This is required to write schemas
//LOOK UP mongoose-timestamp

const projects_schema = new Schema({  //This is how to build a new schema
    project_name: {
        type: String,
        required: true
        //LOOK UP format-validators
    },
    technologies_used: {
        type: String,
        required: true
    },
    // completed: {
    //     type: Image,
    //     required: true
    // }
});

const Projects = mongoose.model('Projects', projects_schema);
module.exports = Projects;