import {check,validationResult} from 'express-validator'
import Usuario from "../models/Usuario";

const formularioLogin=(req,res)=>{
    res.render('auth/login',{
        //con la coma decimos que hay un segundo parámetro
        autenticado:true,
        page: "Ingresa a la Plataforma"
    })
};

const formularioRegister=(request,response)=>{
    response.render('auth/register',{
        page: "Crea una Nueva Cuenta..."
    })
};

const formularioPasswordRecovery = (request,response)=>{
    response.render('auth/passwordRecovery',{
        page: "Recuperación de Contraseña"
    })
}

const createNewUser= async(req,res)=>{
    console.log("registrando un  nuevo usuario")
    
    await check('nombre_usuario').notEmpty().withMessage('El nombre del usuario es obligatorio')
    await check('email_usuario').notEmpty().withMessage('El correo electronico del usuario es obligatorio')

    let result = validationResult(req)
    res.json(result.array());
    const newUser=await Usuario.create(req.body);
    res.json(Usuario)
}

export {formularioLogin,formularioRegister,formularioPasswordRecovery,createNewUser}



