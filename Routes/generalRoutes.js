import express from 'express';

const router = express.Router();

<<<<<<< HEAD
router.get("/", function(req, res){
    res.send("Hola Mundo desde Node, a través del Navegador");
})

router.get("/QuienSoy", function(req, res){
    res.json({"estudiante": "Brandon Leon Cabrera",
        "carrera": "TI DSM",
        "grado": "4°",
        "grupo": "B",
        "asignatura": "AWOS"
    })
})

export default router; //Esta palabra reservada de JS me permite exportar los elementos definidos y utilizarlos en otros archivos del mismo sitio. 
=======
router.get("/",function(req, res){
    res.send("Hola mundo desde Node, a través del navegador")
});
router.get("/QuienSoy",function(req, res){
    res.json({"Estudiante": "Brandon Leon Cabrera",
        "grado":"4°",
        "grupo":"B",
        "asignatura":"Aplicaciones de Software Orientado a Servicios (AWOS)"});
    })

    export default router; //Esta palabra reservada de JS me permite exportar los elementos definidos y utilizarlos en otros dispositivos del mismo sitio
    
>>>>>>> Brandon_practica11
