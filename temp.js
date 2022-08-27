var div1 = document.getElementById("div-1");
var logo = document.getElementById("logo");
logo.style.cursor = "pointer"
logo.addEventListener("click", function () {
    location.href = "\index.html"
})
var btn1 = document.querySelector("#sign-in")
btn1.style.cursor = "pointer"
btn1.addEventListener("click", function () {
    location.href = "\login.html"
})
div1.addEventListener("click", function () {
    var res = document.getElementById('menu-content-P1');
    res.style.display = 'none'
    var ab = document.getElementById("menu-content-P2");
    ab.style.display = "none"
    var com = document.getElementById("menu-content-P3");
    com.style.display = "none"
    var div = document.getElementById('menu-content-p');
    if (div.style.display === 'none') {
        div.style.display = 'flex';
        div.style.position = "fixed"
        div.style.top = "60px"
        div.style.width = "100%";
    }
    else {
        div.style.display = 'none';
    }
})

var div2 = document.getElementById("div-2");

div2.addEventListener("click", function () {
    var res = document.getElementById('menu-content-p');
    res.style.display = 'none'
    var ab = document.getElementById("menu-content-P2");
    ab.style.display = "none"
    var com = document.getElementById("menu-content-P3");
    com.style.display = "none"
    var div = document.getElementById('menu-content-P1');
    if (div.style.display === 'none') {
        div.style.display = 'flex';
        div.style.position = "fixed"
        div.style.top = "60px"
        div.style.width = "100%";
    }
    else {
        div.style.display = 'none';
    }
})

var div3 = document.getElementById("div-3");
div3.addEventListener("click", function () {
    var res = document.getElementById('menu-content-p');
    res.style.display = 'none'
    var ab = document.getElementById("menu-content-P1");
    ab.style.display = "none"
    var com = document.getElementById("menu-content-P3");
    com.style.display = "none"
    var div = document.getElementById("menu-content-P2");
    if (div.style.display === 'none') {
        div.style.position = "fixed"
        div.style.top = "60px"
        div.style.width = "100%";
        div.style.display = 'flex';
    }
    else {
        div.style.display = 'none';
    }
})

var div4 = document.getElementById("div-4");
div4.addEventListener("click", function () {
    var res = document.getElementById('menu-content-p');
    res.style.display = 'none'
    var ab = document.getElementById("menu-content-P1");
    ab.style.display = "none"
    var com = document.getElementById("menu-content-P2");
    com.style.display = "none"
    var div = document.getElementById("menu-content-P3");
    if (div.style.display === 'none') {
        div.style.display = 'flex';
        div.style.position = "fixed"
        div.style.top = "60px"
        div.style.width = "100%";
    }
    else {
        div.style.display = 'none';
    }
})



var filter = document.getElementById("topicFilter");
filter.addEventListener("change", myFunction);
var list = document.getElementById("blogMainCon");
var allDivs = list.getElementsByTagName("div")

function myFunction(e) {

    var filter = e.target.value;
    var divs = document.getElementsByClassName(filter);


    if (filter == "candidate-experience") {
        var dv0 = document.getElementsByClassName("candidate-experience")
        dv0.blogBody.hidden = false
        var dv1 = document.getElementsByClassName("candidate-sourcing")
        dv1.blogBody.hidden = true
        var dv2 = document.getElementsByClassName("company-culture")
        dv2.blogBody.hidden = true
        var dv3 = document.getElementsByClassName("diversity-inclusion")
        dv3.blogBody.hidden = true
    } if (filter == "candidate-sourcing") {
        var dv0 = document.getElementsByClassName("candidate-sourcing")
        dv0.blogBody.hidden = false
        var dv1 = document.getElementsByClassName("candidate-experience")
        dv1.blogBody.hidden = true
        var dv2 = document.getElementsByClassName("company-culture")
        dv2.blogBody.hidden = true
        var dv3 = document.getElementsByClassName("diversity-inclusion")
        dv3.blogBody.hidden = true
    }

}

F