const mongoose= require('mongoose'); //Always required for schemas and models
const Schema = mongoose.Schema; //This is required to write schemas
//LOOK UP mongoose-timestamp

const workexp_schema = new Schema({  //This is how to build a new schema
    job_title: {
        type: String,
        required: true
        //LOOK UP format-validators
    },
    company_name: {
        type: String,
        required: true
    },
    start_date: {
        type: String,
        required: true
    },
    end_date: {
        type: String,
        required: true
    },
    job_description: {
        type: String,
    }
});

const Workexp = mongoose.model('Workexp', workexp_schema);
module.exports = Workexp;
