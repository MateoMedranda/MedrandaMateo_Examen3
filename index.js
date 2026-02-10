// Autor: Mateo Medranda
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (_req,res) =>{
    res.send('Examen Mateo Medranda!!');
});

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});