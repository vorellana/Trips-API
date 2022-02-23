const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; //QUITAR ESTO

// app.get('/', (req, res) => {
//     res.send('Hello World 3!')
// })


// ***** settings *****
// app.set('port', process.env.PORT_BACKEND); // PENDIENTE
app.set('json spaces', 2);
app.use(express.json()); // to understand json format
app.use(express.urlencoded({extended: false})); // to understand data from a form
app.use(cors());

// ***** routes *****
app.use(require('./routes/trips.routes'))

// ***** starting the server *****
app.listen(port, () => {
    console.log(`Server on port ${port}`)
    // falta hacer funcionar con esta linea que toma el puerto de la variable de entorno al parece establecida en el Dockerfile
    // console.log(`Server on port ${app.get('port')}`);
})