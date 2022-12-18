const pages = document.querySelectorAll(".page");
const lis = document.querySelectorAll(".quick li")
let posArr = [];
let base = -500;
// const cp_vid = document.querySelector('.cp_vid'); //비디오
const ontop = document.querySelector(".on_top");

for (let el of pages) {
    posArr.push(el.offsetTop);
}
console.log(posArr);


window.addEventListener("scroll", () => {
    let scroll = window.scrollY || window.pageYOffset;
    
    //3단메뉴가 상단에 붙는 순간부터 항상 상위에 고정
    //클릭하면 상위로 이동하는 버튼(Anim을 사용하면 다른 코드가 작동이 안됨)
    if (scroll >= posArr[1]) {
        pages[1].classList.add("on");
        pages[0].classList.add("on");
    } else {
        pages[1].classList.remove("on");
        pages[0].classList.remove("on");
    }

    if(scroll >=posArr[3]+base){
        counter(".record_1", 31, 1500);
        counter(".record_2", 24, 1500);
        counter(".record_3", 100, 1500);
        counter(".record_4", 9700, 1500);
    }
    // ontop.addEventListener("click", (e) => {
    //     new Anim(window, {
    //         prop: "scroll",
    //         value: posArr[0],
    //         duration: 500,
    //     });

})
    //gallery 카운터 함수
    //오류 해결 : 
    function counter(el, num, time) {

        const item = document.querySelector(el);
        let current_num = parseInt(item.innerText);
        if(num==current_num) {
            return;
        } else{
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
    // }