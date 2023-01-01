const header = document.querySelector('#header');
const visual = document.querySelector('#visual');
const middle = document.querySelector('#middle_menu');
const banner = document.querySelector('#banner');

//햄버거 버튼
const btn_call = header.querySelector('.btn_call');
const mob_menu = header.querySelector('.mob_menu');

btn_call.onclick = (e) => {
	e.preventDefault();
	btn_call.classList.toggle('on');
	mob_menu.classList.toggle('on');
};

//middle_menu영역
const txt = document.querySelector('.txt');
const txt_content = txt.innerText;
let tags2 = '';

for (let el of txt_content) tags2 += `<span>${el}</span>`;
txt.innerHTML = tags2;

// #banner 영역
const bn_btn = banner.querySelectorAll('#banner li');
const bn_div = banner.querySelector('#banner section');

bn_btn.forEach((el, idx) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();

		let isOn = el.classList.contains('on');
		if (isOn) return;

		activation(idx);
	});
});

function activation(index) {
	new Anim(bn_div, {
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
// const here = offer.querySelectorAll(".here");

view_btn.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		pic.classList.toggle('on');
	});
});

//promo영역
const promo = document.querySelector('.promo_text');
const promo_text = promo.innerText;
let tags1 = '';
let n = 1;
for (const el of promo_text) {
	tags1 += `<span style='transition-delay:${0.3 * n}s'>${el}</span>`;
	console.log(tags1);
	n += 1;
}
promo.innerHTML = tags1;

//visual swiper
//swiper를 이쪽으로 옮기면 실행이 안됨
