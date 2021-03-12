import ProductAPI from "../api/productAPI";
import { $ } from "../unlti.js";
import * as Cart from '../helpers/cart.js'
import JQuery from 'jquery'
import Header from '../components/Header'
import CategoryAPI from "../api/categoryAPI";
import BlogAPI from "../api/blogAPI";

const HomePage = {
    async render() {
        window.scrollTo(0, 0);
        try {
            const { data: products } = await ProductAPI.getAll();
            const { data: categories } = await CategoryAPI.getAll();
            const { data: blogs } = await BlogAPI.getAll();
            const resultCate = categories.map(category => {
                return /*html*/ `
                                <li class="px-5 hover:text">
                                    <a href="/#/${category.id}">${category.name}</a>
                                </li>
                               `
            }).join("");
            const resultBlog = blogs.slice(0, 3).map(blog => {
                return /*html*/ `
                            <div class="col-span-4 overflow-hidden ">
                                <div class="transform transition duration-500 ease-in-out hover:scale-105 bg-gray-100 ">
                                    <a href="/#/blog-post/${blog.id}">
                                        <img class=" " src="${blog.image}" alt=" " class=" ">
                                    </a>
                                </div>
                                <div class="text-center py-2 ">
                                    <div>
                                        <span><a href="/#/blog-post/${blog.id}" class="hover:text-green-500 font-medium text-xl">${blog.title}</a></span>
                                    </div>
                                    <div>
                                        <span class="text-gray-500"><i class="far fa-calendar-alt px-2"></i>${blog.date}</span>
                                    </div>
                                </div>
                            </div>
    
                                `
            }).join("");
            const result = products.slice(0, 4).map(product => {
                const category = categories.find(category => category.id == product.categoryId);
                return /*html*/ `
                    <div class="col-span-3 overflow-hidden cate">
                                <div class="transform transition duration-500 ease-in-out hover:scale-100 image">
                                    <a href="/#/product/${product.id}">
                                        <img class=" " src="${product.image}" alt=" " class=" ">
                                    </a>
                                    <div class="overlay w-full">
                                        <button data-id="${product.id}" style="outline:none" id="Cart" class="button-add-cart w-full bg-opacity-80 bg-green-500 uppercase py-2 px-4  text-white font-medium hover:bg-gray-900 ">add to cart</button>
                                    </div>
                                </div>
                                <div class="text-center pt-2 text-sm text-gray-400">
                                    <span>${category.name}</span>
                                </div>
                                <div class="text-center">
                                    <div class="">
                                        <span class=""><a href="/#/product/${product.id}" class="hover:text-green-500 ">${product.name}</a></span>
                                        <div class="flex justify-center items-center">
                                            <span class="p-2 text-md text-gray-500 font-medium"><strike>$${new Intl.NumberFormat('de-DE').format(product.price)}</strike></span>
                                            <span class="font-medium text-md text-red-500">$${new Intl.NumberFormat('de-DE').format(product.priceSale)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                    `
            }).join("");
            return /*html*/ `
            <article class="py-5 ">
                <!-- Start Slide  -->
                <aside clas="bg-gray-100 py-5">
                    <div class="relative overflow-hidden mySlides fade">
                        <img class="" src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/slider/slide-fashion-02.webp" alt="">
                        <div class="absolute left-2/4 top-1/3 text-center items-center">
                            <div>
                                <span class="text-2xl font-medium p-5">Best Price This Year</span>
                            </div>
                            <div>
                                <span class="text-gray-500">Husyky teamplate</span>
                            </div>
                            <div class="py-10">
                                <button style="outline:none" class="uppercase  bg-green-400 px-5 py-3 rounded text-white hover:bg-gray-900">Shop Now</button>
                            </div>
                        </div>
                        <button onclick="plusSlides(-1)" style="outline: none;" class="next hover:bg-green-400 hover:text-white py-3 px-5 rounded-full absolute top-1/2 right-3"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
                        <button  style="outline: none;" class="prev hover:bg-green-400 hover:text-white py-3 px-5 rounded-full absolute  top-1/2 left-3"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
                    </div>
                </aside>
                <!-- End Silde  -->
                <!-- Start Trademark -->
                <aside class="py-3 my-5">
                    <div class="container mx-auto"></div>
                    <div class="grid grid-cols-12">
                        <div class="col-span-2">
                            <img src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/brands/brand-fashion-06.webp" alt="">
                        </div>
                        <div class="col-span-2">
                            <img src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/brands/brand-fashion-05.webp" alt="">
                        </div>
                        <div class="col-span-2">
                            <img src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/brands/brand-fashion-01.webp" alt="">
                        </div>
                        <div class="col-span-2">
                            <img src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/brands/brand-fashion-02.webp" alt="">
                        </div>
                        <div class="col-span-2">
                            <img src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/brands/brand-fashion-03.webp" alt="">
                        </div>
                        <div class="col-span-2">
                            <img src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/brands/brand-fashion-04.webp" alt="">
                        </div>
                    </div>
                </aside>
                <!-- End Trademark  -->
                <!-- Start Category  -->
                <aside class="py-5 my-5 ">
                    <div class="container mx-auto px-5 ">
                        <!-- Start Title Text  -->
                        <div class="text-center ">
                            <h2 class="text-3xl font-medium">Collections</h2>
                        </div>
                        <!-- End Title Text  -->
                        <!-- Start Menu Collection  -->
                        <div class="text-center">
                            <ul class="flex justify-center py-5 text-xl">
                                ${resultCate}
                            </ul>
                        </div>
                        <!-- End Menu Colection  -->
                        <!-- Start Product  -->
                        <div class="grid grid-cols-12 gap-5 ">
                            ${result}
                        </div>
                        <!-- End Product  -->
                    </div>
                </aside>
                <!-- End Category  -->
                <!-- Start Banner Center  -->
                <aside clas="bg-gray-100 py-5 my-5 ">
                    <div class="relative overflow-hidden">
                        <a href="#">
                            <img class="transform transition duration-500 ease-in-out hover:scale-105 " src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/banner-fashion2-full.webp" alt="">
                            <div class="absolute left-2/4 top-1/3 text-center items-center">
                                <div>
                                    <span class="text-2xl font-medium p-5">The best trends of Summer 2021</span>
                                </div>
                                <div>
                                    <span class="text-gray-500">Husyky teamplate</span>
                                </div>
                                <div class="py-10">
                                    <button class="bg-green-400 px-5 py-3 rounded text-white hover:bg-gray-900">Buy Now</button>
                                </div>
                            </div>
                        </a>
                    </div>
                </aside>
                <!-- End Banner Center  -->
                <!-- Start Category  -->
                <aside class="py-5 my-5 ">
                    <div class="container mx-auto px-5 ">
                        <!-- Start Title Text  -->
                        <div class="text-center ">
                            <h2 class="text-3xl font-medium">New arrival</h2>
                        </div>
                        <!-- End Title Text  -->
                        <!-- Start Menu Collection  -->
                        <div class="text-center py-3 text-gray-600">
                            <span>Hurry up! Limited</span>
                        </div>
                        <!-- End Menu Colection  -->
                        <!-- Start Product  -->
                        <div class="grid grid-cols-12 gap-5 ">
                            ${result}
                        </div>
                        <!-- End Product  -->
                    </div>
                </aside>
                <!-- End Category  -->
                <!-- Start Blog  -->
                <aside class="py-5 my-5 ">
                    <div class="container mx-auto px-5 ">
                        <!-- Start Title Text  -->
                        <div class="text-center py-5">
                            <a href="/#/blog">
                                <h2 class="text-3xl hover:text-green-400">Latest From Blog</h2>
                            </a>
                        </div>
                        <!-- End Title Text  -->
                        <!-- Start Product  -->
                        <div class="grid grid-cols-12 gap-5 ">
                            ${resultBlog}
                        </div>
                        <!-- End Product  -->
                    </div>
                </aside>
                <!-- End Blog  -->
            </article>
            <!-- End Article  -->
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
        } catch (err) {
            console.log('err');
        }
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
export default HomePage;