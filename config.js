require('dotenv').config()//permite leer las variables de entorno (process.env)


const config = {
    port: process.env.PORT || '2000',/* procesar el archivo/ .env en el puerto o si no que tome el puerto 3000 */
    db:{
        url :process.env.MONGO_URL /* procesar la url del .env */
    }
}

module.exports = config //exportamos el module de la configuracion