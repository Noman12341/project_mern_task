const axios = require('axios');
const History = require('../models/History');
const mongoose = require('mongoose');

const searchQuery = async (req, res) => {
    const phrase = req.params.str;

    try {

        const { data } = await axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&exintro=1&titles=${phrase}`);


        let info = {
            phrase,
            pageId: null,
            title: '',
            para: ''
        }
        Object.keys(data.query.pages).forEach(key => {
            if (key === "-1") {
                return res.status(400).json({ message: "No Details found with this para." });
            }
            info.pageId = key;
            info.title = data.query.pages[key].title;
            info.para = data.query.pages[key].extract;
        });

        const newHistory = History(info);
        newHistory.save();


        res.status(200).json(info);

    } catch (error) {

        res.status(400).json({ message: error.message });
    }
}


const deleteHistory = async (req, res) => {
    const _id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('This Id is not valid.');

    await History.findByIdAndRemove(_id);

    res.status(200).json({ message: "History deleted successfully." });

}

const getHistory = async (req, res) => {
    try {
        const historyArr = await History.find();

        res.status(200).json(historyArr);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}
module.exports = { searchQuery, deleteHistory, getHistory };