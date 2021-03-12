import CategoryAPI from '../api/categoryAPI.js';
import NavLeft from '../components/NavLeft.js';
import NavTop from '../components/NavTop.js';
import { $ } from '../unlti.js';
import JQuery from 'jquery'
import validation from '../helpers/validation.js'
const AdminCategoryAddPage = {
    render() {
        window.scrollTo(0, 0);
        try {
            return /*html*/ `
        ${NavLeft.render()}
            <div class="col-span-8 bg-gray-50">
                ${NavTop.render()}
                <main class="p-4">
                    <div class="flex justify-between">
                        <div>
                            <h1 class="text-2xl">Add Category</h1>
                        </div>
                    </div>
                    <form action="" id="form-add">
                        <div class="grid grid-cols-8 gap-5 py-2">
                            <div class="col-span-4">
                                <div class="py-2">
                                    <div class="py-2 font-medium text-black">
                                        <label for="">Name <span class="text-red-500">(*)</span></label>
                                    </div>
                                    <div>
                                        <input placeholder="Category Name" type="text" id="cate-name" name="" class="p-2 w-full border border-gray-300 rounded" style="outline: none;">
                                    </div>
                                </div>
                                <!-- End Input  -->
                                <div class="py-2">
                                    <div>
                                        <input type="submit" value="Submit" name="" class="hover:bg-blue-600 p-2 bg-blue-500 text-white rounded" style="outline: none;">
                                    </div>
                                </div>
                                <!-- End Input  -->
                            </div>
                            <!-- End Col-4-1  -->
                        </div>
                    </form>
                </main>
            </div>
        </div>
        <footer class="border-b border-gray-300 grid grid-cols-10">
            <div class="col-span-2 bg-gray-700 text-gray-300">

            </div>
            <div class="col-span-8 border-t border-gray-300">
                <div class="flex p-4 justify-between font-medium">
                    <div class="px-2">
                        <span class="text-gray-500">Copyright © 2014-2019</span>
                        <span class="text-blue-500 hover:text-blue-700"><a href="#">AdminHusky.io</a></span>
                        <span class="text-gray-400">. All rights reserved.</span>
                    </div>
                    <div class="px-10">
                        <span class="text-gray-500">Version</span>
                        <span class="text-gray-500 font-light"> 3.0.5</span>
                    </div>
                </div>
            </div>
        </footer>
                        `
        } catch (error) {
            console.log('error');
        }
    },
    afterRender() {
        $('#form-add').addEventListener('submit', async(e) => {
            e.preventDefault();
            let validateStatus = true
            const name = JQuery('#cate-name');
            //
            let nameValidate = { status: true, message: '' }

            //
            //Validate
            if (!name.val()) {
                nameValidate = { status: false, message: 'Tên tối thiểu 3 kí tự !' }
            }
            //
            validateStatus = validation(name, nameValidate)

            if (!validateStatus) {
                return false
            }

            //
            const category = {
                id: Math.random().toString(36).substr(2, 9),
                name: $('#cate-name').value,
            }
            CategoryAPI.addCategory(category);
            alert("Thêm Thành Công");
            window.location.href = '/#/admin-list-category';
        })
    }
}
export default AdminCategoryAddPage;