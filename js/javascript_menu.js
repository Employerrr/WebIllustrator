
window.addEventListener('scroll',() => {
	var scrBtn = document.getElementById("topBtn");
	if (scrollY >= 102){
        scrBtn.style.right = "20px";
	}
	else{
		scrBtn.style.right = "-100px";
	}
});
var i = 0;
var time = 0;
function started(){
	var menuu = document.getElementById('menu');
	menuu.title = "Open the menu";
}
started();
function menufunc(x){
	var menu = document.getElementById('navbar_drop');
	var menuu = document.getElementById('menu');
	x.classList.toggle("change");
	if (i == 0){
		menu.style.margin = "-35px 0 0 0";
		menuu.title = "Close the menu";
		i++;
	}
	else if(i == 1) {
		menu.style.margin = "-200px 0 0 0";
		menuu.title = "Open the menu";
		i--;
	}
}

var timeDia = "You have spent: ";
var timeDia2 = "s on this website";

function Per(){
	timeDia = "شما ";
	timeDia2 = " ثانیه در این وب سایت بوده اید";
}
function Eng(){
	timeDia = "You have spent: ";
	timeDia2 = "s on this website";
}

function timePassed(){
	var status = document.getElementById('status');
	setInterval(function(){
		status.innerHTML = timeDia + time + timeDia2;
		time++;
	},1000)

}
