document.querySelectorAll("button[data-redirect='shop']").forEach((button) => {
    button.addEventListener("click", () => {
        window.location.href = "/pages/shop.html";
    })
})