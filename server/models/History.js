const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
    phrase: String,
    pageId: String,
    title: String,
    para: String
});

const History = mongoose.model('History', HistorySchema);

module.exports = History;