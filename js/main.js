//about page
const tab_btn = document.querySelectorAll('#service_type li');
const tab_contents = document.querySelectorAll('#service_type article');

tab_btn.forEach((el, index) => {
	el.addEventListener('click', (e) => {
		let isOn = e.currentTarget.classList.contains('on');
		if (isOn) return;

		act(tab_btn, index);
		act(tab_contents, index);
	});
});

function act(arr, index) {
	for (let el of arr) el.classList.remove('on');
	arr[index].classList.add('on');
}

//모바일버전 햄버거 버튼
const btn_call = document.querySelector('.btn-call');
const mob_menu = document.querySelector('.side-menu');

btn_call.onclick = (e) => {
	e.preventDefault();
	btn_call.classList.toggle('on');
	mob_menu.classList.toggle('on');
};

//main page
//visual영역
const visual = document.querySelector('#visual');
const panels = visual.querySelectorAll('.panel li');
const vs_btns = visual.querySelectorAll('.vs-btns li');

console.log(panels);
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
const banner = document.querySelector('#banner');
const bn_btn = banner.querySelectorAll('li');
const bn_div = banner.querySelector('section');

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
