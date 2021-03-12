const NavLeft = {
    render() {
        return /*html*/ `
        <div class="grid grid-cols-10">
        <div class="col-span-2 bg-gray-700 text-gray-300">
            <div class="py-2 px-5 border-b border-white border-opacity-40">
                <a href="/#/admin" class=" flex justify-start items-center gap-5">
                    <div class="overflow-hidden">
                        <img src="./src/images/logoNew.png" alt="" class="w-10 h-10 rounded-full">
                    </div>
                    <div class="">
                        <span>Husky Luxury</span>
                    </div>
                </a>
            </div>
            <div class="py-2 px-5 border-b border-white border-opacity-40">
                <a href="/#/admin" class=" flex justify-start items-center gap-5">
                    <div class="overflow-hidden">
                        <img src="./src/images/MeNew.jpg" alt="" class="w-10 h-10 rounded-full">
                    </div>
                    <div class="">
                        <span>Admin</span>
                    </div>
                </a>
            </div>
            <div>
                <div class="py-2 px-4 uppercase text-sm">
                    <span>Dashboard</span>
                </div>
                <nav class="p-2">
                    <ul>
                        <a href="/#/admin-list-product">
                            <li class="hover:bg-gray-500 py-2 px-4 rounded text-gray-300">
                                <span class="px-2"><i class="fas fa-copy"></i></span>
                                <span>Product</span>
                            </li>
                        </a>
                        <a href="/#/admin-list-category">
                            <li class="hover:bg-gray-500 py-2 px-4 rounded text-gray-300">
                                <span class="px-2"><i class="fas fa-chart-pie"></i></span>
                                <span>Category</span>
                            </li>
                        </a>
                        <a href="#">
                            <li class="hover:bg-gray-500 py-2 px-4 rounded text-gray-300">
                                <span class="px-2"><i class="fas fa-users"></i></span>
                                <span>User</span>
                            </li>
                        </a>
                        <a href="/#/admin-list-blog">
                            <li class="hover:bg-gray-500 py-2 px-4 rounded text-gray-300">
                                <span class="px-2"><i class="fas fa-blog"></i></span>
                                <span>Post</span>
                            </li>
                        </a>
                    </ul>
                </nav>
                <!-- End Nav  -->
                <div class="py-2 px-4 uppercase text-sm">
                    <span>STATISTIC</span>
                </div>
                <nav class="px-2 pb-28">
                    <ul>
                        <a href="#">
                            <li class="hover:bg-gray-500 py-2 px-4 rounded text-gray-300">
                                <span class="px-2"><i class="fas fa-file-invoice"></i></span>
                                <span>Bill</span>
                            </li>
                        </a>
                    </ul>
                </nav>
            </div>
        </div>
                      `
    }
}
export default NavLeft;