const input = document.querySelector("#checkbox")
const svg = document.querySelector("svg")

input.addEventListener("click", () => {
    input.checked ? svg.style.fill = "var(--turnon)" : svg.style.fill = "var(--turnoff)"
})