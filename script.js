const imgs = document.querySelectorAll('.slider-img');
const slideBtnLeft = document.querySelector('.btn-left');
const slideBtnRight = document.querySelector('.btn-right');

console.log(imgs.length - 1)

let startSlider = 0
let endSlider = (imgs.length - 1) * 100  // 700

slideBtnLeft.addEventListener("click", handleLeftBtn)

function changeslide(){
    imgs.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    changeslide();
}

slideBtnRight.addEventListener("click", handleRightBtn)

function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    changeslide();
}
function renderSlideAuto() {

    if (startSlider >= -endSlider + 100) {
        handleRightBtn()
    }
    else {
        startSlider = 0;
    }
}
setInterval(renderSlideAuto, 7000);






////***********************side bar******************************** */





function openNav(){
    document.getElementById("mysidenav").style.animation = "expand 0.3s forwards"
    document.getElementById("xxx").style.display="block"
    document.getElementById("xxx").style.animation="show 0.3s"
    document.getElementById("over-lay").style.display="block"
    document.getElementById("over-lay").style.animation="show 0.3s"
}
function closeNav(){
    document.getElementById("mysidenav").style.animation = "collapse 0.3s forwards"
    document.getElementById("xxx").style.animation="hide 0.3s"
    document.getElementById("xxx").style.display="none" 
    document.getElementById("over-lay").style.animation="hide 0.3s"
    document.getElementById("over-lay").style.display="none" 
}



//******************************************************************* */




const imgs2 = document.querySelectorAll('.simg');
const slideBtnLeft2 = document.querySelector('.right-bar');
const slideBtnRight2 = document.querySelector('.left');

console.log(imgs2.length - 1)

let startSlider2 = 0
let endSlider2 = (imgs2.length - 1) * 100  // 700

slideBtnLeft2.addEventListener("click", handleLeftBtn2)

function changeslide2(){
    imgs2.forEach(element => {
        element.style.transform = `translateX(${startSlider2}%)`;
    })
}

function handleLeftBtn2() {
    if (startSlider2 < 0) {
        startSlider2 = startSlider2 + 100;
    }
    changeslide2();
}

slideBtnRight2.addEventListener("click", handleRightBtn2)

function handleRightBtn2() {
    if (startSlider2 >= -endSlider2 + 100) {
        startSlider2 = startSlider2 - 100;
    }
    changeslide2();
}

