//햄버거 버튼
const btn_call = document.querySelector('.btn_call');
const mob_menu = document.querySelector('.mob_menu');

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

//로딩시 startRolling함수 호출해서 패널 자동롤링 시작
startRolling();

//각 버튼 클릭시 활성화 함수실행 및 stopRoliing으로 롤링기능 정지
vs_btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		activation(idx);
		stopRolling();
	});
});

//버튼 , 패널 활성화함수
function activation(index) {
	//인수로 전달받은 버튼과 패널만 활성화
	for (const el of panels) el.classList.remove('on');
	for (const el of vs_btns) el.classList.remove('on');
	panels[index].classList.add('on');
	vs_btns[index].classList.add('on');
	//인수로 전달받은 순번으로 전역 활성화 순번 갱신
	vs_num = index;
	//패널 활성화시 진행바의 넓이값을 0%로 초기화
	// bar.style.width = '0%';
}

//롤링함수
function rolling() {
	vs_num < len ? vs_num++ : (vs_num = 0);
	//활성화 순번에 맞게 패널, 버튼 활성화
	activation(vs_num);
	//진행바 모션 시작
}

//롤링 시작 함수
function startRolling() {
	//활성화 함수 호출하면서
	//다시 롤링시작
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
