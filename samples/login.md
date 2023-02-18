const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const id = params.id;
const product = list[id];
if (product === undefined) {
  document.write("Product not found");
} else {
  document.write(`
        <h1 id="title">${product.name}</h1>
        <div class="d-flex justify-content-between">
            <img id="product-img" src="${product.image}" alt="${product.name}">
            <div class="summary">
                <p id="price" class="fs-3">${product.price}đ</p>
                <p>${product.description}</p>
                <button>Thêm vào giỏ hàng</button>
            </div>
        </div>
      `);
}