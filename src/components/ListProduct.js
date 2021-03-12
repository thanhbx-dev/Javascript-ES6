import CategoryAPI from "../api/categoryAPI";
import ProductAPI from "../api/productAPI";
import { reRender, $ } from '.././unlti.js';
const ListProduct = {
    async render() {
        const { data: products } = await ProductAPI.getAll();
        const { data: categories } = await CategoryAPI.getAll();
        const result = products.map((product, index) => {
            const category = categories.find(category => category.id == product.categoryId);
            return /*html*/ `
            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span>${index+=1}</span>
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span>${product.name}</span>
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <img src="${product.image}" alt="" class="w-10">
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span>${category.name}</span>
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span>${new Intl.NumberFormat('de-DE').format(product.price)} $</span>
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span>${new Intl.NumberFormat('de-DE').format(product.priceSale)} $</span>
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span>${product.quantity}</span>
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <a href="/#/admin-edit-product/${product.id}" class="text-blue-400 hover:text-red-600 underline" id="update"><i class="far fa-edit"></i></a>
                    <button style="outline:none;" class="text-blue-400 hover:text-red-600 underline pl-6 btn" data-id="${product.id}"><i class="far fa-trash-alt"></i></button>
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
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Price</th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Sale</th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Quanlity</th>
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
        const btns = $('#list-product .btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function() {
                const question = confirm('Bạn có chắc chắn muốn xóa không ?')
                if (question) {
                    await ProductAPI.removeProduct(id);
                    await reRender(ListProduct, '#list-product');
                    alert("Xóa thành công !");
                }
            })
        })
    }
}
export default ListProduct;