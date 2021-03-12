import * as CartHelper from '../helpers/cart'
import ProductAPI from "../api/productAPI";
import JQuery from 'jquery'
const Cart = {
    async render() {
        window.scrollTo(0, 0);
        try {
            // const { data: products } = await ProductAPI.getAll();
            const cartItems = await CartHelper.all();
            let total = 0
            cartItems.map(cart => cart.quantity * cart.priceSale).forEach((price) => {
                total += price
            })
            const result = cartItems.map((cart, index) => {
                return /*html*/ `
                            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                    <span>${index+=1}</span>
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <span>${cart.name}</span>
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <img src="${cart.image}" alt="" class="w-10">
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <span>${new Intl.NumberFormat('de-DE').format(cart.priceSale)}$</span>
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <input type="number" class="w-1/3 border border-gray-500" style="outline: none;" value="${cart.quantity}">
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <span>${new Intl.NumberFormat('de-DE').format(cart.priceSale*cart.quantity)}$</span>
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <button style="outline:none;" class="button-add-cart text-blue-400 hover:text-red-600 underline pl-6 btn" data-id="${cart.id}"><i class="far fa-trash-alt"></i></button>
                                </td>
                            </tr>
                                `
            }).join("")
            return /*html*/ `
        <div class="page-content">
            <div class="bg-gray-100">
                <div class="container mx-auto px-5">
                    <div class="link py-2">
                        <ul class="flex">
                            <li class="pr-5 hover:text-green-400 "><a href="#"><span><i class="fa fa-home" aria-hidden="true"></i> Home</span></a></li>
                            <li><span>&rsaquo;</span></li>
                            <li class="px-5 text-gray-500"><span>Cart</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- End  -->
        <article class="py-5">
            <div class="container mx-auto px-5">
                <div class="text-center pt-3 pb-5 text-2xl font-medium uppercase">
                    <span>Shopping Cart</span>
                </div>
                <div class="col-span-8">
                    <table class="border-collapse w-full table-auto">
                        <thead>
                            <tr>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">STT</th>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Product</th>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Images</th>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Price</th>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Quantity</th>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Total</th>
                                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${result}
                        </tbody>
                    </table>
                    <div class="py-5">
                        <span class="text-2xl font-medium">Total : ${new Intl.NumberFormat('de-DE').format(total)} $</span>
                    </div>
                    <div>
                        <a href="#" class="uppercase px-5 py-2 bg-green-400 text-white hover:bg-green-500 rounded  text-2xl">check out</a>
                    </div>
                </div>
            </div>
        </article>
                       `
        } catch (error) {
            console.log('error');
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
                    Cart.remove(product_id)
                    Header.reloadCountCard()
                })
            }
        })
    }
}
export default Cart;