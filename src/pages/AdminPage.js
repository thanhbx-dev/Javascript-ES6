import BlogAPI from "../api/blogAPI";
import CategoryAPI from "../api/categoryAPI";
import ProductAPI from "../api/productAPI";
import NavLeft from "../components/NavLeft";
import NavTop from "../components/NavTop";
const AdminPage = {
    async render() {
        window.scrollTo(0, 0);
        try {
            const { data: products } = await ProductAPI.getAll();
            const { data: categories } = await CategoryAPI.getAll();
            const { data: blogs } = await BlogAPI.getAll();
            let limitPrd = products.slice(0, 2);
            console.log(limitPrd);
            const countPrd = products.length;
            const countCate = categories.length;
            const countBlog = blogs.length;
            return /*html*/ `
        <body>
                ${NavLeft.render()}
                <div class="col-span-8 bg-gray-50">
                ${NavTop.render()}
                    <main class="p-4">
                        <div>
                            <h1 class="text-2xl">Dashboard</h1>
                        </div>
                        <div class="grid grid-cols-8 gap-5 py-2">
                            <div class="col-span-2 bg-blue-600 grid grid-cols-2 rounded overflow-hidden text-white">
                                <div class="col-span-1 items-center p-3">
                                    <div>
                                        <span class="text-3xl font-bold">${countPrd}</span>
                                    </div>
                                    <div class="py-3">
                                        <span>Product</span>
                                    </div>
                                </div>
                                <div class="col-span-1 py-3 text-center">
                                    <div>
                                        <span class="text-7xl text-gray-200 text-opacity-40"><i class="far fa-copy"></i></span>
                                    </div>
                                </div>
                                <div class="col-span-2 text-center bg-blue-700 hover:bg-blue-800 py-1">
                                    <a href="/#/admin-list-product">
                                        <span>More <i class="fas fa-arrow-circle-right text-white"></i></span>
                                    </a>
                                </div>
                            </div>
                            <!-- End  -->
                            <div class="col-span-2 bg-green-600 grid grid-cols-2 rounded overflow-hidden text-white">
                                <div class="col-span-1 items-center p-3">
                                    <div>
                                        <span class="text-3xl font-bold">${countCate}</span>
                                    </div>
                                    <div class="py-3">
                                        <span>Category</span>
                                    </div>
                                </div>
                                <div class="col-span-1 py-3 text-center">
                                    <div>
                                        <span class="text-7xl text-gray-200 text-opacity-40"><i class="far fa-chart-bar"></i></span>
                                    </div>
                                </div>
                                <div class="col-span-2 text-center bg-green-700 hover:bg-green-800 py-1">
                                    <a href="/#/admin-list-category">
                                        <span>More <i class="fas fa-arrow-circle-right text-white"></i></span>
                                    </a>
                                </div>
                            </div>
                            <!-- End  -->
                            <div class="col-span-2 bg-yellow-600 grid grid-cols-2 rounded overflow-hidden text-white">
                                <div class="col-span-1 items-center p-3">
                                    <div>
                                        <span class="text-3xl font-bold">150</span>
                                    </div>
                                    <div class="py-3">
                                        <span>User</span>
                                    </div>
                                </div>
                                <div class="col-span-1 py-3 text-center">
                                    <div>
                                        <span class="text-7xl text-gray-200 text-opacity-40"><i class="fas fa-users"></i></span>
                                    </div>
                                </div>
                                <div class="col-span-2 text-center bg-yellow-700 hover:bg-yellow-800 py-1">
                                    <a href="/#/admin-list-user">
                                        <span>More <i class="fas fa-arrow-circle-right text-white"></i></span>
                                    </a>
                                </div>
                            </div>
                            <!-- End  -->
                            <div class="col-span-2 bg-red-600 grid grid-cols-2 rounded overflow-hidden text-white">
                                <div class="col-span-1 items-center p-3">
                                    <div>
                                        <span class="text-3xl font-bold">${countBlog}</span>
                                    </div>
                                    <div class="py-3">
                                        <span>Post</span>
                                    </div>
                                </div>
                                <div class="col-span-1 py-3 text-center">
                                    <div>
                                        <span class="text-7xl text-gray-200 text-opacity-40"><i class="fas fa-chart-pie"></i></span>
                                    </div>
                                </div>
                                <div class="col-span-2 text-center bg-red-700 hover:bg-red-800 py-1">
                                    <a href="/#/admin-list-blog">
                                        <span>More <i class="fas fa-arrow-circle-right text-white"></i></span>
                                    </a>
                                </div>
                            </div>
                            <!-- End  -->
                        </div>
                        <div class="grid grid-cols-8 gap-5 py-2">
                            <div class="col-span-2 bg-blue-600 grid grid-cols-2 rounded overflow-hidden text-white">
                                <div class="col-span-1 items-center p-3">
                                    <div>
                                        <span class="text-3xl font-bold">150</span>
                                    </div>
                                    <div class="py-3">
                                        <span>Product</span>
                                    </div>
                                </div>
                                <div class="col-span-1 py-3 text-center">
                                    <div>
                                        <span class="text-7xl text-gray-200 text-opacity-40"><i class="far fa-copy"></i></span>
                                    </div>
                                </div>
                                <div class="col-span-2 text-center bg-blue-700 hover:bg-blue-800 py-1">
                                    <a href="#">
                                        <span>More <i class="fas fa-arrow-circle-right text-white"></i></span>
                                    </a>
                                </div>
                            </div>
                            <!-- End  -->
                            <div class="col-span-2 bg-green-600 grid grid-cols-2 rounded overflow-hidden text-white">
                                <div class="col-span-1 items-center p-3">
                                    <div>
                                        <span class="text-3xl font-bold">150</span>
                                    </div>
                                    <div class="py-3">
                                        <span>Category</span>
                                    </div>
                                </div>
                                <div class="col-span-1 py-3 text-center">
                                    <div>
                                        <span class="text-7xl text-gray-200 text-opacity-40"><i class="far fa-chart-bar"></i></span>
                                    </div>
                                </div>
                                <div class="col-span-2 text-center bg-green-700 hover:bg-green-800 py-1">
                                    <a href="#">
                                        <span>More <i class="fas fa-arrow-circle-right text-white"></i></span>
                                    </a>
                                </div>
                            </div>
                            <!-- End  -->
                            <div class="col-span-2 bg-yellow-600 grid grid-cols-2 rounded overflow-hidden text-white">
                                <div class="col-span-1 items-center p-3">
                                    <div>
                                        <span class="text-3xl font-bold">150</span>
                                    </div>
                                    <div class="py-3">
                                        <span>User</span>
                                    </div>
                                </div>
                                <div class="col-span-1 py-3 text-center">
                                    <div>
                                        <span class="text-7xl text-gray-200 text-opacity-40"><i class="fas fa-users"></i></span>
                                    </div>
                                </div>
                                <div class="col-span-2 text-center bg-yellow-700 hover:bg-yellow-800 py-1">
                                    <a href="#">
                                        <span>More <i class="fas fa-arrow-circle-right text-white"></i></span>
                                    </a>
                                </div>
                            </div>
                            <!-- End  -->
                            <div class="col-span-2 bg-red-600 grid grid-cols-2 rounded overflow-hidden text-white">
                                <div class="col-span-1 items-center p-3">
                                    <div>
                                        <span class="text-3xl font-bold">150</span>
                                    </div>
                                    <div class="py-3">
                                        <span>Post</span>
                                    </div>
                                </div>
                                <div class="col-span-1 py-3 text-center">
                                    <div>
                                        <span class="text-7xl text-gray-200 text-opacity-40"><i class="fas fa-chart-pie"></i></span>
                                    </div>
                                </div>
                                <div class="col-span-2 text-center bg-red-700 hover:bg-red-800 py-1">
                                    <a href="#">
                                        <span>More <i class="fas fa-arrow-circle-right text-white"></i></span>
                                    </a>
                                </div>
                            </div>
                            <!-- End  -->
                        </div>
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
        </body>
                      `
        } catch (error) {
            console.log('error');
        }

    }
}
export default AdminPage;