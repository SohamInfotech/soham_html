var a = true;

function so(b) {
    if (b.innerHTML != "") {
        return;
    }
    if (a) {
        b.innerHTML = "X";
        a = false;
    } else {
        b.innerHTML = "0";
        a = true;
    }
    chack()
}
function chack() {
    var a1 = document.getElementById('id1').innerHTML;
    var a2 = document.getElementById('id2').innerHTML;
    var a3 = document.getElementById('id3').innerHTML;
    var a4 = document.getElementById('id4').innerHTML;
    var a5 = document.getElementById('id5').innerHTML;
    var a6 = document.getElementById('id6').innerHTML;
    var a7 = document.getElementById('id7').innerHTML;
    var a8 = document.getElementById('id8').innerHTML;
    var a9 = document.getElementById('id9').innerHTML;

    if ((a1 == "X" && a2 == "X" && a3 == "X") ||
        (a4 == "X" && a5 == "X" && a6 == "X") ||
        (a7 == "X" && a8 == "X" && a9 == "X") ||
        (a1 == "X" && a4 == "X" && a7 == "X") ||
        (a2 == "X" && a5 == "X" && a8 == "X") ||
        (a3 == "X" && a6 == "X" && a9 == "X") ||
        (a1 == "X" && a5 == "X" && a9 == "X") ||
        (a3 == "X" && a5 == "X" && a7 == "X")) {
        alert("X is win");
    } else {
        if ((a1 == "0" && a2 == "0" && a3 == "0") ||
            (a4 == "0" && a5 == "0" && a6 == "0") ||
            (a7 == "0" && a8 == "0" && a9 == "0") ||
            (a1 == "0" && a4 == "0" && a7 == "0") ||
            (a2 == "0" && a5 == "0" && a8 == "0") ||
            (a3 == "0" && a6 == "0" && a9 == "0") ||
            (a1 == "0" && a5 == "0" && a9 == "0") ||
            (a3 == "0" && a5 == "0" && a7 == "0")) {
            alert("0 is win")
        }
    }

}
function riset() {
    document.getElementById('id1').innerHTML = "";
    document.getElementById('id2').innerHTML = "";
    document.getElementById('id3').innerHTML = "";
    document.getElementById('id4').innerHTML = "";
    document.getElementById('id5').innerHTML = "";
    document.getElementById('id6').innerHTML = "";
    document.getElementById('id7').innerHTML = "";
    document.getElementById('id8').innerHTML = "";
    document.getElementById('id9').innerHTML = "";

}