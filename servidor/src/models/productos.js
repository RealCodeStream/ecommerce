import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    //campos de la tabla mongodb es estricto con lo qu erecibe cada campo ojo a eso
    nombre: {type: String, require: true},
    precio: {type: Number, require: true},
    descripcion: {type: String, require: true}
})
const Productos = mongoose.model('productos', productoSchema);
export default Productos;