import CategoryAPI from "../api/categoryAPI";
import * as Cart from '../helpers/cart'
import JQuery from 'jquery'

const Header = {
        async render() {
            const { data: categories } = await CategoryAPI.getAll();
            const cartItems = Cart.all()
            return /*html*/ `
        <div class="bg-gray-900">
                <div class="mx-auto px-5">
                    <div class="flex p-2">
                        <div class="flex-1">
                            <ul class="flex items-center">
                                <li class="pr-3 text-white hover:text-green-400">
                                    <a href="#" class=""><i class="fab fa-facebook-f fa-lg"></i></a>
                                </li>
                                <li class="pr-3 text-white hover:text-green-400">
                                    <a href="#" class="hover:text-green-400"><i class="fab fa-youtube fa-lg"></i></a>
                                </li>
                                <li class="pr-3 text-white hover:text-green-400">
                                    <a href="#" class="hover:text-green-400"><i class="fab fa-instagram fa-lg"></i></a>
                                </li>
                                <li class="pr-3 text-white hover:text-green-400">
                                    <a href="#" class="hover:text-green-400"><i class="fab fa-google-plus-g fa-lg"></i></i></a>
                                </li>
                                <li class="pr-3 text-white">
                                    <span><i class="fa fa-phone px-2" aria-hidden="true"></i> 0399.372.610</span>
                                </li>
                                <li class="pr-3 text-white">
                                    <span><i class="fa fa-envelope px-2" aria-hidden="true"></i>thanhbxph11944@fpt.edu.vn</span>
                                </li>
                            </ul>
                        </div>
                        <div class="justify-end">
                            <ul class="flex">
                                <li class="text-white hover:text-green-400 border-r border-white border-opacity-40 px-5"><a href="#">VI</a></li>
                                <li class="text-white hover:text-green-400 border-r border-white border-opacity-40 px-5"><a href="#">VND</a></li>
                                <li class="text-white hover:text-green-400 border-r border-white border-opacity-40 px-5"><a href="/#/admin"><i class="far fa-user fa-lg px-1"></i> Account</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Top  -->
            <div class="container mx-auto px-5">
                <div class="flex items-center py-2">
                    <a href="/">
                        <img src="./src/images/logoNew.png" alt="Husky" class="w-4/5">
                    </a>
                    <!-- End Image -->
                    <div class="md:ml-48 md:flex sm:flex flex justify-between w-full font-medium text-xl">
                        <nav>
                            <ul class=" md:flex" id="btn-menu">
                                <li class="px-4 py-1 "><a href="/" class="hover:text-green-400 ">Home</a></li>
                                <li class="px-4 py-1 hoverable w-auto">
                                    <a href="/#/product" class="hover:text-green-300 block relative block">Shop</a>
                                    <ul class="mega-menu p-5 bg-white w-auto">
                                        ${categories.map(category=>{
                                            return/*html*/ `
                                            <li class="hover:bg-gray-100 w-auto"><a href="/#/category/${category.id}" class="font-thin text-sm px-1">${category.name}</a></li>
                                                        `
                                        }).join("")}
                                    </ul>
                                </li>
                                <li class="px-4 py-1"><a href="/#/blog" class="hover:text-green-300 ">Blog</a></li>
                                <li class="px-4 py-1"><a href="/#/contact " class="hover:text-green-300 ">Contact</a></li>
                                <li class="px-4 py-1"><a href="/#/about " class="hover:text-green-300 ">About</a></li>
                                <li class="px-4 py-1 hoverable">
                                    <a href="# " class="hover:text-green-300 block relative block">Pages</a>
                                    <ul class="mega-menu p-5 bg-white">
                                        <li class="hover:bg-gray-100"><a href="/" class="font-thin text-sm px-2">Home</a></li>
                                        <li class="hover:bg-gray-100"><a href="/#/product" class="font-thin text-sm px-2">Shop</a></li>
                                        <li class="hover:bg-gray-100"><a href="/#/blog" class="font-thin text-sm px-2">Blog</a></li>
                                        <li class="hover:bg-gray-100"><a href="/#/contact" class="font-thin text-sm px-2">Contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                        <div class="flex ">
                            <div class="flex p-1 ">
                                <input type="text" placeholder="Search" style="outline: none;" class="">
                                <button class=" hover:text-green-300 " style="outline: none;"><i class="fas fa-search fa-lg p-1"></i></button>
                            </div>
                            <a href="/#/cart" class="px-4 hover:text-green-300 p-1"><span id="count-card">${cartItems.length}</span><i class="fas fa-shopping-cart fa-lg "></i></a>
                            <button id="btn-mobile " class="md:hidden "><i class="fas fa-bars fa-lg px-4 "></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto py-5 hidden ">
                <div class="items-center text-center ">
                    <form action=" ">
                        <input type="text " name=" " id=" " placeholder="What are you looking for ? " class="w-1/2 border-b border-blue-300 py-2 " style="outline: none; ">
                        <button class="hidden "><i class="fas fa-search fa-lg "></i></button>
                        <a href="# "><i class="fas fa-times fa-lg "></i></a>
                    </form>
                </div>
            </div>
                        `
    },
    async reloadCountCard() {
        const cartItems = Cart.all()
        JQuery('#count-card').text(cartItems.length)
    }
}
export default Header;