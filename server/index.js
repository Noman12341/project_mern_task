const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


const searchRoutes = require('./routes/search');

app.use('/search', searchRoutes);

const CONNECTION_URL = 'mongodb+srv://Interview:Interview1234@cluster0.fkw0h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
    }).catch(error => {
        console.log(error.message);
    });

mongoose.set('useFindAndModify', false);