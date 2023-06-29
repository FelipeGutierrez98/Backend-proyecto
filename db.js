const mongoose = require('mongoose')
const config = require('./config') //importamos la configuracion
function connectDB(){
    mongoose.connect(config.db.url).then(()=>{
        console.log("conectado")//estoy accediendo al archivo config en db que tiene la url
})
}

module.exports = connectDB 

