const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const config = require('../src/config');
const port = config.port;
const strConnection = `mongodb://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.HOST_DB}:${process.env.PORT_DB}/${process.env.NAME_DB}?authSource=admin`;

console.log('strConnection => ', strConnection);
// ***** connection to DB (MongoDB)*****
mongoose.connect(strConnection, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log('**** Failed DB Connection ****');
        console.log(err);
    } else {
        console.log('**** Successful DB connection ****');
    }
})

// ***** settings *****
app.set('port', port);
app.set('json spaces', 2);
app.use(express.json()); // to recognize json format
app.use(express.urlencoded({extended: false})); // to understand data from a form
app.use(cors());

// ***** routes *****
app.use(require('./routes/trips.routes'))

// ***** starting the server *****
app.listen(app.get('port'), () => {
    console.log(`Server on port...`)
})

module.exports = app;