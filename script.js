let colors = ["darkorchid",
    "dimgray",
    "yellow",
    "blueviolet",
    "aqua",
    "black",
    "chartreuse",
    "crimson",
    "darkgreen",
    "gold"];
let imgs = ["url('https://www.freepnglogos.com/uploads/triangle-png/red-triangle-transparent-png-9.png')",
    "url('https://www.pngall.com/wp-content/uploads/13/Red-Circle.png')",
    "url('https://upload.wikimedia.org/wikipedia/commons/2/27/Red_square.svg')"]

let div = document.getElementById("i");
let color = document.getElementById("i1");
let c = 0;
color.addEventListener("click", function () {
    div.style.backgroundColor = colors[c];
    c++;
    if (c == colors.length) {
        c = 0;
    }
});


let img = document.getElementById("i3");
let clickimg = document.getElementById("i2");
let i = 0;
clickimg.addEventListener("click", function () {
    img.style.backgroundImage = imgs[i];
    i++;
    if (i == imgs.length) {
        i = 0;
    }
});
