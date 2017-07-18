function calculate1() {
        var a = document.getElementById("qty1-class1").value  / 52 / 40;
            document.getElementById("num1").innerHTML = 'Your total gross pay rate per hour equals to $'+ Math.round(a);
    }
    function calculate2() {
        var bb = parseInt(document.getElementById("qty1-class2").value);
        var bc = parseInt(document.getElementById("qty2-class2").value);
        var bd = parseInt(document.getElementById("qty3-class2").value);
        var be = parseInt(document.getElementById("qty4-class2").value);
        var bf = bb + bc + bd;
        var bg = be - bf;
            document.getElementById("num2").innerHTML = 'You only need  $' + bg + '  before you reach your goal of ' + be;
    }
    function calculate3() {
        var c1 = document.getElementById("collegeName").value;
        var c2 = parseInt(document.getElementById("tuit").value);
        var c3 = parseInt(document.getElementById("semester").value);
        var c4 = parseInt(document.getElementById("qty5-class3").value);
        var c5 = parseInt(document.getElementById("qty6-class3").value);
        var c6 = parseInt(document.getElementById("qty7-class3").value);
        var c7 = document.getElementById("qty8-class3").value;
     	var c8 = c2 + c4 + c5 + c6 * c3;
            document.getElementById("num3").innerHTML = 'Your total cost for attending ' + c1 + ' would total into $' + c8 + ' if you wish to attend on ' + c7;
    }
    function calculate4() {
        var d1 = document.getElementById("destination").value;
        var d2 = parseInt(document.getElementById("qty1-class4").value);
        var d3 = parseInt(document.getElementById("qty2-class4").value);
        var d4 = parseInt(document.getElementById("travelFare").value);
        var d7 = parseInt(document.getElementById("qty6-class4").value);
        var d8 = d4 + d7;
            document.getElementById("num4").innerHTML = 'Your total cost for visiting ' + d1 + ' would be $' + d8;
    }
