import CategoryAPI from '../api/categoryAPI.js';
import ProductAPI from '../api/productAPI.js';
import { parseRequestUrl } from '../unlti.js';
import * as Cart from '../helpers/cart'
import JQuery from 'jquery'
import Header from '../components/Header'

const ProductDetails = {
        async render() {
            window.scrollTo(0, 0);
            const { id } = parseRequestUrl();
            const { data: product } = await ProductAPI.get(id);
            const { data: categories } = await CategoryAPI.getAll();
            const { data: productAll } = await ProductAPI.getAll();
            const category = categories.find(category => category.id == product.categoryId);
            const catePrd = product.categoryId;
            const result = productAll.filter(prd => prd.categoryId == catePrd).slice(0, 4).map(prd => {
                return /*html*/ `
                <div class="col-span-3 overflow-hidden cate">
                            <div class="transform transition duration-500 ease-in-out hover:scale-100 image">
                                <a href="/#/product/${prd.id}">
                                    <img class=" " src="${prd.image}" alt=" " class=" ">
                                </a>
                                <div class="overlay w-full">
                                    <button style="outline:none" data-id="${prd.id}" class="button-add-cart w-full bg-opacity-80 bg-green-500 uppercase py-2 px-4  text-white font-medium hover:bg-gray-900 ">add to cart</button>
                                </div>
                            </div>
                            <div class="text-center pt-2 text-sm text-gray-400">
                                <span>${category.name}</span>
                            </div>
                            <div class="text-center">
                                <div class="">
                                    <span class=""><a href="/#/product/${prd.id}" class="hover:text-green-500 ">${prd.name}</a></span>
                                    <div class="flex justify-center items-center">
                                        <span class="p-2 text-md text-gray-500 font-medium"><strike>$${new Intl.NumberFormat('de-DE').format(prd.price)}</strike></span>
                                        <span class="font-medium text-md text-red-500">$${new Intl.NumberFormat('de-DE').format(prd.priceSale)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                                `
            }).join("");
            return /*html*/ `
            <div class="page-content">
                <div class="bg-gray-100">
                    <div class="container mx-auto px-5">
                        <div class="link py-2">
                            <ul class="flex">
                                <li class="pr-5 hover:text-green-400 "><a href="#"><span><i class="fa fa-home" aria-hidden="true"></i> Home</span></a></li>
                                <li><span>&rsaquo;</span></li>
                                <li class="px-5 hover:text-green-400 "><a href="#/product"><span>Shop</span></a></li>
                                <li><span>&rsaquo;</span></li>
                                <li class="px-5 text-gray-500"><span>${product.name}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Link  -->
            <article class="py-5">
        <div class="container mx-auto p-5">
            <div class="grid grid-cols-12 gap-5">
                <div class="col-span-3 ">
                    <div>
                        <div class="category">
                            <div class="text-xl font-medium pb-2"><span>Category</span></div>
                        </div>
                        <div>
                            <ul>
                                <li class="py-2 hover:text-green-400"><a href="/#/product">All</a></li>
                                ${categories.map(category=>{ return/*html*/ `
                                <li class="py-2 hover:text-green-400"><a href="/#/category/${category.id}" class="">${category.name}</a></li>
                                ` }).join("")}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="price">
                            <div class="text-xl font-medium py-4"><span>Price</span></div>
                        </div>
                        <div>Làm Button Giá</div>
                    </div>
                </div>
                <!-- End Col-3 -->
                <div class="col-span-9">
                    <div class="grid grid-cols-9 gap-5">
                        <div class="col-span-4">
                            <img src="${product.image}" alt="" class="w-full">
                        </div>
                        <div class="col-span-5 grid grid-cols-5 h-5/6">
                            <div class="col-span-3 grid grid-cols-2 items-center">
                                <div class="col-span-1">
                                    <span class="text-3xl font-medium">
                                        $${new Intl.NumberFormat('de-DE').format(product.priceSale)} 
                                    </span>
                                </div>
                                <div class="col-span-1">
                                    <div>
                                        <span class="text-xl">
                                            <strike>$${new Intl.NumberFormat('de-DE').format(product.price)}</strike>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-red-500">
                                            Sale: $${new Intl.NumberFormat('de-DE').format(product.price-product.priceSale)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-2 flex bg-gray-100 bg-opacity-70 items-center">
                                <div class="px-3">
                                    <span>
                                        <i class="fas fa-clock text-4xl"></i>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        This product was viewed 13 times
                                    </span>
                                </div>
                            </div>
                            <div class="col-span-5">
                                <div class="py-5 font-medium text-xl">
                                    <span>Short description</span>
                                </div>
                                <div>
                                    <span>
                                    ${product.details}
                                    </span>
                                </div>
                            </div>
                            <div class="col-span-5 grid grid-cols-2 border-t border-gray-500 pt-2">
                                <div class="col-span-1">
                                    <div>
                                        <span>
                                            &#10003; 100% Polyester
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            &#10003; Lining:100% Viscose
                                        </span>
                                    </div>
                                </div>
                                <div class="col-span-1">
                                    <div>
                                        <span>
                                            &#10003; Do not dry clean
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            &#10003; Only non-chlorine
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-5 grid grid-cols-2 bg-gray-100 px-5 pt-2">
                                <div class="col-span-1">
                                    <div>
                                        <span>
                                            Availability : <span class="font-medium">${product.quantity>0?"Instock":"Outstock"}</span>
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            Collection : <span class="font-medium">${category.name}</span>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-span-1">
                                    <div>
                                        <span>
                                            Code : <span class="font-medium uppercase ">${product.id}</span>
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            Quantity : <span class="font-medium">${product.quantity}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-5">
                                <div class="flex grid grid-cols-5 gap-5 text-center items-center py-5">
                                    <div class="col-span-2">
                                        <div class="grid grid-cols-4 border border-gray-200">
                                            <div class="col-span-1 bg-gray-100 hover:bg-green-400">
                                                <button class="p-2  w-full h-full" style="outline: none;">+</button>
                                            </div>
                                            <div class="col-span-2">
                                                <input type="number" name="" id="" min="0" max="100" value="1" style="outline: none;" class="w-full h-full text-center items-center">
                                            </div>
                                            <div class="col-span-1 bg-gray-100 hover:bg-green-400">
                                                <button class="p-2  w-full h-full" style="outline: none;">-</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-3">
                                        <button class="uppercase bg-green-400 py-2 px-5 hover:bg-gray-900 text-white rounded font-medium" style="outline: none;">add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
    <aside class="border-t border-gray-500 pb-16">
        <div class="text-center p-5">
            <h2 class="text-3xl font-medium">You may also like</h2>
        </div>
        <div class="grid grid-cols-12 gap-5 px-16">
            ${result}
        </div>
    </aside>
            <aside class="bg-gray-900 text-white ">
            <div class="container mx-auto p-5 ">
                <div class="grid grid-cols-12 gap-5 ">
                    <div class="col-span-4 flex ">
                        <div class="items-center text-5xl p-3 ">
                            <i class="fa fa-database " aria-hidden="true "></i>
                        </div>
                        <div>
                            <div>
                                <span>Extra fast delivery</span>
                            </div>
                            <div>
                                <span>Your order will be delivered 3-5 business days after all of your items are available</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-4 flex ">
                        <div class="items-center text-5xl p-3 ">
                            <i class="fa fa-university " aria-hidden="true "></i>
                        </div>
                        <div>
                            <div>
                                <span>Best price</span>
                            </div>
                            <div>
                                <span>We'll match the product prices of key online and local competitors for immediately</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-4 flex ">
                        <div class="items-center text-5xl p-3 ">
                            <i class="fa fa-cube " aria-hidden="true "></i>
                        </div>
                        <div>
                            <div>
                                <span>Guarantee</span>
                            </div>
                            <div>
                                <span>If the item you want is available, we can process a return and place a new order</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </aside>
                        `
    },
    async afterRender() {
        const { data: products } = await ProductAPI.getAll();
        const buttons = JQuery('.button-add-cart')
        buttons.map(index => {
            const product_id = JQuery(buttons[index]).data('id')
            const product = products.find((product) => product.id == product_id)
            if (product) {
                JQuery(buttons[index]).on('click', () => {
                    Cart.add(product)
                    Header.reloadCountCard()
                })
            }
        })
    }
}
export default ProductDetails;