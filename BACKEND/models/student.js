const mongooes = require('mongoose');

const Schema = mongooes.Schema;

const studentSchema = new Schema({
    stdId:{
        type:String,
        required : true,
    },

    name:{
        type:String,
        required : true,
    },

    age:{
        type:Number,
        required : true,
    },
    gender:{
        type:String,
        required : true,
    }
})


const Student = mongooes.model("Student",studentSchema);
module.exports = Student;
