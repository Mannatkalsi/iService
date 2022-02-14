const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
    {
        //_id: mongoose.Schema.Types.ObjectId,
        Task_type: {
            type:String,
            required: true
        },
        Tittle: {
            type:String,
            required: true
        },
        Description:{
            type:String,
            required: true
        },
        Image:{
            type:String,
            require: true
        },
        Suburb:{
            type: String
        },
        Date:{
            type: String,
            required: true
        },
        Payment_type:{
            type:String,
            required: true
        },
        Budget:{
            type:String,
            required: true
        }
    }
)

module.exports = mongoose.model("Task", taskSchema)