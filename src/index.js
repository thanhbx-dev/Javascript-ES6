import HomePage from './pages/Homepage.js';
import ProductsPage from './pages/ProductsPage.js';
import ProductDetails from './pages/ProductDetails.js';
import Error404Page from './pages/Error404Page.js';
import { parseRequestUrl, $ } from './unlti.js';
import BlogPage from './pages/BlogPage.js';
import ContactPage from './pages/ContactPage.js';
import BlogPostPage from './pages/BlogPostPage.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CategoryPage from './pages/CategoryPage.js';
import AdminPage from './pages/AdminPage.js';
import AdminProductPage from './pages/AdminProductPage.js';
import AdminProductAddPage from './pages/AdminProductAddPage.js';
import AdminCategoryPage from './pages/AdminCategoryPage.js';
import AdminCategoryAddPage from './pages/AdminCategoryAddPage.js';
import Cart from './pages/Cart.js';
import AdminProductEditPage from './pages/AdminProductEditPage.js';
import AboutPgae from './pages/AboutPage.js';
import AdminCategoryEdit from './pages/AdminCategoryEdit.js';
import AdminBlogAddPage from './pages/AdminBlogAddPage.js';
import AdminBlogPage from './pages/AdminBlogPage.js';
import AdminBlogEditPage from './pages/AdminBlogEditPage.js';
/*End Import*/
const routes = {
    '/': HomePage,
    '/product': ProductsPage,
    '/product/:id': ProductDetails,
    '/category/:id': CategoryPage,
    '/contact': ContactPage,
    '/about': AboutPgae,
    '/blog': BlogPage,
    '/blog-post/:id': BlogPostPage,
    '/cart': Cart,
    '/admin': AdminPage,
    '/admin-list-product': AdminProductPage,
    '/admin-add-product': AdminProductAddPage,
    '/admin-edit-product/:id': AdminProductEditPage,
    '/admin-list-category': AdminCategoryPage,
    '/admin-add-category': AdminCategoryAddPage,
    '/admin-edit-category/:id': AdminCategoryEdit,
    '/admin-list-blog': AdminBlogPage,
    '/admin-add-blog': AdminBlogAddPage,
    '/admin-edit-blog/:id': AdminBlogEditPage,
}

const router = async() => {
    const { resource, id } = parseRequestUrl();
    const parseUrl = (resource ? `/${resource}` : '/') +
        (id ? '/:id' : '');
    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    $('#header').innerHTML = await Header.render();
    $('#main-content').innerHTML = await page.render();
    // $('#footer').innerHTML = footer.render();
    await page.afterRender();
}
const scroll = $('#scroll button');
scroll.addEventListener('click', function() {
    window.scrollTo(0, 0);
})
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);