import ProductAPI from '../api/productAPI.js';
import NavLeft from '../components/NavLeft.js';
import NavTop from '../components/NavTop.js';
import { reRender, $ } from '../unlti.js';
import firebase from '../firebase';
import CategoryAPI from '../api/categoryAPI.js';
import JQuery from 'jquery'
import validation from '../helpers/validation.js'
const AdminProductAddPage = {
    async render() {
        try {
            const { data: categories } = await CategoryAPI.getAll();
            const result = categories.map(category => {
                return /*html*/ `
                                <option value="${category.id}">${category.name}</option>
                              `
            }).join("");
            window.scrollTo(0, 0);
            return /*html*/ `
            ${NavLeft.render()}
                <div class="col-span-8 bg-gray-50">
                    ${NavTop.render()}
                    <main class="p-4">
                        <div class="flex justify-between">
                            <div>
                                <h1 class="text-2xl">Add Product</h1>
                            </div>
                        </div>
                        <form action="" id="form-add">
                            <div class="grid grid-cols-8 gap-5 py-2">
                                <div class="col-span-4">
                                    <div>
                                        <div class="py-2 font-medium text-black">
                                            <label for="">Category</label>
                                        </div>
                                        <div>
                                            <select name="" id="prd-category" style="outline: none;" class="border  p-2 w-full rounded">
                                                ${result}
                                            </select>
                                        </div>
                                    </div>
                                    <!-- End Input  -->
                                    <div class="py-2">
                                        <div class="py-2 font-medium text-black">
                                            <label for="prd-name">Name <span class="text-red-500">(*)</span></label>
                                        </div>
                                        <div>
                                            <input 
                                            placeholder="Product Name" 
                                            type="text" 
                                            id="prd-name" 
                                            name="" 
                                            class="p-2 w-full border  rounded hover:border-blue-300" 
                                            style="outline: none;">
                                        </div>
                                        <small></small>
                                    </div>
                                    <!-- End Input  -->
                                    <div class="py-2">
                                        <div class="py-2 font-medium text-black">
                                            <label for="">Price <span class="text-red-500">(*)</span></label>
                                        </div>
                                        <div>
                                            <input 
                                            placeholder="Product Price" 
                                            min="1"
                                            type="number" 
                                            id="prd-price" 
                                            name="" 
                                            class="p-2 w-full border  rounded hover:border-blue-300" 
                                            style="outline: none;">
                                        </div>
                                    </div>
                                    <!-- End Input  -->
                                    <div class="py-2">
                                        <div class="py-2 font-medium text-black">
                                            <label for="">Price Sale <span class="text-red-500">(*)</span></label>
                                        </div>
                                        <div>
                                            <input 
                                            placeholder="Product Price Sale" 
                                            type="number" 
                                            min="1"
                                            id="prd-sale" 
                                            name="" 
                                            class="p-2 w-full border  rounded hover:border-blue-300" 
                                            style="outline: none;">
                                        </div>
                                    </div>
                                    <!-- End Input  -->
                                </div>
                                <!-- End Col-4-1  -->
                                <div class="col-span-4">
                                    <div class="">
                                        <div class="py-2 font-medium text-black">
                                            <label for="">Quantity <span class="text-red-500">(*)</span></label>
                                        </div>
                                        <div>
                                            <input 
                                            placeholder="Quantity" 
                                            min="1"
                                            type="number" 
                                            id="prd-quantity" 
                                            name="" 
                                            class="p-2 w-full border  rounded hover:border-blue-300" 
                                            style="outline: none;">
                                        </div>
                                    </div>
                                    <div class="py-2">
                                        <div class="py-2 font-medium text-black">
                                            <label for="">Details <span class="text-red-500">(*)</span></label>
                                        </div>
                                        <div>
                                            <textarea 
                                            placeholder="Details" 
                                            name="" 
                                            id="prd-details" 
                                            cols="30" rows="3" 
                                            class="p-2 w-full border  rounded hover:border-blue-300" 
                                            style="outline: none;">
                                            </textarea>
                                        </div>
                                    </div>
                                    <!-- End Input  -->
                                    <!-- End Input  -->
                                    <div class="">
                                        <div class="py-2 font-medium text-black">
                                            <label for="">Image <span class="text-red-500">(*)</span></label>
                                        </div>
                                        <div>
                                            <input 
                                            type="file" id="prd-images" 
                                            name="" 
                                            class="p-2 w-full border  rounded hover:border-blue-300" 
                                            style="outline: none;">
                                        </div>
                                    </div>
                                    <!-- End Input  -->
                                    <div class="py-2">
                                        <div>
                                            <button 
                                                type="submit" 
                                                name="" 
                                                id="button-submit"
                                                class="hover:bg-blue-600 p-2 bg-blue-500 text-white rounded hover:border-blue-300" 
                                                style="outline: none;"
                                            >Submit
                                            </button>
                                        </div>
                                    </div>
                                    <!-- End Input  -->
                                </div>
                                <!-- End Col-4-2  -->
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
            //
            let validateStatus = true
            const category = JQuery('#prd-category');
            const nameP = JQuery('#prd-name');
            const details = JQuery('#prd-details');
            const price = JQuery('#prd-price');
            const priceSale = JQuery('#prd-sale');
            const quantity = JQuery('#prd-quantity');
            const image = JQuery('#prd-images');
            //
            let cateValidate = { status: true, message: '' }
            let nameValidate = { status: true, message: '' }
            let detailsValidate = { status: true, message: '' }
            let priceValidate = { status: true, message: '' }
            let priceSaleValidate = { status: true, message: '' }
            let quantityValidate = { status: true, message: '' }
            let imageValidate = { status: true, message: '' }

            //Validate
            if (!category.val()) {
                cateValidate = { status: false, message: 'Tên tối thiểu 3 kí tự !' }
            }
            //Name
            if (!nameP.val() || nameP.val().length < 3) {
                nameValidate = { status: false, message: 'Tên tối thiểu 3 kí tự !' }
            }
            //Details
            if (!details.val() || details.val().length < 50) {
                detailsValidate = { status: false, message: 'Chi tiết tối thiểu 50 kí tự !' }
            }
            //Price
            if (!price.val() || price.val().length > 8 || price.val() < 0) {
                priceValidate = { status: false, message: 'Giá lớn hơn 0 và không vượt quá 8 số' }
            }
            //Price Sale
            if (!priceSale.val() || priceSale.val() > price.val() || priceSale.val() < 0) {
                priceSaleValidate = { status: false, message: 'Giá Sale phải nhỏ hơn giá gốc' }
            }
            //Quantity
            if (!quantity.val() || quantity.val().length > 3) {
                quantityValidate = { status: false, message: 'Số Lượng nhỏ hơn 3 số' }
            }
            //Image
            if (!image.prop('files')[0]) {
                imageValidate = { status: false, message: 'Ảnh không được để trống' }
            }
            //
            validateStatus = validation(category, cateValidate)
            validateStatus = validation(nameP, nameValidate)
            validateStatus = validation(details, detailsValidate)
            validateStatus = validation(image, imageValidate)
            validateStatus = validation(price, priceValidate)
            validateStatus = validation(priceSale, priceSaleValidate)
            validateStatus = validation(quantity, quantityValidate)


            if (!validateStatus) {
                return false
            }
            //
            const productImage = $('#prd-images').files[0];
            let storageRef = firebase.storage().ref(`images/${productImage.name}`);
            $('#button-submit').classList.add("animate-spin");
            await storageRef.put(productImage).then(function() {
                storageRef.getDownloadURL().then((url) => {
                    const product = {
                            id: Math.random().toString(36).substr(2, 9),
                            name: $('#prd-name').value,
                            categoryId: $('#prd-category').value,
                            image: url,
                            details: $('#prd-details').value,
                            price: $('#prd-price').value,
                            priceSale: $('#prd-sale').value,
                            quantity: $('#prd-quantity').value
                        }
                        // console.log(product);
                    ProductAPI.addProduct(product);
                    $('#button-submit').classList.remove("animate-spin");
                    window.location.href = '/#/admin-list-product';
                })
            });
        })
    }
}
export default AdminProductAddPage;