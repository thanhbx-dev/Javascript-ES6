const Error404Page = {
    render() {
        window.scrollTo(0, 0);
        return /*html*/ `
        <div class="page-content">
            <div class="bg-gray-100">
                <div class="container mx-auto px-5">
                    <div class="link p-2">
                        <ul class="flex">
                            <li class="px-5 hover:text-green-400"><a href="#"><span>Home</span></a></li>
                            <li><span>&rsaquo;</span></li>
                            <li class="px-5"><span>Error 404 Page</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="p-20">
                <div class="container mx-auto text-center">
                    <div class="">
                        <h1  class="text-9xl text-green-400">4<i class="fa fa-exclamation-circle" aria-hidden="true"></i>4</h1>
                    </div>
                    <div>
                        <h1 class="text-xl font-medium">Page not found!</h1>
                    </div>
                </div>
            </div>
        </div>
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
    }
}
export default Error404Page;