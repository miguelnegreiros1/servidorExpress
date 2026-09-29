const express = require("express");
const app = express();

app.use(express.static("public"));


app.listen(3000, function(erro){
    if(erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.")
    }
})