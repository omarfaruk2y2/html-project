// form
let form= document.querySelector("form");
let name = form.querySelector("div #name");
let email = form.querySelector("div #email");
let address = form.querySelector("div #address");
let number = form.querySelector("div #number");
let password = form.querySelector("div #password");

form.addEventListener('submit',evenhandler);

function evenhandler(e){
    e.preventDefault();
    
    let formInfo = {
        name: name.value,
        email: email.value,
        address: address.value,
        number: number.value,
        password: password.value
    }
    console.log(formInfo);
    name.value="";
    email.value="";
    address.value="";
    number.value="";
    password.value="";
}

// form
// let popup = document.getElementById("popup");

// function openButton(){
//     popup.classList.add("open-popup");
// }
// function closebutton(){
//     popup.classList.remove("open-popup");
// }

// ========

let slider = ["/images/slider-images/slider-1.png","/images/slider-images/slider-2.png","/images/slider-images/slider-3.png","/images/slider-images/slider-4.png","/images/slider-images/slider-1.png"]

let sliderPic = document.querySelector(".slider-img");

let count = 0;

function nextImages(){
    count ++;
    if(count>=slider.length){
        count=0;
        sliderPic.src=slider[count];
    }
    else{
        sliderPic.src=slider[count];
    }
}

function previwsImages(){
    count --;
    if(count <0){
        count =slider.length-1;
        sliderPic.src=slider[count];
    }
    else{
        sliderPic.src=slider[count];
    }
}

// slider end