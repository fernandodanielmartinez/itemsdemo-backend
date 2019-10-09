const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    itemdesc: String,
    itemimg: String
});

module.exports = mongoose.model('Item', ItemSchema);