const body = document.querySelector('body');
const frame = document.querySelector('#list');
const loading = document.querySelector('.loading');
const input = document.querySelector('#search');
const btn_search = document.querySelector('.btn-search');
const btn_pic = document.querySelector('#search_box a');
console.log(btn_pic);
const base = 'https://www.flickr.com/services/rest/?';
const method_interest = 'flickr.interestingness.getList';
const method_search = 'flickr.photos.search';
const method_user = 'flickr.people.getPhotos';
const key = '1f6a8afb62dde6c9a4d9073dd46560aa';
const my_id = '197108414@N08';
const per_page = 30;

const url = `${base}method=${method_user}&api_key=${key}&per_page=${per_page}&user_id=${my_id}&format=json&nojsoncallback=1`;
callData(url);

btn_pic.addEventListener('click', (e) => {
	e.preventDefault();
	const url = `${base}method=${method_interest}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1`;
	callData(url);
});
//공백을 입력하여 검색 버튼을 누르면 에러 메세지 발생
btn_search.addEventListener('click', (e) => {
	let tag = input.value;
	tag = tag.trim();

	const url = `${base}method=${method_search}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&tags=${tag}&privacy_filter=1`;

	if (tag != '') {
		callData(url);
	} else {
		frame.innerHTML = '';
		frame.classList.remove('on');
		frame.style.height = 'auto';

		const errMsgs = frame.parentElement.querySelectorAll('p');
		if (errMsgs.length > 0) frame.parentElement.querySelector('p').remove();

		const errMeg = document.createElement('p');
		errMeg.append('검색어를 입력하세요');
		frame.parentElement.append(errMeg);
	}
});

//공백을 입력하여 엔터를 치면 에러 메세지 발생
input.addEventListener('keyup', (e) => {
	if (e.key === 'Enter') {
		let tag = input.value;
		tag = tag.trim();

		const url = `${base}method=${method_search}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&tags=${tag}&privacy_filter=1`;

		if (tag != '') {
			callData(url);
		} else {
			frame.innerHTML = '';
			frame.classList.remove('on');
			frame.style.height = 'auto';

			const errMsgs = frame.parentElement.querySelectorAll('p');
			if (errMsgs.length > 0) frame.parentElement.querySelector('p').remove();

			const errMeg = document.createElement('p');

			errMeg.append('검색어를 입력하세요');
			frame.parentElement.append(errMeg);
		}
	}
});

//item을 클릭하면 aside가 추가되어 큰 이미지로 보이게 하는 코드
//frame에 이벤트 위임
frame.addEventListener('click', (e) => {
	e.preventDefault();

	if (e.target == frame) return;
	//지금은 큰 의미 없지만 item들이 마진으로 벌어져 있다면 그 공백을 클릭했을 때 실행되지 않게 함

	let target = e.target.closest('.item').querySelector('.thumb');

	if (e.target == target) {
		let imgSrc = target.parentElement.getAttribute('href');
		let pop = document.createElement('aside');
		pop.classList.add('pop');
		let pops = `
        <div class="con">
            <img src="${imgSrc}">
        </div>
        <span class="close">close</span>
            `;
		pop.innerHTML = pops;
		body.querySelector('#gallery').append(pop);

		//이미지를 클릭해서 보고 있을 때 스크롤 방지
		body.style.overflow = 'hidden';
	}
});

//close버튼을 누르면 aside가 사라지게 함
body.addEventListener('click', (e) => {
	let pop = body.querySelector('.pop');
	if (pop) {
		let close = pop.querySelector('.close');
		if (e.target == close) {
			pop.remove();
			body.style.overflow = 'auto';
		}
	}
});
//url에 저장 된 json형태의 데이터를 불러오는 함수
function callData(url) {
	fetch(url)
		.then((data) => {
			return data.json();
		})
		.then((json) => {
			let items = json.photos.photo;

			createList(items);

			delayLoading();
		});
}

//items라는 변수에 담긴 자료를 받아와 리스트로 나열해주는 함수
function createList(items) {
	let htmls = '';
	items.map((el) => {
		let imgSrc = `https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_m.jpg`;

		let imgSrcBig = `https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_b.jpg`;

		htmls += `
          <li class="item">
            <div>
              <a href=${imgSrcBig}>
                <img src=${imgSrc} class="thumb">
              </a>
              <p>
								<span>${el.title}</span>
                <img class="profile" src="http://farm${el.farm}.staticflickr.com/${el.server}/buddyicons/${el.owner}.jpg">
                
              </p>
            </div>
          </li>
        `;
	});
	frame.innerHTML = htmls;
}

//로딩이 완료되면 리스트를 보여주는 함수
function delayLoading() {
	const imgs = frame.querySelectorAll('img');
	const len = imgs.length;
	let count = 0;

	for (let el of imgs) {
		el.onload = () => {
			count++;
			if (count == len) {
				isoLayout();
			}
		};

		// let thumb = el.closest(".item").querySelector(".thumb");//
		el.onerror = (e) => {
			e.currentTarget.setAttribute('src', 'img/k1.jpg');
		};

		let profile = el.closest('.item').querySelector('.profile');
		profile.onerror = (e) => {
			e.currentTarget.setAttribute(
				'src',
				'https://www.flickr.com/images/buddyicon.gif'
			);
		};
	}
}

function isoLayout() {
	loading.classList.add('off');
	frame.classList.add('on');

	new Isotope('#list', {
		itemSelection: '.item',
		columnWidth: '.item',
		transitionDuration: '0.5s',
	});
}
