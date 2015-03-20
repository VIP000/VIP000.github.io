$( document ).ready(function() {      
	var alerted = localStorage.getItem('alerted') || '';

	if(alerted != "yes") {
	    if ( (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
	        alert("We currently optimising our new site for mobile - please excuse any bugs.\n\nTo contact us about our services, feel free to call or email at any time.\n\nEmail: hello@versobit.com\nPhone (UK): 0330 010 VBIT\nPhone (US): 1-855-797-VBIT");
	        localStorage.setItem('alerted','yes');
	    }
	}
 });