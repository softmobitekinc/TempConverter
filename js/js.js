
document.onkeydown = function(e) {
    if(e.keyCode == 123) {
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
     return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
     return false;
    }      
 }
  
let types = document.getElementById('type');
	let degree = document.getElementById('degree');
	let result = document.getElementById('result');
	function  calculate() {
	let solve;
	if (types.value == 'Fahrenheit') {
	solve = (parseFloat(degree.value) * 9/5) + 32;
	result.innerHTML = `${solve.toFixed(3)}<span>\u00B0F</span>`;
	degree.innerHTML = '';
	solve = '';
	}else {
	solve = (parseFloat(degree.value) - 32) * 5/9;
	result.innerHTML = `${solve.toFixed(3)}<span>\u00B0C</span>`;
	degree.innerHTML = '';
	solve = '';
	}
	}
