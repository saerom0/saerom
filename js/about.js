//review page
const tab_btn = document.querySelectorAll('#service_type li');
const tab_contents = document.querySelectorAll('#service_type article');

console.log(tab_btn);
console.log(tab_contents);

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
