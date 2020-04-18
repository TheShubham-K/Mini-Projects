document.getElementById("l1").addEventListener("click", f1);
document.getElementById("s1").addEventListener("click", f2);

var s = window.localStorage;

function f1() {
    s.setItem("Name: ", "Shubham Kumar");
    s.setItem("Points: ", "900");
    s.setItem("Country: ", "India");
}

function f2() {
    document.getElementById("p1").innerHTML = s.getItem("Name: ");
    document.getElementById("p1").innerHTML = s.getItem("Points: ");
    document.getElementById("p1").innerHTML = s.getItem("Country: ");
}