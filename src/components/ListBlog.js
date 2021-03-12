import { reRender, $ } from '.././unlti.js';
import BlogAPI from '../api/blogAPI.js';
const ListBlog = {
    async render() {
        const { data: blogs } = await BlogAPI.getAll();
        const result = blogs.map((blog, index) => {
            return /*html*/ `
            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span>${index+=1}</span>
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span>${blog.title}</span>
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <img src="${blog.image}" alt="" class="w-10">
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span>${blog.details.substr(0,100)}</span>
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <a href="/#/admin-edit-blog/${blog.id}" class="text-blue-400 hover:text-red-600 underline" id="update"><i class="far fa-edit"></i></a>
                    <button style="outline:none;" class="text-blue-400 hover:text-red-600 underline pl-6 btn" data-id="${blog.id}"><i class="far fa-trash-alt"></i></button>
                </td>
            </tr>
                           `
        }).join("");
        return /*html*/ `
        <div class="col-span-8">
            <table class="border-collapse w-full table-auto">
                <thead>
                    <tr>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">STT</th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Name</th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Images</th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Categories</th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${result}
                </tbody>
            </table>
        </div>
                        `
    },
    async afterRender() {
        const btns = $('#list-blog .btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function() {
                const question = confirm('Bạn có chắc chắn muốn xóa không ?')
                if (question) {
                    await BlogAPI.removeBlog(id);
                    await reRender(ListBlog, '#list-blog');
                    alert("Xóa thành công !");
                }
            })
        })
    }
}
export default ListBlog;