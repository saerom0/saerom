// join 페이지 체크박스 전체 체크
function selectAll(selectAll) {
    const checkboxes
        = document.getElementsByName('ck_agree');

    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
}