import BlogAPI from "../api/blogAPI";
import { parseRequestUrl, $ } from "../unlti";
import JQuery from 'jquery'
import validation from '../helpers/validation.js'

const BlogPostPage = {
    async render() {
        window.scrollTo(0, 0);
        try {
            const { id } = parseRequestUrl();
            const { data: blog } = await BlogAPI.get(id);
            return /*html*/ `
        <div class="page-content">
        <div class="bg-gray-100">
            <div class="container mx-auto px-5">
                <div class="link py-2">
                    <ul class="flex">
                        <li class="pr-5 hover:text-green-400 "><a href="/"><span><i class="fa fa-home" aria-hidden="true"></i> Home</span></a></li>
                        <li><span>&rsaquo;</span></li>
                        <li class="px-5"><a href="/#/blog"><span>Blog</span></a></li>
                        <li><span>&rsaquo;</span></li>
                        <li class="px-5 text-gray-500"><span>${blog.title}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        <!-- End Link  -->
        <article class="py-5">
            <div class="container mx-auto p-5">
                <div class="text-center text-2xl font-medium">
                    <span>Blog Post</span>
                </div>
                <div class="grid grid-cols-12 gap-5 py-5">
                    <div class="col-span-10 ml-5">
                        <div class="border-b border-black py-3">
                            <div class="text-xl font-medium uppercase">
                                <span>${blog.title}</span>
                            </div>
                            <div>
                                <ul class="text-sm text-gray-400 flex">
                                    <li class="pr-5">
                                        <i class="far fa-calendar-alt px-2"></i>${blog.date}
                                    </li>
                                    <li class="pr-5">
                                        <span>by Jonny</span>
                                    </li>
                                    <li>
                                        <i class="fa fa-comment px-1" aria-hidden="true"></i>5 comments
                                    </li>
                                </ul>
                            </div>
                            <div class="py-3">
                                <img class="w-full" src="${blog.image}" alt="">
                            </div>
                            <div class="">
                                <span class="text-sm">
                                    ${blog.details}
                                </span>
                            </div>
                        </div>
                        <!-- End Post Blog  -->
                        <div class="py-5 col-span-10">
                            <div class="text-xl font-medium uppercase">
                                <span>posts comment</span>
                            </div>
                            <!-- End Post Coment  -->
                            <div class="py-3">
                                <div>
                                    <span class="text-sm text-gray-400"><i class="fa fa-calendar px-1" aria-hidden="true"></i>August 27, 2020</span>
                                </div>
                                <div>
                                    <span class="font-medium">By Jonh Smith</span>
                                </div>
                                <div>
                                    <span>Well how fantastic do I feel now. Awesome to say the least. The customer service was outstanding, being on the larger side I am very self conscious, your team of beautiful kind-hearted ladies made me feel very special. I actually found two wonderful outfits and couldn't be any happier.</span>
                                </div>
                            </div>
                            <!-- End Comment  -->
                            <div class="py-3">
                                <div>
                                    <span class="text-sm text-gray-400"><i class="fa fa-calendar px-1" aria-hidden="true"></i>August 27, 2020</span>
                                </div>
                                <div>
                                    <span class="font-medium">By Junii Ana</span>
                                </div>
                                <div>
                                    <span>Well how fantastic do I feel now. Awesome to say the least. The customer service was outstanding, being on the larger side I am very self conscious, your team of beautiful kind-hearted ladies made me feel very special. I actually found two wonderful outfits and couldn't be any happier.</span>
                                </div>
                            </div>
                            <!-- End Comment  -->
                        </div>
                        <div>
                            <div class="text-xl font-medium uppercase">
                                <span>Leave Your Comment</span>
                            </div>
                            <form class="grid grid-cols-2 gap-5 py-3" id="form-add">
                                <div class="col-span-1">
                                    <input type="text" name="" id="name-u" placeholder="Name" class="w-full p-3 bg-gray-100" style="outline: none;">
                                </div>
                                <div class="col-span-1">
                                    <input type="text" name="" id="email-u" placeholder="Email" class="w-full p-3 bg-gray-100" style="outline: none;">
                                </div>
                                <div class="col-span-2">
                                    <textarea name="" id="message" cols="30" placeholder="Message" rows="10" class="w-full p-3 bg-gray-100" style="outline: none;"></textarea>
                                </div>
                                <div>
                                    <input value="submit" style="outline:none" type="submit"class="py-2 px-5 bg-green-400 uppercase text-white font-medium rounded hover:bg-gray-900">
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- End Post  -->
                    <div class="col-span-2  grid grid-cols-2 gap-5">
                        <div class="col-span-2">
                            <div class="">
                                <div class="text-xl font-medium uppercase border-b border-black">
                                    <span>popurlar tags</span>
                                </div>
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
    },
    afterRender() {
        $('#form-add').addEventListener('submit', async(e) => {
            e.preventDefault();
            let validateStatus = true
            const name = JQuery('#name-u');
            const email = JQuery('#email-u');
            const message = JQuery('#message');
            let nameValidate = { status: true, message: '' }
            let emailValidate = { status: true, message: '' }
            let messageValidate = { status: true, message: '' }
            if (!name.val() || name.val().length < 3) {
                nameValidate = { status: false, message: 'Tiêu dề tối thiểu 3 kí tự' }
            }
            if (!email.val() || email.val().length < 3) {
                emailValidate = { status: false, message: 'Email viết cho chuẩn vào' }
            }
            if (!message.val() || message.val().length < 3) {
                messageValidate = { status: false, message: 'Ghi gì cũng được miễn là phải ghi' }
            }
            validateStatus = validation(name, nameValidate)
            validateStatus = validation(email, emailValidate)
            validateStatus = validation(message, messageValidate)
            if (!validateStatus) {
                return false
            }
            // End validate 
            // const category = {
            //     id: Math.random().toString(36).substr(2, 9),
            //     name: $('#cate-name').value,
            // }
            // CategoryAPI.addCategory(category);
            // alert("Thêm Thành Công");
            // window.location.href = '/#/admin-list-category';
        })
    }
}
export default BlogPostPage;