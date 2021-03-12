const NavTop = {
    render() {
        return /*html*/ `
                    <header class="p-4 items-center border-b border-gray-300 bg-white">
                        <div class="flex gap-8">
                            <nav>
                                <ul class="flex gap-5">
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="/#/contact">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                            <div>
                                <form action="" class="flex">
                                    <input type="text" name="" id="" placeholder="Search" style="outline: none;" class="bg-gray-100 text-md px-2">
                                    <button class="bg-gray-100 text-sm font-light px-2" style="outline: none;"><i class="fas fa-search"></i></button>
                                </form>
                            </div>
                            <!-- End Nav  -->
                        </div>
                    </header>
                      `
    }
}
export default NavTop;