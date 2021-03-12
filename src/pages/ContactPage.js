const ContactPage = {
    render() {
        window.scrollTo(0, 0);
        try {
            return /*html*/ `
        <div class="page-content">
            <div class="bg-gray-100">
                <div class="container mx-auto px-5">
                    <div class="link py-2">
                        <ul class="flex">
                            <li class="pr-5 hover:text-green-400 "><a href="/"><span><i class="fa fa-home" aria-hidden="true"></i> Home</span></a></li>
                            <li><span>&rsaquo;</span></li>
                            <li class="px-5 text-gray-500"><span>Contact</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            <!-- End Link  -->
            <article class="py-5">
            <aside clas="bg-gray-100">
                <div class="relative overflow-hidden mySlides fade">
                    <img class="" src="https://big-skins.com/frontend/foxic-html-demo/images/pages/contact-bg.webp" alt="">
                    <div class="absolute left-16 top-16 text-center items-center grid grid-cols-2">
                        <div class="col-span-1">
                            <div class="text-left pb-5">
                                <span class="uppercase text-5xl font-bold">contact us</span>
                            </div>
                            <div class="text-left ">
                                <div class="pb-5">
                                    <span class="">
                                    No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
                                     but because those who do not know how to pursue pleasure rationally
                                    </span>
                                </div>
                                <div class="pb-5">
                                    <span class="">
                                    Have a great question, comment or concern? Simply fill out the form below and click Submit.
                                     We will respond to all inquiries within 48 business hours.Check out our
                                    </span>
                                </div>
                                <div class="font-medium">
                                    <span>
                                        <i>
                                            <small>
                                            You can never take too much care over the choice of your shoes. Too many women think that they are unimportant, 
                                            but the real proof of an elegant woman is what is on her feet.
                                            </small>
                                        </i>
                                    </span>
                                </div>
                                <div class="text-right py-5 text-xl font-medium">
                                <span>
                                <i>
                                    <small>
                                    - Mr.Thanh Be -
                                    </small>
                                </i>
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <!-- End Silde  -->
            <div class="container mx-auto p-5">
                <div class="text-center text-2xl font-medium">
                    <span>Our Information</span>
                </div>
                <div class="text-sm text-gray-400 text-center py-5">
                    <span>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally in which toil and pain</span>
                </div>
                <div class="grid grid-cols-12 gap-5 py-2">
                    <div class="col-span-4 flex items-center justify-center boder-r border-gray-200">
                        <div class="px-2">
                            <span class="text-3xl"><i class="fa fa-location-arrow fa-xl" aria-hidden="true"></i></span>
                        </div>
                        <div class="px-2">
                            <div>
                                <span class="font-medium">Address :</span>
                            </div>
                            <div>
                                <span>1 Trịnh Văn Bô,Nam Từ Liêm,Hà Nội</span>
                            </div>
                        </div>
                    </div>
                    <!-- End Add  -->
                    <div class="col-span-4 flex items-center justify-center">
                        <div class="px-2">
                            <span class="text-3xl"><i class="fa fa-phone" aria-hidden="true"></i></span>
                        </div>
                        <div class="px-2">
                            <div>
                                <span class="font-medium">Phone :</span>
                            </div>
                            <div>
                                <span>0399.372.610</span>
                            </div>
                        </div>
                    </div>
                    <!-- End Phone  -->
                    <div class="col-span-4 flex items-center justify-center">
                        <div class="px-2">
                            <span class="text-3xl"><i class="fa fa-hourglass" aria-hidden="true"></i></span>
                        </div>
                        <div class="px-2">
                            <div>
                                <span class="font-medium">Hour :</span>
                            </div>
                            <div>
                                <span>8AM - 22PM</span>
                            </div>
                        </div>
                    </div>
                    <!-- End Hour  -->
                </div>
                <div class="grid grid-cols-2 gap-5 py-5">
                    <div class="col-span-1">
                        <div>
                            <span class="text-3xl font-medium px-2">Get In Touch With Us</span>
                        </div>
                        <div class="col-span-1 grid grid-cols-2 gap-5 px-2 py-5">
                            <div class="col-span-1">
                                <input class="p-2 bg-gray-100 w-full" style="outline: none;" type="text" name="" id="" placeholder="Name">
                            </div>
                            <div class="col-span-1">
                                <input class="p-2 bg-gray-100 w-full" style="outline: none;" type="text" name="" id="" placeholder="Last Name">
                            </div>
                            <div class="col-span-1">
                                <input class="p-2 bg-gray-100 w-full" style="outline: none;" type="text" name="" id="" placeholder="Email">
                            </div>
                            <div class="col-span-1">
                                <input class="p-2 bg-gray-100 w-full" style="outline: none;" type="text" name="" id="" placeholder="Phone">
                            </div>
                            <div class="col-span-2">
                                <textarea class="w-full bg-gray-100 p-2" style="outline: none;" name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                            </div>
                            <div>
                                <button class="py-2 px-5 bg-green-400 uppercase text-white font-medium rounded hover:bg-gray-900">Send message</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 py-5">
                        <iframe class="h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8638558814037!2d105.74459841440749!3d21.038132792835356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1611936014235!5m2!1svi!2s"
                            width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
            <div class="bg-green-400 p-5">
                <div class="text-center text-white">
                    <div class="text-3xl">
                        <span>Newsletter</span>
                    </div>
                    <div class="text-xl py-3">
                        <span>Subscribe to our weekly newsletter.</span>
                    </div>
                </div>
            </div>
        </article>
                `
        } catch (error) {
            console.log('error');
        }
    }
}
export default ContactPage;