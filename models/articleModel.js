//This class was added due to pluralsight video

const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleModel = new Schema (
   {
    _id:{type:Schema.Types.ObjectId} ,
    title: {type:String},
    author: {type:String},
    body: {type:String},
    }
);

module.exports = mongoose.model('Article', articleModel);
