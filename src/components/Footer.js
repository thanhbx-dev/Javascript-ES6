class Footer {
    render() {
        return /*html*/ `<div class="container mx-auto px-5 py-5 ">
        <div class="grid grid-cols-12 gap-5 ">
            <div class="col-span-3 ">
                <div class="pb-3 ">
                    <img src="./src/images/logoNew.png " alt="Hussky " class="w-20 ">
                </div>
                <!-- End Logo Footer  -->
                <div>
                    <ul>
                        <li>
                            <span>E-mail : <a href="# " class="hover:text-green-400 ">thanhbxph11944@fpt.edu.vn</a></span>
                        </li>
                        <li>
                            <span>Hours: 10:00 - 18:00, Mon - Fri</span>
                        </li>
                    </ul>
                </div>
                <!-- End Contact  -->
                <div>
                    <ul class="flex items-center ">
                        <li class="pr-3 hover:text-green-400 ">
                            <a href="# " class=" "><i class="fab fa-facebook-f "></i></a>
                        </li>
                        <li class="pr-3 hover:text-green-400 ">
                            <a href="# " class="hover:text-green-400 "><i class="fab fa-youtube "></i></a>
                        </li>
                        <li class="pr-3 hover:text-green-400 ">
                            <a href="# " class="hover:text-green-400 "><i class="fab fa-instagram "></i></a>
                        </li>
                        <li class="pr-3 hover:text-green-400 ">
                            <a href="# " class="hover:text-green-400 "><i class="fab fa-google-plus-g "></i></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- End Col-1 Footer  -->
            <div class="col-span-3 ">
                <div class="text-xl pb-5 font-medium ">
                    <span>Information</span>
                </div>
                <div class=" ">
                    <nav>
                        <ul>
                            <li class="hover:text-green-400 pb-2 ">
                                <a href="# ">About Us</a>
                            </li>
                            <li class="hover:text-green-400 pb-2 ">
                                <a href="# ">Contact Us</a>
                            </li>
                            <li class="hover:text-green-400 pb-2 ">
                                <a href="# ">Terms & Conditions</a>
                            </li>
                            <li class="hover:text-green-400 pb-2 ">
                                <a href="# ">Returns & Exchanges</a>
                            </li>
                            <li class="hover:text-green-400 pb-2 ">
                                <a href="# ">Shipping & Delivery</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- End Col-2 Footer  -->
            <div class="col-span-3 ">
                <div class="text-xl pb-5 font-medium ">
                    <span>Account details</span>
                </div>
                <div class=" ">
                    <nav>
                        <ul>
                            <li class="hover:text-green-400 pb-2 ">
                                <a href="# ">My Account</a>
                            </li>
                            <li class="hover:text-green-400 pb-2 ">
                                <a href="# ">View Cart</a>
                            </li>
                            <li class="hover:text-green-400 pb-2 ">
                                <a href="# ">My Wishlist</a>
                            </li>
                            <li class="hover:text-green-400 pb-2 ">
                                <a href="# ">Order Status</a>
                            </li>
                            <li class="hover:text-green-400 pb-2 ">
                                <a href="# ">Track My Order</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- End Col-3 Footer  -->
            <div class="col-span-3 ">
                <div class="text-xl pb-5 font-medium ">
                    <span>Safe payments</span>
                </div>
                <div class=" ">
                    <nav>
                        <ul class="flex items-center ">
                            <li class="hover:text-green-400 pb-2 pr-3 ">
                                <a href="# "><i class="fab fa-google-pay fa-3x "></i></a>
                            </li>
                            <li class="hover:text-green-400 pb-2 pr-3 ">
                                <a href="# "><i class="fab fa-apple-pay fa-3x "></i></a>
                            </li>
                            <li class="hover:text-green-400 pb-2 pr-2 ">
                                <a href="# "><i class="fab fa-cc-visa fa-3x "></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- End Col-4 Footer  -->
        </div>
    </div>
    <div class="mx-auto bg-gray-100 p-3 text-center ">
        <span>HuskyLuxury ©2020 copyright</span>
    </div>
                        `
    }
}
export default Footer;