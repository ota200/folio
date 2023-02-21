var theme = document.getElementsByTagName('link')[0];
var body = document.getElementsByTagName('body')
var page = document.getElementsByClassName('homebar')

// function Theme(){
//     if (theme.getAttribute('href') == 'light.css') {
//         theme.setAttribute('href', 'dark.css');
//         localStorage.setItem("theme","dark.css")


//     } else {
//         theme.setAttribute('href', 'light.css');
//         localStorage.setItem("theme","light.css")

//     }
// }

// function set(){
//     b = localStorage.getItem("theme")
//     console.log(b)
//     if (b == null){
//         theme.setAttribute('href', "light.css");

//     } 

//     else {
//         console.log(localStorage.getItem("theme"))
//         theme.setAttribute('href', b);
//     }

// }

const element = document.getElementById("main").children

element[0].style.display = "block"
element[1].style.display = "none"
element[2].style.display = "none"

function home(){
    element[0].style.display = "block"
    element[1].style.display = "none"
    element[2].style.display = "none"

    

}

function about(){
    element[0].style.display = "none"
    element[1].style.display = "block"
    element[2].style.display = "none"
}

function projects(){
    element[0].style.display = "none"
    element[1].style.display = "none"
    element[2].style.display = "block"
}



// const blob = document.querySelector(".blob");

// document.addEventListener('mousemove', e =>{
//     blob.style.top = e.clientY+ "px";
//     blob.style.left = e.clientX+ "px";

// })

// blob.addEventListener('mousemove', e =>{
//     blob.animate({ left: e.pageX + "px", top: e.pageY + "px"},{ duration: 3000, fill:"forwards" });
// })

// document.body.onpointermove = event =>{
//     const {clientX,clientY} = event;
//     blob.animate({
//         left: clientX + "vw",
//         top:clientY + "vh"
//     },{ duration:3000, fill:"forwards" });


// }