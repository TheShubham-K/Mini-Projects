document.getElementById("b1").addEventListener("click", f1);
document.getElementById("b2").addEventListener("click", f2);
document.getElementById("b3").addEventListener("click", f3);
document.getElementById("b4").addEventListener("click", f4);

function f1() {
    var a, b, c;
    a = Number(document.getElementById("t1").value);
    b = Number(document.getElementById("t2").value);
    c = a + b;
    alert("Addition of Two number = " + c);
    document.getElementById("p1").innerHTML = "Addition of two numbers " + "" + c;
}


function f2() {
    var a, b, d;
    a = Number(document.getElementById("t1").value);
    b = Number(document.getElementById("t2").value);

    d = a - b;
    alert("Substraction of Two number = " + d);
    document.getElementById("p1").innerHTML = "Substraction of two numbers " + "" + d;

}

function f3() {
    var a, b, e;
    a = Number(document.getElementById("t1").value);
    b = Number(document.getElementById("t2").value);

    e = a * b;
    alert("Multiplication of Two number = " + e);
    document.getElementById("p1").innerHTML = "Multiplication of two numbers " + "" + e;
}

function f4() {
    var a, b, f;
    a = Number(document.getElementById("t1").value);
    b = Number(document.getElementById("t2").value);

    f = a / b;

    alert("Division of Two number = " + f);
    document.getElementById("p1").innerHTML = "Division of two numbers " + "" + f;
}