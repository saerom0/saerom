var mapContainer = document.getElementById('map');

const t_on = document.querySelectorAll('.traffic li')[0];

const t_off = document.querySelectorAll('.traffic li')[1];

const branch_btns = document.querySelectorAll('.branch li');

let drag = true;
let zoom = true;

mapOption = {
	center: new kakao.maps.LatLng(37.5258975, 126.9284261),
	level: 3,
};

var map = new kakao.maps.Map(mapContainer, mapOption);

var markerOptions = [
	{
		title: '강남',
		latlng: new kakao.maps.LatLng(37.4960607, 127.0279746),
		imgSrc: 'img/marker1.png',
		imgSize: new kakao.maps.Size(60, 80),
		imgPos: { offset: new kakao.maps.Point(30, 60) },
		button: branch_btns[0],
	},
	{
		title: '광화문',
		latlng: new kakao.maps.LatLng(37.5745826, 126.9792381),
		imgSrc: 'img/marker1.png',
		imgSize: new kakao.maps.Size(60, 80),
		imgPos: { offset: new kakao.maps.Point(30, 60) },
		button: branch_btns[1],
	},
	{
		title: '서울스퀘어',
		latlng: new kakao.maps.LatLng(37.5554992, 126.9735873),
		imgSrc: 'img/marker1.png',
		imgSize: new kakao.maps.Size(60, 80),
		imgPos: { offset: new kakao.maps.Point(30, 60) },
		button: branch_btns[2],
	},
];

for (let i = 0; i < markerOptions.length; i++) {
	new kakao.maps.Marker({
		map: map,
		position: markerOptions[i].latlng,
		title: markerOptions[i].title,
		image: new kakao.maps.MarkerImage(
			markerOptions[i].imgSrc,
			markerOptions[i].imgSize,
			markerOptions[i].imgPos
		),
	});

	markerOptions[i].button.onclick = (e) => {
		e.preventDefault();

		for (let k = 0; k < markerOptions.length; k++) {
			markerOptions[k].button.classList.remove('on');
		}
		markerOptions[i].button.classList.add('on');

		moveTo(markerOptions[i].latlng);
	};
}
window.onresize = () => {
	let active_btn = document.querySelector('.branch li.on');
	let active_index = active_btn.getAttribute('data-index');

	map.setCenter(markerOptions[active_index].latlng);
};

t_on.addEventListener('click', (e) => {
	e.preventDefault();

	if (t_on.classList.contains('on')) return;

	map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

	t_on.classList.add('on');
	t_off.classList.remove('on');
});

t_off.addEventListener('click', (e) => {
	e.preventDefault();
	if (t_off.classList.contains('on')) return;
	map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

	t_off.classList.add('on');
	t_on.classList.remove('on');
});

var mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

setDraggable(drag);
setZoomable(zoom);

function moveTo(target) {
	let moveLatlng = target;
	map.setCenter(moveLatlng);
}

// 마우스 휠로 지도 확대,축소 가능여부 설정
function setZoomable(zoomable) {
	map.setZoomable(zoomable);
}

// 마우스 드래그로 지도 이동 가능여부 설정
function setDraggable(draggable) {
	map.setDraggable(draggable);
}
