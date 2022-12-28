var theme = document.getElementsByTagName('link')[0];

b = localStorage.getItem("theme")
console.log(localStorage.getItem("theme"))
theme.setAttribute('href', b);

function Theme(){
    if (theme.getAttribute('href') == 'light.css') {
        theme.setAttribute('href', 'dark.css');
        localStorage.setItem("theme","dark.css")

    } else {
        theme.setAttribute('href', 'light.css');
        localStorage.setItem("theme","light.css")

    }
}

function set(){
    b = localStorage.getItem("theme")
    console.log(localStorage.getItem("theme"))
    theme.setAttribute('href', b);
}

