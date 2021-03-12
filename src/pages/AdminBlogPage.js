import ListBlog from "../components/ListBlog";
import ListProduct from "../components/ListProduct";
import NavLeft from "../components/NavLeft";
import NavTop from "../components/NavTop";


const AdminBlogPage = {
    async render() {
        window.scrollTo(0, 0);
        try {
            return /*html*/ `
        <body>
                ${NavLeft.render()}
                <div class="col-span-8 bg-gray-50">
                ${NavTop.render()}
                    <main class="p-4">
                        <div class="flex justify-between">
                            <div>
                                <h1 class="text-2xl">Blog</h1>
                            </div>
                            <div>
                                <a href="/#/admin-add-blog" class="uppercase bg-blue-500 p-2 text-white rounded font-medium hover:bg-blue-600">
                                    <span>add blog</span>
                                </a>
                            </div>
                        </div>
                        <div class="grid grid-cols-8 gap-5 py-2" id="list-blog">
                            ${await ListBlog.render()}
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
    },
    async afterRender() {
        return `${await ListBlog.afterRender()}`
    }
}
export default AdminBlogPage;