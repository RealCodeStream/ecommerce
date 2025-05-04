import mongoose from "mongoose";
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    //campos de la tabla mongodb es estricto con lo qu erecibe cada campo ojo a eso
})

module.exports = mongoose.model('productos',requestSchema)