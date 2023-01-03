var theme = document.getElementsByTagName('link')[0];
var body = document.getElementsByTagName('body')

function Theme(){
    if (theme.getAttribute('href') == 'light.css') {
        theme.setAttribute('href', 'dark.css');
        localStorage.setItem("theme","dark.css")
        body.style("background:#ffffff;")
        alert(body.style)


    } else {
        theme.setAttribute('href', 'light.css');
        localStorage.setItem("theme","light.css")
        body.style.background = "#ffffff"
        alert(body.style)
    }
}

function set(){
    b = localStorage.getItem("theme")
    console.log(b)
    if (b == null){
        theme.setAttribute('href', "light.css");

    } else {
        console.log(localStorage.getItem("theme"))
        theme.setAttribute('href', b);
    }

}

