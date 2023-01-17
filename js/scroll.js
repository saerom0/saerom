const pages = document.querySelectorAll('.page');
const lis = document.querySelectorAll('.quick li');
let posArr = [];
let base = -window.innerHeight / 2;
const ontop = document.querySelector('.on-top');

getPos();
window.addEventListener('resize', getPos);

window.addEventListener('scroll', () => {
	let scroll = window.scrollY || window.pageYOffset;

	ontop.addEventListener('click', (e) => {
		e.preventDefault();
		new Anime(window, {
			prop: 'scroll',
			value: posArr[0],
			duration: 500,
		});
	});

	//header - middle - intro - banner - offer - promo - track
	if (scroll >= posArr[0] + 60) {
		pages[2].classList.add('on');
	} else {
		pages[2].classList.remove('on');
	}
	//middle
	if (scroll >= posArr[1]) {
		pages[1].classList.add('on');
		// pages[2].classList.add('on');
	} else {
		pages[1].classList.remove('on');
		// pages[2].classList.remove('on');
	}
	//promo
	if (scroll >= posArr[5] + base) {
		pages[5].classList.add('on');
		//track
		counter('.record-1', 31, 1500);
		counter('.record-2', 24, 1500);
		counter('.record-3', 100, 1500);
		counter('.record-4', 9700, 1500);
	} else {
		pages[5].classList.remove('on');
	}

	// console.log(posArr);
});

//track 카운터 함수
function counter(el, num, time) {
	const item = document.querySelector(el);
	let current_num = parseInt(item.innerText);
	if (num == current_num) {
		return;
	} else {
		let count_num = num - current_num;
		let interval = parseInt(time / count_num);

		let timer = setInterval(() => {
			current_num++;
			if (current_num == num) {
				clearInterval(timer);
			}
			item.innerText = current_num;
		}, interval);
	}
}

function getPos() {
	for (let el of pages) posArr.push(el.offsetTop);
}
