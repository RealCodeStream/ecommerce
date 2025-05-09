import productos from '../models/productos.js'

const getProductosServices = async (nombre) => {
    try {
        if (nombre) {
            return await productos.findOne({ nombre: { $regex: new RegExp(nombre, 'i') } }); // búsqueda insensible a mayúsculas/minúsculas
        }
        return await productos.find({});
    } catch (error) {
        throw new Error("Error de producto: " + error.message);
    }
}
export default getProductosServices;