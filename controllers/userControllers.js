const formularioLogin =(reques,response)=>{
    response.render('auth/login',{
        autenticado: false
    })
};
const formularioRegister = (reques,response)=>{
    response.render('auth/register',{
    })
};
const formularioPasswordRecovery = (reques,response)=>{
    response.render('auth/passwordRecovery',{
    })
};
export {formularioLogin,formularioRegister,formularioPasswordRecovery}