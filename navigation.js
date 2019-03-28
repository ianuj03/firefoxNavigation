document.getElementsByTagName("body")[0]
.addEventListener("keydown",function(e){

	console.log(e.which);
	switch(e.which){
		case 74:window.scrollByLines(5);
			break;
		case 75:window.scrollByLines(-5);
			break;
		case 72: window.history.back();
			break;
		case 76: window.history.forward();
			break;
		case 219: window.scrollTo(0,0);
			break;
		case 221: window.scrollTo(0,document.body.scrollHeight);

	}
});
