
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
/*
const element = document.getElementById("main").children

element[0].style.display = "block"
element[1].style.display = "none"
element[2].style.display = "none"

function home(){
    // element[0].style.display = "block"
    // element[1].style.display = "none"
    // element[2].style.display = "none"
    location.href ="index.html"
    

}

function about(){
    // element[0].style.display = "none"
    // element[1].style.display = "block"
    // element[2].style.display = "none"
    location.href ="a.html"
}

function projects(){
    // element[0].style.display = "none"
    // element[1].style.display = "none"
    // element[2].style.display = "block"
    location.href ="p.html"

}

function blog(){
    location.href ="https://dev.to/ota200"

}

function github(){
    location.href ="https://github.com/ota200"

}

function git(){
    location.href ="https://github.com/ota200/Random-Genertation-Pygame"
}

*/
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


const dark_colors = ["#36454F","#023020","#301934","#343434","#1B1212","#28282B","#191970","#353935","#3C4234"]
const light_colors = ["#FED766","#DDE8B9","#E8D2AE","#D3BCC0","#A39BA8","#D1D1D1","#DBDBDB","#F2EFEA"]
const a_dark = ["FF4000","#F5BB00","#FC7753"]
const a_light = ["#780116","#EF626C"]

const n = document.querySelector(":root").style






fitty('button');




let b = 0
function change(){

    let k = Math.floor(Math.random() * 2)



    let c = k
    if (c == 0){

        m = light_colors[Math.floor(Math.random() * 7)]

        n.setProperty("--white",m)
        n.setProperty("--btn",m)

        n.setProperty("--black",dark_colors[Math.floor(Math.random() * 7)])
        n.setProperty("--accent",dark_colors[Math.floor(Math.random() * 7)])

    } else {
        m = dark_colors[Math.floor(Math.random() * 7)]

        n.setProperty("--white",m)
        n.setProperty("--btn",m)

        n.setProperty("--black",light_colors[Math.floor(Math.random() * 7)])
        n.setProperty("--accent",light_colors[Math.floor(Math.random() * 7)])

    }



}