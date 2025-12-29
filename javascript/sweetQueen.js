
let list = document.querySelector('.js-list');
let container = document.querySelector('.container');
let close = document.querySelector('.ri-close-large-fill');

list.onclick = function () {
    container.classList.toggle("hide");
}
close.onclick = function () {
    container.classList.add("hide");
}

document.addEventListener('click', (e) => {
    if(!container.contains(e.target) && e.target !== list) {
        container.classList.add("hide");
    }
})

let user = document.querySelector('.ri-user-line');
let show = document.querySelector('.show');
user.onclick = function () {
  show.showModal();
}
show.addEventListener('click', () => {
    if(e.target === show)
        show.close();
})

// search 
let searching = document.querySelector('.material-icons');
let search = document.querySelector('.search1');
let closer = document.querySelector('.closer-search');

searching.onclick = function () {
    search.classList.toggle("search1");
}
closer.onclick = function () {
    search.classList.add("search1");
}

// open checkOut web

let shopping_cart = document.querySelector('.ri-shopping-cart-line');

counter.onclick = function () {
    location.href='http://127.0.0.1:5500/checkOut.html#';
}








