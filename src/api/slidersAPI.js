import { axiosClient } from "./axiosClient";

const SlidersAPI = {
    getAll() {
        const url = '/sliders';
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/sliders/${id}`;
        return axiosClient.get(url);;
    }
}
export
default SlidersAPI;