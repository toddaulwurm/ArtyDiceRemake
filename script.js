// cookie alert

var cookieAlert = document.querySelector("#cookieAlert");
var cookieOut = document.querySelector("#cookie");
function hide(element) {
    console.log(element);
    cookieOut.innerHTML = "";
    element.remove();
}

// hover

function over(element) {
    element.src = "images/assets/Red-Amitis.jfif";   
}
    
function out(element) {
    element.src = "images/assets/Frozen-Garden.jfif";   
}
