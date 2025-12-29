const products  = [{
    id: 1, 
    name: 'باقة كب كيك بالورد',
    image: 'images/flowers-kek.jpg',
    price: 120
},{
    id:2,
    name: 'شوكولاتة بالورد',
    image: 'images/flowers-with-chocolate.jpg',
    price: 90
}, {
    id: 3,
    name: 'كاسات بالشوكولاتة',
    image: 'images/kap-chocolate.jpg',
    price: 100
}, {
    id: 4,
    name: 'بسبوسة جالكسي',
    image: 'images/sweet.jpg',
    price: 60
}, {
    id: 5,
    name: 'ميني تارت',
    image: 'images/tart.jpg',
    price: 110
}];

let productHTML = ``;

products.forEach((product) => {
    productHTML += `
            <div class="product1">
                <img src="${product.image}" alt="flower cake" width="150px" height="150px">
                <p class="text">${product.name}</p>
                <p class="price">${product.price} SAR</p>
                <button class="add add-js add-to-cart" data-product-name="${product.name}">اضف الى السلة +</button>
            </div>
    `;
});

document.querySelector('.js-products').innerHTML = productHTML;

document.querySelectorAll('.add-js').forEach((button) => {
    button.addEventListener('click', () => {
       const productName = button.dataset.productName;

        let matching;
        cart.forEach((item) => {
            if(productName === item.productName) {
                matching = item;
            }
            });
            if (matching) {
                matching.quantity += 1;
            }
            else {
                cart.push({
            productName: productName,
            quantity: 1
        });
            }

        let totalQuantity = 0;
        cart.forEach((item) => {
            totalQuantity += item.quantity;
        });

        document.querySelector('.js-counter').innerHTML = totalQuantity;
        
        console.log(totalQuantity);
        console.log(cart);
    });
});

// add to cart 
const cart = [

]