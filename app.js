
const express = require("express")
const path = require("path")
const app = express()

//pongo la carpeta public como publica
app.use(express.static(path.join(__dirname, "/public")))


//ruta navegador localhost:3000
app.listen(process.env.PORT || 3000,function(){
    console.log("servido andando")
})

//ruta de home
app.get("/",(req,res)=>{
    res.sendFile((__dirname + "/views/home.html"))//levanta el archivo home

})

app.get("/register",(req,res)=>{
    res.sendFile((__dirname + "/views/register.html"))//levanta el archivo home

})

app.get("/login",(req,res)=>{
    res.sendFile((__dirname + "/views/login.html"))//levanta el archivo home

})

//rutas genericas  
app.get("*",(req,res)=>{//aca le paso la locaciona a donde redirecciono que es *
    res.send("rutas no asignadas")
})
