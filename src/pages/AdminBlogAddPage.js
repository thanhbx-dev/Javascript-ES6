import NavLeft from '../components/NavLeft.js';
import NavTop from '../components/NavTop.js';
import { reRender, $ } from '../unlti.js';
import firebase from '../firebase';
import BlogAPI from '../api/blogAPI.js';
import JQuery from 'jquery'
import validation from '../helpers/validation.js'

const AdminBlogAddPage = {
    async render() {
        window.scrollTo(0, 0);
        try {
            return /*html*/ `
        ${NavLeft.render()}
            <div class="col-span-8 bg-gray-50">
                ${NavTop.render()}
                <main class="p-4">
                    <div class="flex justify-between">
                        <div>
                            <h1 class="text-2xl">Add Blog</h1>
                        </div>
                    </div>
                    <form action="" id="form-add">
                        <div class="grid grid-cols-8 gap-5 py-2">
                            <div class="col-span-4">
                                <div class="py-2 form-group">
                                    <div class="py-2 font-medium text-black">
                                        <label for="blog-title">Name <span class="text-red-500">(*)</span></label>
                                    </div>
                                    <div>
                                        <input 
                                        placeholder="Blog Title" 
                                        type="text" 
                                        id="blog-title" 
                                        name="nameblog" 
                                        class="p-2 w-full border rounded hover:border-blue-300" 
                                        style="outline: none;">
                                    </div>
                                    <small></small>
                                </div>
                                <!-- End Input  -->
                                <div class="py-2 form-group">
                                    <div class="py-2 font-medium text-black">
                                        <label for="blog-details">Details <span class="text-red-500">(*)</span></label>
                                    </div>
                                    <div>
                                        <textarea 
                                        placeholder="Blog Details" 
                                        name="detail" 
                                        id="blog-details" 
                                        cols="30" rows="3" 
                                        class="p-2 w-full border  rounded hover:border-blue-300" 
                                        style="outline: none;">
                                        </textarea>
                                    </div>
                                    <small></small>
                                </div>
                                <!-- End Input  -->
                            </div>
                            <!-- End Col-4-1  -->
                            <div class="col-span-4">
                                <div class="form-group">
                                    <div class="py-2 font-medium text-black">
                                        <label for="blog-images">Image <span class="text-red-500">(*)</span></label>
                                    </div>
                                    <div>
                                        <input 
                                        type="file" id="blog-images" 
                                        name="image" 
                                        class="p-2 w-full border  rounded hover:border-blue-300" 
                                        style="outline: none;">
                                    </div>
                                    <small></small>
                                </div>
                                <!-- End Input  -->
                                <div class="py-2 form-group">
                                    <div class="py-2 font-medium text-black">
                                        <label for="blog-title">Create at<span class="text-red-500">(*)</span></label>
                                    </div>
                                    <div>
                                        <input 
                                        placeholder="Blog Title" 
                                        type="date" 
                                        id="blog-date" 
                                        name="dateblog" 
                                        class="p-2 w-full border  rounded hover:border-blue-300" 
                                        style="outline: none;">
                                    </div>
                                    <small></small>
                                </div>
                                <!-- End Input  -->
                                <div class="py-2">
                                    <div>
                                        <button 
                                            type="submit" 
                                            name="" 
                                            id="button-submit"
                                            class="hover:bg-blue-600 p-2 bg-blue-500 text-white rounded hover:border-blue-300" 
                                            style="outline: none;"
                                        >Submit
                                        </button>
                                    </div>
                                </div>
                                <!-- End Input  -->
                            </div>
                            <!-- End Col-4-2  -->
                        </div>
                    </form>
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
                        `
        } catch (error) {
            console.log('error');
        }
    },
    afterRender() {
        $('#form-add').addEventListener('submit', async(e) => {
            e.preventDefault();

            let validateStatus = true
            const title = JQuery('#blog-title');
            const details = JQuery('#blog-details');
            const image = JQuery('#blog-images');
            const date = JQuery('#blog-date');

            let titleValidate = { status: true, message: '' }
            let detailsValidate = { status: true, message: '' }
            let imageValidate = { status: true, message: '' }
            let dateValidate = { status: true, message: '' }

            // Validate required vs min length
            if (!title.val() || title.val().length < 3) {
                titleValidate = { status: false, message: 'Tiêu dề tối thiểu 3 kí tự' }
            }

            //Details
            if (!details.val() || details.val().length < 50) {
                detailsValidate = { status: false, message: 'Chi tiết 50 kí tự' }
            }
            //Image
            if (!image.prop('files')[0]) {
                imageValidate = { status: false, message: 'Ảnh không được để trống' }
            }
            //Date
            if (!date.val()) {
                dateValidate = { status: false, message: 'Phải chọn ngày' }
            }

            validateStatus = validation(title, titleValidate)
            validateStatus = validation(details, detailsValidate)
            validateStatus = validation(image, imageValidate)
            validateStatus = validation(date, dateValidate)


            if (!validateStatus) {
                return false
            }

            const blogImage = $('#blog-images').files[0];
            // console.log(productImage);
            let storageRef = firebase.storage().ref(`images/${blogImage.name}`);
            $('#button-submit').classList.add("animate-spin");
            await storageRef.put(blogImage).then(function() {
                // console.log('Success');
                storageRef.getDownloadURL().then((url) => {
                    const blog = {
                            id: Math.random().toString(36).substr(2, 9),
                            title: $('#blog-title').value,
                            image: url,
                            details: $('#blog-details').value,
                            date: $('#blog-date').value
                        }
                        // console.log(product);
                    BlogAPI.addBlog(blog);
                    $('#button-submit').classList.remove("animate-spin");
                    window.location.href = '/#/admin-list-blog';
                })
            });
        })
    }
}

export default AdminBlogAddPage;