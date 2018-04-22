var mongoose = require('mongoose');

var ItemSchema = mongoose.Schema({
    title: String
});

const Item = mongoose.model('Item', ItemSchema)

module.exports = { Item }
