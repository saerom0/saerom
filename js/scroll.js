const pages = document.querySelectorAll('.page');
const lis = document.querySelectorAll('.quick li');
let posArr = [];
let base = -window.innerHeight / 1.5;
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

	//header - middle -h3 - banner - offer - promo - track
	// if (scroll >= posArr[1]) {
	// 	pages[2].classList.add('on');
	// } else {
	// 	pages[2].classList.remove('on');
	// }
	if (scroll >= posArr[1] + base) {
		pages[0].classList.add('on');
		pages[1].classList.add('on');
	} else {
		pages[0].classList.remove('on');
		pages[1].classList.remove('on');
	}
	//middle
	if (scroll >= posArr[1]) {
		pages[1].classList.add('on');
		pages[2].classList.add('on');
	} else {
		pages[1].classList.remove('on');
		pages[2].classList.remove('on');
	}
	//track
	if (scroll >= posArr[6] + base) {
		counter('.record-1', 31, 1500);
		counter('.record-2', 24, 1500);
		counter('.record-3', 100, 1500);
		counter('.record-4', 9700, 1500);
	}
	//promo
	if (scroll >= posArr[5] + base) {
		pages[5].classList.add('on');
	} else {
		pages[5].classList.remove('on');
	}
	console.log(posArr);
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

// window.addEventListener("scroll", () => {
//     let scroll = window.scrollY || window.pageYOffset;

//     pages.forEach((el, index) => {
//         if (scroll >= posArr[index] + base) {
//             // for (let el of lis) el.classList.remove("on");
//             // lis[index].classList.add("on");

//             //모든 li, section을 비활성화
//             lis.forEach((el, index) => {
//                 el.classList.remove("on");
//                 pages[index].classList.remove("on");
//             })
//             //해당 순번의 li와 section을 활성화
//             lis[index].classList.add('on');
//             pages[index].classList.add("on");
//             // el.classList.add("on");
//         }
//     })

// })

// //ul li를 클릭하면 해당 순번의 section으로 이동
// //이쪽은 클릭으로 스크롤을 이동시키는 쪽
// lis.forEach((el, index) => {
//     el.addEventListener("click", (e) => {
//         new Anim(window, {
//             prop: "scroll",
//             value: posArr[index],
//             duration: 500,
//         });

//         active(lis, index);
//         //모든 버튼을 반복을 돌면서 on을 제거하여 비활성화
//         for (let el of lis) el.classList.remove("on");
//         //클릭한 버튼만 on을 추가하여 활성화
//         el.classList.add("on");
//         // e.currentTarget.classList.add("on");

//     })
// })

// function active(arr, index) {
//     for (let el of arr) el.classList.remove("on");
//     arr[index].classList.add("on");

function getPos() {
	for (let el of pages) posArr.push(el.offsetTop);
}
