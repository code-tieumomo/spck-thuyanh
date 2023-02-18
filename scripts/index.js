if (localStorage.getItem("products") == null) {
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
    localStorage.setItem("products", JSON.stringify(list));
}

/**
 * LOADING OVERLAY
 */
// Xảy ra khi tất cả các tài nguyên trên trang load xong
window.addEventListener("load", function () {
    document.querySelector("#overlay")?.remove();
});

// AOS
AOS.init({
    duration: 700,
    offset: 50,
});

// Xảy ra khi HTML trên trang load xong
document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra đăng nhập
    if (localStorage.getItem("user") == null) {
        document.querySelector("#cart").remove();
    } else {
        // Nếu đã đăng nhập
        const user = JSON.parse(localStorage.getItem("user"));

        document.getElementById("nav-log")?.remove();
        if (document.querySelector("#cart img")) document.querySelector("#cart img").src = user.photoURL;
    }
});


/**
 * 
 * Chức năng tạo thông báo khi thêm vào giỏ hàng
 */

function addToCart(id) {
    let user = JSON.parse(localStorage.getItem("user"));
    const cartName = `cart-${user.uid}`;
    let cart = JSON.parse(localStorage.getItem(cartName)) || [];

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const index = cart.findIndex(function (item) {
        return item.id == id;
    });
    if (index < 0) cart.push({ id: id, quantity: 1 });
    else cart[index].quantity += 1;

    localStorage.setItem(cartName, JSON.stringify(cart));

    Toastify({
        text: "Đã thêm vào giỏ hàng",
        className: "info",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
}

/**
 * Chức năng lưu thông tin ở footer
 */
function submitForm(event) {
    event.preventDefault();
    const hoTen = document.getElementById("name");
    const email = document.getElementById("email");
    const comment = document.getElementById("comment");

    if (hoTen.value == "" || email.value == "" || comment.value == "") {
        Toastify({
            text: "Vui lòng nhập đầy đủ thông tin!",
            className: "info",
            style: {
                background: "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))",
            }
        }).showToast();
        return;
    }

    const customer = {
        hoTen: hoTen.value,
        email: email.value,
        comment: comment.value
    };

    const feedback = JSON.parse(localStorage.getItem("feedback")) || [];
    feedback.push(customer);
    localStorage.setItem("feedback", JSON.stringify(feedback));
    Toastify({
        text: "Cảm ơn bạn đã góp ý!",
        className: "info",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
    document.getElementById("myForm").reset();
}
