//ECMA Sript 6
// commin JS

import express from 'express';
import generalRoutes from './routes/generalRouters.js'
import userRoutes from './routes/UserRouters.js'
//const express = require('express'); //DECLARANDO UN OBJETO QUE VA A PERMITIR LEER PAGINAS ETC.importar la libreria para crear un servidor web

//INSTANCIAR NUESTRA APLICACIÓN WEB

const app = express();

//CONFIGURAMOS NUESTRO SERVIDOR WEB (puerto donde estara escuchando nuestro sitio web)
const port = 3000;
app.listen(port, () => {
  console.log(`La aplicación ha iniciado en el puerto: ${port}`);  
});

//Routing - Enrutamiento
app.use('/',generalRoutes);
app.use('/usuario/', userRoutes);
//Probamos rutas para poder presentar mensajes al usuario a través del navegador

