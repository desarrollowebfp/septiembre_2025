const myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const myInput = document.querySelector("#myInput");

myInput.addEventListener("input", (ev) => {
    console.log(ev.target.value)
})