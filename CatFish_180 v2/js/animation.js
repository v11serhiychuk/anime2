	
	requestAnimationFrame(moveSlide1);


	var opacityStep1 = 0;
	var	slide1 = getObj('slide1');

    function moveSlide1() {
    	opacityStep1+=0.017;
		slide1.style.opacity = opacityStep1; 

		var i=0;
		if (i++ <100) {
			if(opacityStep1 <= 1){
				console.log("opacityStep1 = " + opacityStep1);
				requestAnimationFrame(moveSlide1);
			} else {
	        	requestAnimationFrame(moveSlide2);
			}	
		}
	};
	
	var startTop = -82;
	var	slide2 = getObj('slide2');		

	function moveSlide2() {
		startTop+=16.51;
		slide2.style.top =  startTop + "px";
		console.log("startTop = " + startTop);
		
		var i=0;
	    if (i++ <100) {
			if(startTop < -1){
	        	requestAnimationFrame(moveSlide2);
			} else {
				requestAnimationFrame(moveSlide3);
			}
		}
	};


	var startBottom = -90;
	var	slide3 = getObj('slide3');		

	function moveSlide3() {
		startBottom+=5;
		slide3.style.bottom =  startBottom + "px";
		console.log("startBottom = " + startBottom);
		
		var i=0;
	    if (i++ <100) {
			if(startBottom < -1){
	        	requestAnimationFrame(moveSlide3);
			} else {
				requestAnimationFrame(moveButton);
			}
		}
	};

 	var	buttonCF = getObj('button-to-cf');	

	function moveButton() {
		buttonCF.style.width = getWidth();

 		var i = 0;
		if (i++ < 140) {
			requestAnimationFrame(moveButton);
		}
	};

		var up = "up",down = "down",infoMove = up;
		var	minW = 190;
		var	maxW = 210;
		var	dataW = 190;

	function getWidth() {
		if (infoMove == up) { 
			return (dataW < maxW) ? (dataW+=0.7) : (infoMove = down)? --dataW: 1;				
		} else {
			return (dataW > minW) ? (dataW-=0.7) : (infoMove = up)? ++dataW: 1;				
		}

	}

	function getObj(id){ return  document.getElementById(id)};