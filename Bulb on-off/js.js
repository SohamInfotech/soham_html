

var toggle = true;
function on(){
    if(toggle){
        document.getElementById("img1").src="./on1.jpg";
    }else{
        document.getElementById("img1").src="./of1.jpg";
    }
    toggle=!toggle;
}

