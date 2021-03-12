import CategoryAPI from "../api/categoryAPI";
import ProductAPI from "../api/productAPI";
import { parseRequestUrl } from "../unlti";

const CategoryPage = {
        async render() {
            window.scrollTo(0, 0);
            try {
                const { id } = parseRequestUrl();
                const { data: products } = await ProductAPI.getAll();
                const { data: categories } = await CategoryAPI.getAll();
                const result = products.filter(product => product.categoryId == id).map(product => {
                    return /*html*/ `
                        <div class="col-span-3 overflow-hidden cate">
                            <div class="transform transition duration-500 ease-in-out hover:scale-100 image">
                                <a href="/#/product/${product.id}">
                                    <img class=" " src="${product.image}" alt=" " class=" ">
                                </a>
                                <div class="overlay w-full">
                                    <button class="w-full bg-opacity-80 bg-green-500 uppercase py-2 px-4  text-white font-medium hover:bg-gray-900 ">add to cart</button>
                                </div>
                            </div>
                            <div class="text-center pt-2 text-sm text-gray-400">
                                <span>Adidas</span>
                            </div>
                            <div class="text-center">
                                <div class="">
                                    <span class=""><a href="/#/product/${product.id}" class="hover:text-green-500 ">${product.name}</a></span>
                                    <div class="flex justify-center items-center">
                                        <span class="text-md text-gray-500 font-medium p-2"><strike>$${new Intl.NumberFormat('de-DE').format(product.price)}</strike></span>
                                        <span class="font-medium text-md text-red-500">$${new Intl.NumberFormat('de-DE').format(product.priceSale)}</span>
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
                                    <li class="px-5"><a href="/#/product"><span>Shop</span></a></li>
                                    <li><span>&rsaquo;</span></li>
                                    <li class="px-5 text-gray-500">
                                        <span>${categories.filter(category=>category.id==id).map(category=>{
                                            return`${category.name}`
                                        })}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <article class="py-5">
                    <div class="container mx-auto px-5">
                            <div class="text-center pt-3 pb-5 text-2xl font-medium uppercase">
                                <span>${categories.filter(category=>category.id==id).map(category=>{
                                    return`${category.name}`
                                })}</span>
                            </div>
                        <div class="grid grid-cols-12 gap-5">
                            <div class="col-span-3 ">
                                <div>
                                    <div class="category">
                                        <div class="text-xl font-medium pb-2"><span>Category</span></div>
                                    </div>
                                    <div>
                                        <ul>
                                        <li class="py-2 hover:text-green-400"><a href="/#/product" class="">All</a></li>
                                        ${categories.map(category=>{
                                            return/*html*/ `
                                            <li class="py-2 hover:text-green-400"><a href="/#/category/${category.id}" class="">${category.name}</a></li>
                                                        `
                                        }).join("")}
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
                                <div class="select-top bg-gray-100 p-2 flex text-sm">
                                    <div class="sort px-5">
                                        <label for="" class="uppercase">sort : </label>
                                        <select name="" id="sortP" class="uppercase p-1 " style="outline: none;">
                                            <option value="1">name a-z</option>
                                            <option value="2">name z-a</option>
                                            <option value="3">price high to low</option>
                                            <option value="4">price low to hight</option>
                                        </select>
                                    </div>
                                    <div class="view px-5">
                                        <label for="" class="uppercase">view : </label>
                                        <select name="" id="" class="uppercase p-1 " style="outline: none;">
                                            <option value="">show 3</option>
                                            <option value="">show 6</option>
                                            <option value="">show 9</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="grid grid-cols-9 gap-5 pt-5">
                                    ${result}
                                </div>
                                <div>
                                    <ul class="flex">
                                        <li class="px-3 py-1 bg-gray-100 mr-1 rounded text-white bg-gray-900 hover:bg-green-400">
                                            <a href="#">1</a>
                                        </li>
                                        <li class="px-3 py-1 bg-gray-100 mr-1 rounded text-white bg-gray-900 hover:bg-green-400">
                                            <a href="# ">2</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
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
    }
}
export default CategoryPage;