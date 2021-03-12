import CategoryAPI from "../api/categoryAPI";
import ProductAPI from "../api/productAPI";
import NavLeft from "../components/NavLeft";
import NavTop from "../components/NavTop";
import { parseRequestUrl, $ } from '../unlti.js';
import JQuery from 'jquery'
import validation from '../helpers/validation.js'

const AdminProductEditPage = {
    async render() {
        try {
            const { data: categories } = await CategoryAPI.getAll();
            const result = categories.map(category => {
                return /*html*/ `
                            <option value="${category.id}">${category.name}</option>
                          `
            }).join("");
            window.scrollTo(0, 0);
            const { id } = parseRequestUrl();
            const { data: product } = await ProductAPI.get(id);
            // console.log(product);
            return /*html*/ `
        ${NavLeft.render()}
        <div class="col-span-8 bg-gray-50">
                ${NavTop.render()}
                <main class="p-4">
                    <div class="flex justify-between">
                        <div>
                            <h1 class="text-2xl">Update Product</h1>
                        </div>
                    </div>
                    <form action="" id="form-update-prd">
                        <div class="grid grid-cols-8 gap-5 py-2">
                            <div class="col-span-4">
                                <div>
                                    <div class="py-2 font-medium text-black">
                                        <label for="">Category</label>
                                    </div>
                                    <div>
                                        <select name="" id="prd-category" style="outline: none;" class="border border-gray-300 p-2 w-full rounded">
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
                                        value="${product.name}"
                                        class="p-2 w-full border border-gray-300 rounded hover:border-blue-300" 
                                        style="outline: none;">
                                    </div>
                                    <small>1</small>
                                </div>
                                <!-- End Input  -->
                                <div class="py-2">
                                    <div class="py-2 font-medium text-black">
                                        <label for="">Price <span class="text-red-500">(*)</span></label>
                                    </div>
                                    <div>
                                        <input 
                                        placeholder="Product Price" 
                                        type="number" 
                                        id="prd-price" 
                                        value="${product.price}"
                                        name="" 
                                        class="p-2 w-full border border-gray-300 rounded hover:border-blue-300" 
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
                                        id="prd-sale" 
                                        value="${product.priceSale}"
                                        name="" 
                                        class="p-2 w-full border border-gray-300 rounded hover:border-blue-300" 
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
                                        type="number" 
                                        id="prd-quantity" 
                                        value="${product.quantity}"
                                        name="" 
                                        class="p-2 w-full border border-gray-300 rounded hover:border-blue-300" 
                                        style="outline: none;">
                                    </div>
                                </div>
                                <div class="py-2">
                                    <div class="py-2 font-medium text-black">
                                        <label for="prd-details">Details <span class="text-red-500">(*)</span></label>
                                    </div>
                                    <div>
                                        <textarea 
                                        placeholder="Details" 
                                        name="" 
                                        id="prd-details" 
                                        cols="30" rows="3" 
                                        class="p-2 w-full border border-gray-300 rounded hover:border-blue-300" 
                                        style="outline: none;">
                                        ${product.details}</textarea>
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
                                        value="${product.image}"
                                        class="p-2 w-full border border-gray-300 rounded hover:border-blue-300" 
                                        style="outline: none;">
                                    </div>
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
        const { data: product } = await ProductAPI.get(id);
        $('#form-update-prd').addEventListener('submit', (e) => {
            e.preventDefault();
            //
            let validateStatus = true
            const category = JQuery('#prd-category');
            const nameP = JQuery('#prd-name');
            const details = JQuery('#prd-details');
            const price = JQuery('#prd-price');
            const priceSale = JQuery('#prd-sale');
            const quantity = JQuery('#prd-quantity');
            // const image = JQuery('#prd-images');
            //
            let cateValidate = { status: true, message: '' }
            let nameValidate = { status: true, message: '' }
            let detailsValidate = { status: true, message: '' }
            let priceValidate = { status: true, message: '' }
            let priceSaleValidate = { status: true, message: '' }
            let quantityValidate = { status: true, message: '' }
                // let imageValidate = { status: true, message: '' }

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
            // if (!image.prop('files')[0]) {
            //     imageValidate = { status: false, message: 'Ảnh không được để trống' }
            // }
            //
            validateStatus = validation(category, cateValidate)
            validateStatus = validation(nameP, nameValidate)
            validateStatus = validation(details, detailsValidate)
                // validateStatus = validation(image, imageValidate)
            validateStatus = validation(price, priceValidate)
            validateStatus = validation(priceSale, priceSaleValidate)
            validateStatus = validation(quantity, quantityValidate)


            if (!validateStatus) {
                return false
            }
            //
            console.log(product);
            const newProduct = {
                    ...product,
                    name: $('#prd-name').value,
                    categoryId: $('#prd-category').value,
                    // image: url,
                    details: $('#prd-details').value,
                    price: $('#prd-price').value,
                    priceSale: $('#prd-sale').value,
                    quantity: $('#prd-quantity').value
                }
                // console.log(newProduct);
            ProductAPI.updateProduct(id, newProduct);
            window.location.hash = '/admin-list-product'
        })
    }

}
export default AdminProductEditPage;