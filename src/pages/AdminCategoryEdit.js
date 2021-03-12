import CategoryAPI from "../api/categoryAPI";
import NavLeft from "../components/NavLeft";
import NavTop from "../components/NavTop";
import { parseRequestUrl, $ } from "../unlti";
import JQuery from 'jquery'
import validation from '../helpers/validation.js'

const AdminCategoryEdit = {
    async render() {
        window.scrollTo(0, 0);
        try {
            const { id } = parseRequestUrl();
            const { data: category } = await CategoryAPI.get(id);
            return /*html*/ `
        ${NavLeft.render()}
            <div class="col-span-8 bg-gray-50">
                ${NavTop.render()}
                <main class="p-4">
                    <div class="flex justify-between">
                        <div>
                            <h1 class="text-2xl">Update Category</h1>
                        </div>
                    </div>
                    <form action="" id="form-update-cate">
                        <div class="grid grid-cols-8 gap-5 py-2">
                            <div class="col-span-4">
                                <div class="py-2">
                                    <div class="py-2 font-medium text-black">
                                        <label for="cate-name">Name <span class="text-red-500">(*)</span></label>
                                    </div>
                                    <div>
                                        <input 
                                        placeholder="Product Name" 
                                        type="text" 
                                        id="cate-name" 
                                        name="" 
                                        value="${category.name}"
                                        class="p-2 w-full border border-gray-300 rounded hover:border-blue-300" 
                                        style="outline: none;">
                                    </div>
                                    <small></small>
                                </div>
                                <!-- End Input  -->
                                <div class="py-2">
                                    <div>
                                        <input 
                                        type="submit" 
                                        value="Update" 
                                        name="" 
                                        class="hover:bg-blue-600 p-2 bg-blue-500 text-white rounded hover:border-blue-300" 
                                        style="outline: none;">
                                    </div>
                                </div>
                                <!-- End Input  -->
                            </div>
                            <!-- End Col-4-2  -->
                        </div>
                    </form>
                </main>
            </div>
                        `
        } catch (error) {
            console.log('error');
        }
    },
    async afterRender() {
        const { id } = parseRequestUrl();
        const { data: cate } = await CategoryAPI.get(id);
        $('#form-update-cate').addEventListener('submit', (e) => {
            e.preventDefault();
            let validateStatus = true
            const category = JQuery('#cate-name');
            let cateValidate = { status: true, message: '' }
            if (!category.val()) {
                cateValidate = { status: false, message: 'Tên tối thiểu 3 kí tự !' }
            }
            validateStatus = validation(category, cateValidate)
            if (!validateStatus) {
                return false
            }
            // End Validate 
            const newCate = {
                    ...cate,
                    name: $('#cate-name').value,
                }
                // console.log(newProduct);
            CategoryAPI.updateCate(id, newCate);
            window.location.hash = '/admin-list-category'
        })
    }
}
export default AdminCategoryEdit;