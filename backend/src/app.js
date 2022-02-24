const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const port = 3000; //QUITAR ESTO

// app.get('/', (req, res) => {
//     res.send('Hello World 3!')
// })


// // // // // ***** connection to DB (MongoDB)*****
const strConnection = 'mongodb+srv://vorellana:Trips$2022@cluster0.ubpkb.mongodb.net/tripsdb'; // quitar esto

mongoose.connect(strConnection, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log("**** Failed DB Connection ****");
        console.log(err);
    } else {
        console.log("**** Successful DB connection ****");
    }
})

// ***** settings *****
// app.set('port', process.env.PORT_BACKEND); // PENDIENTE
app.set('json spaces', 2);
app.use(express.json()); // to recognize json format
app.use(express.urlencoded({extended: false})); // to understand data from a form
app.use(cors());

// ***** routes *****
app.use(require('./routes/trips.routes'))

// // // coneecttt
// // mongoose.connect(strConnection, {
// //     useNewUrlParser: true, 
// //     useUnifiedTopology: true
// // }, (err) => {
// //     if (err) {
// //         console.log("**** Failed DB Connection ****");
// //         console.log(err);
// //     } else {
// //         console.log("**** Successful DB connection ****");
// //     }
// // })


// TESSSSSSSTTT
// // app.get('/hello2', (req, res) => {
// //     res.send('Hello World 2!')
// //   })

// ***** starting the server *****
// app.listen(port, () => {
app.listen(3000, () => {
    // console.log(`Server on port ${port}`)
    console.log(`Server on port...`)
    // falta hacer funcionar con esta linea que toma el puerto de la variable de entorno al parece establecida en el Dockerfile
    // console.log(`Server on port ${app.get('port')}`);
})

module.exports = app;