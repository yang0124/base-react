var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var notifySchema = new Schema({
    title:String,
    intro:String,
    isRead:Boolean
})
var notifyModel = mongoose.model('notifyModel',notifySchema)

module.exports = notifyModel;