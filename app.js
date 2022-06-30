import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';


var app = express();
const port = 8080
const API = "https://swapi.dev/api/people/"
const ruta = express.Router();

app.use(cors()); 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const my_route = ruta.get("/:id", (req,res)=>{
    let id = req.params.id;
    fetch(`${API}/${id}`)
    .then(promesaFetch => promesaFetch.json())
    .then(contenido => res.send({"Nombre":contenido['name']}));
});

app.use("/star-wars",my_route);
app.get('/', (req,res)=>{
    res.send({"message":"Bienvenido a mi API"})
});

app.listen(port, function () {
    console.log(`Server running on port ${port}`)
  });