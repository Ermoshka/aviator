let name = document.getElementById("name")
let ava = document.getElementById("ava")
let btn = document.getElementById("btn")
let cert = document.getElementById("cert")

let timeoutId = setTimeout(() => {
    preloader.style.display = 'none';
    maincontent.style.display = 'block';
    ava.classList.add("show1");
    name.classList.add("show2");
    btn.classList.add("show3");
    cert.classList.add("show4");
}, 15 * 1000);