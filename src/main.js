const keyCode = document.getElementById("keycode");
const key = document.getElementById("key");

window.addEventListener("keydown", function (e) {
    if (e.keyCode == 32) {
        keyCode.innerHTML = `<p>${e.keyCode}</p>`;
        key.innerHTML = `<p>space</p>`;
    } else {
        keyCode.innerHTML = `<p>${e.keyCode}</p>`;
        key.innerHTML = `<p>${e.key}</p>`;
        e.preventDefault();
    }
});
