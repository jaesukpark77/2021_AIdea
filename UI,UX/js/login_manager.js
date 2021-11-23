const button = document.getElementById(("btn"))

function onLoginBtnClick() {
    console.log("로그인 되었습니다", button.value);
}

button.addEventListener("click", onLoginBtnClick);

