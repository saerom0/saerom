const header = document.querySelector("#header");
const visual = document.querySelector("#visual");
const middle = document.querySelector("#middle_menu");
const banner = document.querySelector("#banner");


//햄버거 버튼
const btn_call = document.querySelector(".btn_call");
const mob_menu = document.querySelector(".mob_menu");

btn_call.onclick = function (e) {
    e.preventDefault();
    btn_call.classList.toggle("on");
    menuMo.classList.toggle('on');
}


// swiper 사용
// const slider_ul = visual.querySelector(".main_bg");
// const bg_btn = visual.querySelectorAll(".bg_btn li");

// const tab_ul = middle.querySelector("#tab_btn ul");
// const tab_btn = middle.querySelectorAll("#tab_btn li");
// const tab_div = middle.querySelectorAll("#tab_btn div");

const bn_btn = banner.querySelectorAll("#banner li");
const bn_div = banner.querySelector("#banner section");


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

// tab_btn.forEach((el, idx) => {
//     el.addEventListener("click", (e) => {
//         e.preventDefault();

//         el.classList.toggle("on");//토글이 왜 적용이 안될까요?

//         init(tab_btn, idx);
//         init(tab_div, idx);
//     })
// })

// function init(arr, idx) {
//     for (let el of arr) el.classList.remove("on");
//     arr[idx].classList.add("on");
// }

// map 추가



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

//offer 영역
const offer = document.querySelector("#offer");
const view_btn = offer.querySelectorAll(".pic a");
const pic = offer.querySelector(".pic");
// const here = offer.querySelectorAll(".here");

view_btn.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        pic.classList.toggle("on");


    })
})













//visual swiper
//swiper를 이쪽으로 옮기면 실행이 안됨