const header = document.querySelector("#header");
const visual = document.querySelector("#visual");
const middle = document.querySelector("#middle_menu");
const banner = document.querySelector("#banner");

// swiper 사용
// const slider_ul = visual.querySelector(".main_bg");
// const bg_btn = visual.querySelectorAll(".bg_btn li");

const tab_ul = middle.querySelector("#tab_btn ul");
const tab_btn = middle.querySelectorAll("#tab_btn li");
const tab_div = middle.querySelectorAll("#tab_btn div");

const bn_btn = banner.querySelectorAll("#banner li");
const bn_div = banner.querySelectorAll("#banner div");

// #visual 영역
// bg_btn.forEach((el, idx) => {
//     el.addEventListener("click", e => {
//         e.preventDefault();

//         let isOn = el.classList.contains("on");
//         if (isOn) return;

//         activation(idx);
//     })
// });

// function activation(index) {
//     new Anim(slider_ul, {
//         prop: "margin-left",
//         value: -100 * index + "%",
//         duration: 1000,
//     });
//     for (let btn of bg_btn) { btn.classList.remove("on"); }
//     bg_btn[index].classList.add("on");

// }

// #middle-menu영역 - 탭메뉴
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

// #banner 영역
bn_btn.forEach((el, idx) => {
    el.addEventListener("click", e => {
        e.preventDefault();

        let isOn = el.classList.contains("on");
        if (isOn) return;

        activation(idx);
    })
});

function activation(index) {
    new Anim(bn_div, {
        prop: "margin-left",
        value: -100 * index + "%",
        duration: 1000,
    });
    for (let btn of bn_btn) btn.classList.remove("on");
    bn_btn[index].classList.add("on");

}

//visual swiper
//swiper를 이쪽으로 옮기면 실행이 안됨