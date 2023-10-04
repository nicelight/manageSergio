const btn = document.querySelector("#menu-btn");
const nav = document.querySelector("#menu");

console.log(btn)
console.log(nav)

btn.addEventListener("click", () => {
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
    // nav.classList.toggle("open");
    btn.classList.toggle("open");
});

