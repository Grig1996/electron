
// Burger menu
const burger_menu = document.querySelector('.burger_menu');
if(burger_menu){
    const click_menu = document.querySelector('.click_menu');
    burger_menu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        burger_menu.classList.toggle('_active');
        click_menu.classList.toggle('_active');
    });
}


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

    // ======= Text animation
    const sec2_text1 = document.querySelector(".sec2_text1");
    const anim = window.scrollY;

    if(anim >= 170){
        sec2_text1.classList.add("sec2_textAnim");
    }

    const sec2_text2 = document.querySelector(".sec2_text2");

    if(anim >= 100){
        sec2_text2.classList.add("sec2_textAnim2");
    }
}

// slider

const btnLeft = document.querySelector('.leftbtn');
const btnRight = document.querySelector('.rightbtn');
const slider = document.querySelector('.section3');

let a = 0;
btnRight?.addEventListener('click', () => {
    a+=window.innerWidth;
    if(a >= window.innerWidth * 3){
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
