import { axiosClient } from "./axiosClient";

const ProductAPI = {
    getAll() {
        const url = '/products';
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    addProduct(product) {
        const url = `/products`;
        return axiosClient.post(url, product);
    },
    removeProduct(id) {
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    },
    updateProduct(id, data) {
        const url = `/products/${id}`;
        return axiosClient.put(url, data);
    }
}
export
default ProductAPI;