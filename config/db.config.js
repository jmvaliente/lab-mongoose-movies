const mongoose = require ('mongoose');
const MONGODB_URL = 'mongodb://localhost:27017/movies';


mongoose.connect(MONGODB_URL,{useNewUrlParser:true})
    .then(()=> console.info(`Conexion establecida`))
    .catch(error => console.info(`Error de conexion`))