const express = requerie(`express`);
const app= express();
const port=3000;
app.listen(port,()=>{
    console.log(`La aplicacion ha iniciado en el puesto ${port}`);
    
})
