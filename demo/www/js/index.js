document.getElementById("b1").addEventListener("click", f1);
document.getElementById("b2").addEventListener("click", f2);
document.getElementById("b3").addEventListener("click", f3);
document.getElementById("b4").addEventListener("click", f4);

function f1() {
    var l = $("#t1").val();
    var a = parseInt(l);
    var m = $("#t2").val();
    var b = parseInt(m);
    var c = a + b;
    document.getElementById("p1").innerHTML = c;
}

function f2() {
    var l = $("#t1").val();
    var a = parseInt(l);
    var m = $("#t2").val();
    var b = parseInt(m);
    var d = a - b;
    document.getElementById("p1").innerHTML = d;
}

function f3() {
    var l = $("#t1").val();
    var a = parseInt(l);
    var m = $("#t2").val();
    var b = parseInt(m);
    var e = a * b;
    document.getElementById("p1").innerHTML = e;
}

function f4() {
    var l = $("#t1").val();
    var a = parseInt(l);
    var m = $("#t2").val();
    var b = parseInt(m);
    var f = a / b;
    document.getElementById("p1").innerHTML = f;
}