const burger_menu = document.querySelector('.burger_menu');
if(burger_menu){
    const click_menu = document.querySelector('.click_menu');
    burger_menu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        burger_menu.classList.toggle('_active');
        click_menu.classList.toggle('_active');
    });
}

const btnLeft = document.querySelector('.leftbtn');
const btnRight = document.querySelector('.rightbtn');
const slider = document.querySelector('.compSec1');

let a = 0;
btnRight?.addEventListener('click', () => {
    a+=window.innerWidth;
    if(a >= window.innerWidth*3){
        a = 0;
    }
    slider.scrollTo({
        left:a,
        behavior:"smooth"
        
    })
    console.log(a);
})


btnLeft?.addEventListener('click', () => {
    a-=window.innerWidth;
    if(a <= - 1){
        a = window.innerWidth * 2;
    }
    slider.scrollTo({
        left:a,
        behavior:"smooth"
    })
})

window.onscroll = () => {
    // ===== header fixed
	const nav = document.querySelector('.header');
    const test = document.querySelector("#altHeader");
	const nerqev = window.scrollY;
    
	if	(nerqev >= 70) {
		nav.classList.add('fixed');
        test.classList.add("altHeader")
        
	} else{
		nav.classList.remove('fixed');
        test.classList.remove("altHeader")
	}
}

const basketTriangle = document.querySelector(".basketTriangle")
const basketIconBlock = document.querySelector('.basketIconBlock');
if(basketIconBlock){
    const basketMenuBlock = document.querySelector('.basketMenuBlock');
    basketIconBlock.addEventListener('click', () => {
        basketMenuBlock.classList.toggle('basketActvie');
    });
    basketIconBlock.addEventListener('click', () =>{
        basketTriangle.classList.toggle('basketTriangleActive');
    });
};


// product count

// console.log()
const buttonMin = document.querySelector('.buttonMin');
const buttonPlus = document.querySelector('.buttonPlus');
const output = document.querySelector('.output');
const add = document.querySelector("#caseAddButton")

let value = 0;

buttonPlus.addEventListener("click", () => {
    if(value < 3){
        value++
        output.innerHTML = value;
    }
});

buttonMin.addEventListener("click", () => {
   if(value > 0){
    value--
    output.innerHTML = value;
   }else{
    return value
   }

});


const compImg = document.querySelector(".caseImgRam")
const compName = document.querySelector("#caseNameText")
const compCount = document.querySelector(".output")
const mySelected = document.getElementById("#root")

compImg.style.backgroundImage = computer1.photo;
compName.innerHTML = computer1.name
