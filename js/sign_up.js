// join 페이지 체크박스 전체 체크
function selectAll(selectAll) {
    const checkboxes
        = document.getElementsByName('all_agree');

    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
}


//form validation
const form = document.querySelector("#member");
const btnSubmit = form.querySelector("input[type=submit]");

btnSubmit.addEventListener("click", (e) => {

    if (!isTxt("userid", 6)) e.preventDefault();
    if (!isEmail("email")) e.preventDefault();

    if (!isCheck("type")) e.preventDefault();
    if (!isSelect("gender")) e.preventDefault();
    if (!isPwd("pwd1", "pwd2", 8)) e.preventDefault();
    if (!isNumber("phone")) e.preventDefault();
});


//아이디 유효성 확인
function isTxt(el, len) {
    if (len === undefined) len = 6;
    let input = form.querySelector(`[name=${el}]`);

    let txt = input.value;
    const errMsgs = input.closest("td").querySelectorAll("p");

    if (txt.length >= len) {

        if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

        return true;
    } else {

        if (errMsgs.length > 0) return false;

        const errMsg = document.createElement("p");
        errMsg.append(`영문자 ${len}글자 이상 입력하세요.`);
        input.closest("td").append(errMsg);
        return false;
    }
}


//비밀번호 유효성 확인
function isPwd(el1, el2, len) {
    let pwd1 = form.querySelector(`[name=${el1}]`);
    let pwd2 = form.querySelector(`[name=${el2}]`);
    let pwd1_val = pwd1.value;
    let pwd2_val = pwd2.value;

    const num = /[0-9]/;
    const eng = /[a-zA-Z]/;
    const spc = /[~!@#$%^&*()_+?><]/;

    const errMsgs = pwd1.closest("td").querySelectorAll("p");

    if (pwd1_val === pwd2_val && pwd1_val.length >= len && num.test(pwd1_val) && eng.test(pwd1_val) && spc.test(pwd1_val)) {

        if (errMsgs.length > 0) {
            pwd1.closest("td").querySelector("p").remove();
        }
        return true;

    } else {
        if (errMsgs.length > 0) return false;
        const errMsg = document.createElement("p");
        errMsg.append(`${len}글자 이상, 영문, 숫자, 특수문자를 포함하여 동일하게 입력하세요.`);
        pwd1.closest("td").append(errMsg);
        return false;
    }
}


//연락처 유효성 검사
function isNumber(el) {
    let num = form.querySelector(`[name=${el}]`);
    let num_val = num.value;
    const errMsgs = num.closest("td").querySelectorAll("p");

    if (/^([0-9]{7,8})$/.test(num_val)) {
        if (errMsgs.length > 0) num.closest("td").querySelector("p").remove();
        return true;
    } else {
        if (errMsgs.length > 0) return false;
        const errMsg = document.createElement("p");
        errMsg.append("연락처를 확인 해 주세요.");
        num.closest("td").append(errMsg);
        return false;
    }
}


//이메일 유효성 확인
function isEmail(el) {
    let input = form.querySelector(`[name=${el}]`);
    let email = input.value;
    let email_pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z]+/;

    const errMsgs = input.closest("td").querySelectorAll("p");
    if (email_pattern.test(email)) {
        if (errMsgs.length > 0) form.closest("td").querySelector("p").remove();
        return true;
    } else {
        if (errMsgs.length > 0) return false;
        else {
            const errMsg = document.createElement("p");
            errMsg.append("유효한 이메일 주소를 기재 해 주세요.")
            input.closest("td").append(errMsg);
            return false;
        }
    }
}


//checked 여부 확인
function isCheck(el) {
    let inputs = form.querySelectorAll(`[name=${el}]`);
    let isCheck = false;

    for (let el of inputs) {
        if (el.checked) isCheck = true;
    }

    const errMsgs = inputs[0].closest("td").querySelectorAll("p");
    if (isCheck) {
        if (errMsgs.length > 0) inputs[0].closest("td").querySelector("p").remove();
        return true;
    } else {
        if (errMsgs.length > 0) return false;
        const errMsg = document.createElement("p");
        errMsg.append("필수항목에 체크 해 주세요.");
        inputs[0].closest("td").append(errMsg);
        return false;
    }
}


//항목선택 유효성 검사
function isSelect(el) {
    let sel = form.querySelector(`[name=${el}]`);
    let sel_index = sel.options.selectedIndex;

    let value = sel[sel_index].value;
    const errMsgs = sel.closest("td").querySelectorAll("p");

    if (value !== "") {
        if (errMsgs.length > 0) sel.closest("td").querySelector("p").remove();
        return true;
    } else {
        if (errMsgs.length > 0) return false;

        const errMsg = document.createElement("p");
        errMsg.append("항목을 선택 해 주세요.");
        sel.closest("td").append(errMsg);
        return false;
    }
}

