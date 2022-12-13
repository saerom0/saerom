var mapContainer = document.getElementById('map'); // 지도를 표시할 div

const t_on = document.querySelectorAll(".traffic li")[0];
const t_off = document.querySelectorAll(".traffic li")[1];
const branch_btns = document.querySelectorAll(".branch li");

let drag = true;
let zoom = true;

var mapOption = {
    center: new kakao.maps.LatLng(37.4960607, 127.0279746),
    level: 3
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var markerOptions = [
    {
        title: "강남",
        latlng: new kakao.maps.LatLng(37.4960607, 127.0279746),
        button: branch_btns[0],
    },
    {
        title: "광화문",
        latlng: new kakao.maps.LatLng(37.5745826, 126.9792381),
        button: branch_btns[1],
    },
    {
        title: "서울스퀘어",
        latlng: new kakao.maps.LatLng(37.5554992, 126.9735873),
        button: branch_btns[2],
    }
];

// 마커가 표시될 위치입니다 
// var markerPosition = new kakao.maps.LatLng(37.4960607, 127.0279746);

// 마커를 생성합니다

for (let i = 0; i < markerOptions.length; i++) {
    new kakao.maps.Marker({
        map: map,
        position: markerOptions[i].latlng,
        title: markerOptions[i].title,
    })

    markerOptions[i].button.onclick = (e) => {
        e.preventDefault();
        for (let j = 0; j < markerOptions.length; j++) {
            markerOptions[j].button.classList.remove("on");
        }
        markerOptions[i].button.classList.add("on");

        moveTo(markerOptions[i].latlng);
    }

}

window.onresize = () => {
    let active_btn = document.querySelector(".branch li.on");

    let active_index = active_btn.getAttribute("data-index");


    map.setCenter(markerOptions[active_index].latlng);

}
t_on.addEventListener("click", (e) => {
    e.preventDefault();

    if (t_on.classList.contains('on')) return;

    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

    t_on.classList.add("on");

    t_off.classList.remove("on");
});
t_off.addEventListener("click", (e) => {
    e.preventDefault();
    if (t_off.classList.contains("on")) return;
    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    t_off.classList.add("on");
    t_on.classList.remove("on");
});
function moveTo(target) {
    let moveLatlng = target;
    map.setCenter(moveLatlng);
}


// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);


// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 지도에 교통정보를 표시하도록 지도타입을 추가합니다

setDraggable(drag);
setZoomable(zoom);
