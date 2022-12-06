const header = document.querySelector("#header");
const visual = document.querySelector("#visual");

// const langBtn = header.querySelector(".lang a");
// const lang = header.querySelectorAll(".lang ul li");
// const currencyBtn = header.querySelector(".currency a");
// const currency = header.querySelectorAll(".currency ul li");

const ulSlider = visual.querySelector(".main-bg");
const sliders = visual.querySelectorAll(".main-bg li");
const ulBtn = visual.querySelector(".bg-btn");
const btns = visual.querySelectorAll(".bg-btn li");

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
