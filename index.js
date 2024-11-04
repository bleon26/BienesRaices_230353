import express from 'express';
import generalRoutes from './routers/generalRoutes.js'
import userRoutes from './routers/userRoutes.js'

const app= express()

//Habilitar pug

app.set('view engine','pug')
app.set('view','./views')

//Definir la carpeta ubicada en recuersos estatdisticos
app.use(express.static('./public'));

//configuramos nuestro servidor web
const port =3000;
app.listen(port, ()=>{
    console.log(`La aplicacion ha iniciado en el puerto: ${port}`)
})

// routing - enrutamiento
app.use('/',generalRoutes);
app.use('/auth',userRoutes);
