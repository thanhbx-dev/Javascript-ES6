import CategoryAPI from "../api/categoryAPI";
import { reRender, $ } from '.././unlti.js';
const ListCategory = {
    async render() {
        const { data: categories } = await CategoryAPI.getAll();
        const result = categories.map((category, index) => {
            return /*html*/ `
            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span>${index+=1}</span>
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span>${category.name}</span>
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <a href="/#/admin-edit-category/${category.id}" class="text-blue-400 hover:text-red-600 underline" id="update"><i class="far fa-edit"></i></a>
                    <button style="outline:none;" class="text-blue-400 hover:text-red-600 underline pl-6 btn" data-id="${category.id}"><i class="far fa-trash-alt"></i></button>
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
        const btns = $('#list-category .btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function() {
                const question = confirm('Bạn có chắc chắn muốn xóa không ?')
                if (question) {
                    await CategoryAPI.removeCategory(id)
                    await reRender(ListCategory, '#list-category');
                    alert("Xóa thành công !");
                }
            })
        })
    }
}
export default ListCategory;