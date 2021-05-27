const express = require('express');
const router = express.Router();

const { searchQuery, deleteHistory, getHistory } = require('../controlers/search');

router.get('/phrase/:str', searchQuery);
router.delete('/history/:id', deleteHistory);
router.get('/history', getHistory);
module.exports = router;