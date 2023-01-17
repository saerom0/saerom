//햄버거 버튼
const btn_call = document.querySelector('.btn-call');
const mob_menu = document.querySelector('.side-menu');

btn_call.onclick = (e) => {
	e.preventDefault();
	btn_call.classList.toggle('on');
	mob_menu.classList.toggle('on');
};

//visual영역
const visual = document.querySelector('#visual');
const panels = visual.querySelectorAll('.panel li');
const vs_btns = visual.querySelectorAll('.vs-btns li');
const len = panels.length - 1;
const interval = 4000;
let vs_num = 0;
let timer = null;

startRolling();

vs_btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		activation(idx);
	});
});

//버튼 , 패널 활성화함수
function activation(index) {
	for (const el of panels) el.classList.remove('on');
	for (const el of vs_btns) el.classList.remove('on');
	panels[index].classList.add('on');
	vs_btns[index].classList.add('on');
	vs_num = index;
}

//롤링함수
function rolling() {
	vs_num < len ? vs_num++ : (vs_num = 0);
	activation(vs_num);
}

//롤링 시작 함수
function startRolling() {
	activation(vs_num);
	timer = setInterval(rolling, interval);
}

// #banner 영역
const bn_btn = banner.querySelectorAll('#banner li');
const bn_div = banner.querySelector('#banner section');

bn_btn.forEach((el, idx) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();

		let isOn = el.classList.contains('on');
		if (isOn) return;

		activate(idx);
	});
});

function activate(index) {
	new Anime(bn_div, {
		prop: 'margin-left',
		value: -100 * index + '%',
		duration: 1000,
	});
	for (let btn of bn_btn) btn.classList.remove('on');
	bn_btn[index].classList.add('on');
}

//offer 영역
const offer = document.querySelector('#offer');
const view_btn = offer.querySelectorAll('.pic a');
const pic = offer.querySelector('.pic');

view_btn.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		pic.classList.toggle('on');
	});
});

// //promo영역
// const promo = document.querySelector('.promo-text');
// const promo_text = promo.innerText;
// let tags1 = '';
// let n = 1;
// for (const el of promo_text) {
// 	tags1 += `<span style='transition-delay:${0.3 * n}s'>${el}</span>`;
// 	// console.log(tags1);
// 	n += 1;
// }
// promo.innerHTML = tags1;
