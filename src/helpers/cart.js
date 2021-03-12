const add = (product) => {
    let CART = JSON.parse(localStorage.getItem('cart')) || []
    let newCart = {...product, quantity: 1 }
    if (CART && CART.length > 0) {
        const checkExist = CART.find((item) => item.id == newCart.id)
        if (checkExist) {
            newCart = {...product, quantity: checkExist.quantity++ }
            CART = CART.map((item) => {
                if (item.id == checkExist.id) {
                    return {...product, quantity: checkExist.quantity++ }
                }
                return item
            })
        } else {
            CART = [...CART, newCart]
        }
        localStorage.setItem('cart', JSON.stringify(CART))
    } else {
        CART = [newCart]
        localStorage.setItem('cart', JSON.stringify(CART))
    }
    return CART
}

const all = () => {
    return JSON.parse(localStorage.getItem('cart')) || []
}

const update = (id, quantity) => {
    let CART = JSON.parse(localStorage.getItem('cart')) || [];
    CART = CART.filter((item) => {
        if (quantity == 0) {
            return item.id != id
        }
        return {...item, quantity: quantity }
    });
    localStorage.setItem('cart', JSON.stringify(CART))
    return CART
}

const remove = (id) => {
    let CART = JSON.parse(localStorage.getItem('cart')) || []
    CART = CART.filter((item) => item.id != id)
    const question = confirm('Bạn có chắc chắn muốn xóa không ?');
    if (question) {
        localStorage.removeItem('cart', JSON.stringify(CART))
        alert("Xóa thành công !");
        return CART
    }
}

export { add, all, update, remove }