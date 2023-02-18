const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const list = [
  {
    id: 0,
    name: "Gạo nếp 1kg",
    price: 40000,
    type: "rice",
    image: "../assets/gạo nếp.jpg",
    stripeId: "price_1MXz4HIUvPZxN8XgPuXU7kJF",
  },
  {
    id: 1,
    name: "Lá dong",
    price: 20000,
    type: "leaves",
    image: "../assets/lá dong.jpg",
    stripeId: "price_1MXzDUIUvPZxN8XgmdVfY2Vk",
  },
  {
    id: 2,
    name: "Thịt heo 500g",
    price: 89000,
    type: "meat",
    image: "../assets/thịt heo.png",
    stripeId: "price_1MaAbhIUvPZxN8XgFfQ4lxDz",
  },
  {
    id: 3,
    name: "Gạo ST25 5kg",
    price: 190000,
    type: "rice",
    image: "../assets/gạo ST25.jpg",
    stripeId: "price_1MaAewIUvPZxN8XgPTYqLuOA",
  },
  {
    id: 4,
    name: "Đậu xanh không vỏ 300g",
    price: 19000,
    type: "others",
    image: "../assets/đậu xanh không vỏ.jpg",
    stripeId: "price_1MaAfUIUvPZxN8Xgxqvcu8Ns",
  },
  {
    id: 5,
    name: "1 vỉ trứng gà",
    price: 60000,
    type: "others",
    image: "../assets/trứng.png",
    stripeId: "price_1MaAfxIUvPZxN8XgCphniPs5",
  },
  {
    id: 6,
    name: "Gà nguyên con",
    price: 37900,
    type: "meat",
    image: "../assets/thịt gà.jpg",
    stripeId: "price_1MaAgOIUvPZxN8XgpQH04S3x",
  },
  {
    id: 7,
    name: "Củ kiệu sơ chế",
    price: 85000,
    type: "others",
    image: "../assets/củ kiệu sơ chế.jpg",
    stripeId: "price_1MaAgpIUvPZxN8XgmUtsnLMR",
  },
  {
    id: 8,
    name: "Chả lụa 500g",
    price: 90000,
    type: "cha",
    image: "../assets/chả lụa.jpg",
    stripeId: "price_1MaAhMIUvPZxN8XgUOKfJtFZ",
  },
  {
    id: 9,
    name: "Nước mắm Nam Ngư",
    price: 30000,
    type: "spice",
    image: "../assets/nước mắm.jpg",
    stripeId: "price_1MaAhhIUvPZxN8XgnAkzlKsg",
  },
  {
    id: 10,
    name: "Lá chuối 1kg",
    price: 25000,
    type: "leaves",
    image: "../assets/lá chuối.jpg",
    stripeId: "price_1MaAiBIUvPZxN8XgpgatlR5H",
  },
  {
    id: 11,
    name: "Chả lụa bì 200g",
    price: 49000,
    type: "cha",
    image: "../assets/chả lụa bì.jpg",
    stripeId: "price_1MaAiYIUvPZxN8XgCqHPB30D",
  },
];

const id = params.id;
const product = list[id];
const productImage = document.querySelector(".prod-imges");
const productName = document.querySelector(".prod-info");
const productPrice = document.querySelector("#product-price");
if (product === undefined) {
  document.write("Product not found");
} else {
  productImage.insertAdjacentHTML(
    "afterbegin",
    `<img class="main-img" src="${product.image}" alt="" />`
  );
  productName.insertAdjacentHTML(
    "afterbegin",
    `<h1 class="prod-name text-uppercase fw-semibold text-black m-0">${product.name}</h1>`
  );
  productPrice.insertAdjacentHTML(
    "afterbegin",
    `<h3 class="prod-price text-black">${product.price}đ</h3>
  `
  );
}

/**
 * Chức năng thêm vào giỏ hàng
 */
const muaBtns = document.querySelectorAll("#product-detail .prod-info button");
// var giohang = document.getElementById("gio-hang");
const giohang = document.querySelector("#shopping-cart");
/**
 * Duyệt qua từng phần tử ở trong muaBtns, mỗi lần duyệt thì đem
 * button tương ứng đặt vào biến btn (do chúng ta đặt tên)
 */
muaBtns.forEach(function (btn) {
  btn.onclick = function (e) {
    addToCart(id);
  };
});
