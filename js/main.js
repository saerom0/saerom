const header = document.querySelector("#header");
const visual = document.querySelector("#visual");
const middle = document.querySelector("#middle-menu");

const ulSlider = visual.querySelector(".main-bg");
const sliders = visual.querySelectorAll(".main-bg li");
const ulBtn = visual.querySelector(".bg-btn");
const btns = visual.querySelectorAll(".bg-btn li");


const tab_ul = middle.querySelector("#tabBtn ul");
const tab_btn = middle.querySelectorAll("#tabBtn li");
const tab_div = middle.querySelectorAll("#tabBtn div");



btns.forEach((el, idx) => {
    el.addEventListener("click", e => {
        e.preventDefault();

        let isOn = el.classList.contains("on");
        if (isOn) return;

        activation(idx);
    })
});

function activation(index) {
    new Anim(ulSlider, {
        prop: "margin-left",
        value: -100 * index + "%",
        duration: 1000,
    });
    for (let btn of btns) { btn.classList.remove("on"); }
    btns[index].classList.add("on");

}


tab_btn.forEach((el, idx) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();

        init(tab_btn, idx);
        init(tab_div, idx);
    })
})


function init(arr, idx) {
    for (let el of arr) el.classList.remove("on");
    arr[idx].classList.add("on");
}
