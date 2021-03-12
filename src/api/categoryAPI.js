import { axiosClient } from "./axiosClient";

const CategoryAPI = {
    getAll() {
        const url = '/category';
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    addCategory(category) {
        const url = `/category`;
        return axiosClient.post(url, category);
    },
    removeCategory(id) {
        const url = `/category/${id}`;
        return axiosClient.delete(url);
    },
    updateCate(id, data) {
        const url = `/category/${id}`;
        return axiosClient.put(url, data);
    }
}
export
default CategoryAPI;