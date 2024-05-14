const mongo = require('mongoose');


const bookScheme = new mongo.Schema(
    {
        title : {
            type : String,
            required: true,
        },

        author : {
            type : String,
            required: true,
        },
        publishYear :{
            type: Number,
            require : true,
        },
    },
    {
        timestamps: true
    }
);


const Book = mongo.model('collection1', bookScheme)
module.exports = {Book};