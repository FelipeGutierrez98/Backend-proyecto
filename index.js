
const config = require('./config') //importamos la configuracion
const connectDB = require('./db')//importamos la conexion de la base de datos;

const express = require('express');

const app = express();

connectDB()//ejecucion de la conexion de la base de datos

app.use(express.json());

app.listen(config.port,() => {//estoy accediendo al archivo config en port
	console.log(`se ejcuta en el puerto ${config.port}`);
});
