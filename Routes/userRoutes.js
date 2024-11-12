import express from 'express';
import { formularioLogin,formularioRegister,formularioPasswordRecovery,createNewUser } from '../controllers/userController.js';

const router =  express.Router();


//GET - Se utiliza para la lectura de datos e información del servidor al cliente
//ENDPOINTS - son las rutas para acceder a las secciones o funciones de nuestra aplicación web
// 2 componentes de una petición ruta (a donde voy), función callback (que hago)
// ":" en una ruta define de manera posicional los parametros de entrada
router.get("/busquedaPorID/:id", function (request, response){
    response.send(`Se esta solicitando buscar al usuario con ID: ${request.params.id}`)
})   //2 componentes de una petición ruta y función callback - La ruta es la que pide la información el callback es lo que se va a hacer

router.post("/newUser", createNewUser)

//POST - se utiliza para el envío de datos e información del cliente al servidor
router.post("/new/:name/:email/:password", function(req,res){
    res.send(`Se ha solicitado la creación de un nuevo usuario de nombre: ${req.params.name}, asociando el correo electronico: ${req.params.email} con la contraseña: ${req.params.password}`)
})

//PUT - se utiliza para la actualización total de información del cliente al servidor
router.put("/replaceUserByEmail/:name/:email/:password", function(a,b){
    b.send(`Se ha solicitado el remplazo de toda la información del usuario: ${a.params.name}, con correo: ${a.params.email} y contraseña: ${a.params.password}`)
})

//PATCH - se utiliza para actualización parcial
router.patch("/updatePassword/:email/:newPassword/:newPasswordConfirm", function(request,response){
    const{email,newPassword,newPasswordConfirm } = request.params //Destructuración de un objeto
    if(newPassword === newPasswordConfirm)
    {
        response.send(`Se ha solicitado la actualización de la contraseña del usuario con el mismo correo: ${email}, se aceptan los cambios ya que la contraseña y confirmación son la misma.`)
        console.log(newPassword);
        console.log(newPasswordConfirm);
    }else{
        response.send(`Se ha solicitado la actualización de la contraseña del usuario con correo: ${email} con la nueva contraseña ${newPassword}, pero se rechaza el cambio dado que la nueva contraseña y su confirmación no coinciden.`)
        console.log(newPassword);
        console.log(newPasswordConfirm);
    }
})

//DELETE
router.delete("/deleteUser/:email", function(request,response){
    response.send(`Se ha solicitado la eliminación del usuario asociado al correo: ${request.params.email}`)
})

router.get("/login",formularioLogin/*Middelware*/)
router.get("/createAccount",formularioRegister)
router.get("/passwordRecovery",formularioPasswordRecovery)

export default router;