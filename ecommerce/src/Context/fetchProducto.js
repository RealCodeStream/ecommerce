import api from "../api/api.js"

const fetchProduct = async() => {
    const res = await api.get('/api/productos');
    return res.data
};

export default fetchProduct;