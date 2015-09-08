function validate(word) {   // define function to validate input string. Using RegExp.test method on string.
	var letters = /^[A-Za-z]+$/;
	if(letters.test(word)) {
		return true;
		} else return false;
}

function dubtest(word) {   // define function to test for double letters and produce response
	var dub = /([a-z])\1/ig;
	var r = $( "#response" );

	if (dub.test(word) === true) {
		r.attr("class", "resp1");
		r.html("Fannee Doolee <span class=\"love\">loves</span> " + word + "!");
	}
	else {
		r.attr("class", "resp2");
		r.html("Fannee Doolee <span class=\"hate\">hates</span> " + word + ".");
	}
}

// run the program

$(document).ready(function() {   // jQuery event listener, page loaded
	var el = $( "#myForm" );
	el.submit(function(e){      // event listener for submit. e is the built-in event object
		var word = $( "#myWord" ).val(); // get string from form input
		if (validate(word) === false) {
			alert("Please enter a word for Fannee");
		} else {
			dubtest(word);     // evaluate pattern in string and display response
		}
		e.preventDefault();    // stop page from reloading onsubmit
	});
	$(":reset").click (function() {     // reload page when reset button is clicked
		window.location.reload(true);
	});
});

// end of running program