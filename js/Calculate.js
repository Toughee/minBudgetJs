function calculate1() {
    var a = document.getElementById("qty1-class1").value;
    var aa = document.getElementById("qty1-class2").value;
    var ab = document.getElementById("qty1-class3").value;
    var ac = a * aa * ab;

    document.getElementById("num1").innerHTML = 'Your total yearly pay rate equals to $'+ Math.round(ac).toLocaleString();
}
function calculate2() {
    var bb = parseInt(document.getElementById("qty1-income").value);
    var bc = Math.floor(parseInt(document.getElementById("qty2-percent").value / 100));
    var bd = parseInt(document.getElementById("mnthsav").value);
    var be = parseInt(document.getElementById("svGoal").value);
    var bbb = bb * bc * bd;
    document.getElementById("num2").innerHTML = 'You would have ' + bc +  ' saved in ' + bd + ' months  before reaching your goal of $' + be.toLocaleString();
}
function calculate3() {
    var c1 = document.getElementById("collegeName").value;
    var c2 = parseInt(document.getElementById("tuit").value);
    var c3 = parseInt(document.getElementById("semester").value);
    var c4 = parseInt(document.getElementById("qty5-class3").value);
    var c5 = parseInt(document.getElementById("qty6-class3").value);
    var c6 = parseInt(document.getElementById("qty7-class3").value);
    var c7 = document.getElementById("qty8-class3").value;
    var c8 = c2 * c4 + c5 + c6 * c3;
    document.getElementById("num3").innerHTML = 'Your total cost for attending ' + c1 + ' would total into $' + c8.toLocaleString() + ' if you wish to attend on ' + c7;
}
function calculate4() {
    var d1 = document.getElementById("destination").value;
    var d2 = parseInt(document.getElementById("qty1-class4").value);
    var d3 = parseInt(document.getElementById("food").value);
    var d4 = parseInt(document.getElementById("travelFare").value);
    var d7 = parseInt(document.getElementById("Add-purchase").value);
    var d8 = d4 + d7;
    document.getElementById("num4").innerHTML = 'Your total cost for visiting ' + d1 + ' would be $' + d8.toLocaleString();
}
