import BlogAPI from "../api/blogAPI";
const BlogPage = {
    async render() {
        window.scrollTo(0, 0);
        try {
            const { data: blogs } = await BlogAPI.getAll();
            const resultBlog = blogs.map(blog => {
                return /*html*/ `
        <div class="col-span-10 grid grid-cols-10 bg-gray-100">
            <div class="col-span-5 ">
                <a href="/#/blog-post">
                    <img class="w-full h-full" src="${blog.image}" alt="">
                </a>
            </div>
            <div class="col-span-5 p-5">
                <div class="days-comment flex text-sm text-gray-400">
                    <div class="px-3">
                        <span><i class="far fa-calendar-alt px-2"></i>${blog.date}</span>
                    </div>
                    <div>
                        <span><i class="fa fa-comment px-1" aria-hidden="true"></i>5 comments</span>
                    </div>
                </div>
                <div class="link-post text-2xl font-medium hover:text-green-400 px-3">
                    <a href="/#/blog-post/${blog.id}"><span class="px-1">${blog.title}</span></a>
                </div>
                <div class="px-3 py-5">
                    <span class="">${blog.details.substr(0,200)}</span>
                </div>
                <div class="px-3">
                    <button class="text-white px-3 py-1 bg-green-400 rounded uppercase hover:bg-gray-900"><a href="/#/blog-post/${blog.id}">read more</a></button>
                </div>
            </div>
        </div>
                            `
            }).join("");
            window.scrollTo(0, 0);
            return /*html*/ `
        <div class="page-content">
            <div class="bg-gray-100">
                <div class="container mx-auto px-5">
                    <div class="link py-2">
                        <ul class="flex">
                            <li class="pr-5 hover:text-green-400 "><a href="/"><span><i class="fa fa-home" aria-hidden="true"></i> Home</span></a></li>
                            <li><span>&rsaquo;</span></li>
                            <li class="px-5 text-gray-500"><span>Blog</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            <!-- End Link  -->
            <article class="py-5">
                <div class="container mx-auto p-5">
                    <div class="text-center text-2xl font-medium">
                        <span>Our Blog</span>
                    </div>
                    <div class="grid grid-cols-12 gap-5 py-5">
                        <div class="col-span-2  grid grid-cols-2 gap-5">
                            <div class="col-span-2">
                                <div class="">
                                    <div class="text-xl font-medium uppercase border-b border-black">popurlar tags</div>
                                    <div class="py-2">
                                        <ul class="uppercase font-medium text-sm">
                                            <li class="mb-2 mr-2 inline-block">
                                                <a class="flex p-2 bg-gray-100 hover:bg-green-400  hover:text-white rounded" href="#">jeans</a>
                                            </li>
                                            <li class="mb-2 mr-2 inline-block">
                                                <a class="flex p-2 bg-gray-100 hover:bg-green-400  hover:text-white rounded" href="#">hags band</a>
                                            </li>
                                            <li class="mb-2 mr-2 inline-block">
                                                <a class="flex p-2 bg-gray-100 hover:bg-green-400  hover:text-white rounded" href="#">gift card</a>
                                            </li>
                                            <li class="mb-2 mr-2 inline-block">
                                                <a class="flex p-2 bg-gray-100 hover:bg-green-400  hover:text-white rounded" href="#">fashion</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- End p tags -->
                                <div class="">
                                    <div class="text-xl font-medium uppercase border-b border-black">category</div>
                                    <div class="py-2">
                                        <ul class="uppercase font-medium text-sm">
                                            <li class="mb-2 mr-2 inline-block">
                                                <a class="flex p-2 bg-gray-100 hover:bg-green-400  hover:text-white rounded" href="#">women</a>
                                            </li>
                                            <li class="mb-2 mr-2 inline-block">
                                                <a class="flex p-2 bg-gray-100 hover:bg-green-400  hover:text-white rounded" href="#">men</a>
                                            </li>
                                            <li class="mb-2 mr-2 inline-block">
                                                <a class="flex p-2 bg-gray-100 hover:bg-green-400  hover:text-white rounded" href="#">gift card</a>
                                            </li>
                                            <li class="mb-2 mr-2 inline-block">
                                                <a class="flex p-2 bg-gray-100 hover:bg-green-400  hover:text-white rounded" href="#">gift card</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- End p category  -->
                            </div>
                        </div>
                        <!-- End Menu  -->
                        <div class="col-span-10 grid grid-cols-10 gap-5 ">
                                ${resultBlog}
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
        } catch (error) {
            console.log('error');
        }

    }
}
export default BlogPage;