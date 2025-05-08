import productos from '../models/productos.js'

const getProductosServices = async () => {
    try {
        return await productos.find({});
    } catch (error) {
        throw new Error("Error de producto: " + error.message);
    }
}

//module.exports = {getProductos};
export default getProductosServices;