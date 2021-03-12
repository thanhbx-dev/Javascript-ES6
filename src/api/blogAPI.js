import { axiosClient } from "./axiosClient";

const BlogAPI = {
    getAll() {
        const url = '/blog';
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/blog/${id}`;
        return axiosClient.get(url);
    },
    addBlog(blog) {
        const url = `/blog`;
        return axiosClient.post(url, blog);
    },
    removeBlog(id) {
        const url = `/blog/${id}`;
        return axiosClient.delete(url);
    },
    updateBlog(id, data) {
        const url = `/blog/${id}`;
        return axiosClient.put(url, data);
    }
}
export
default BlogAPI;