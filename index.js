import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();  // Creo una instancia de la aplicación

import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

// Conectar a la base de datos del
db.authenticate()
    .then ( ()=> console.log('Base de Datos Conectada'))
    .catch (error => console.log(error));

// Definir puerto 
const port = process.env.PORT || 5000; // variables de entorno


// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use((req, res, next)=>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
   return  next();
})

// Agregar body parser 
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica 
app.use(express.static('public'));

// Agregar Router
app.use('/', router);

// *** Puerto y Host para la app ** ///
//const host = process.env.HOST || '0.0.0.0';
//const port = process.env.PORT || 5000  ;

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`)
})