function validate(word) {   // define function to validate input string. Using RegExp.test method on string.
	var letters = /^[A-Za-z]+$/;
	if(letters.test(word)) {
		return true;
		} else return false;
}

function dubtest(word) {   // define function to test for double letters and produce response
	var dub = /([a-z])\1/ig;
	var r = document.getElementById("response");

	if (dub.test(word) === true) {
		r.setAttribute("class", "resp1");
		r.innerHTML = "Fannee Doolee <span class=\"love\">loves</span> " + word + "!";
	}
	else {
		r.setAttribute("class", "resp2");
		r.innerHTML = "Fannee Doolee <span class=\"hate\">hates</span> " + word + ".";
	}
}

// run the program

document.addEventListener("DOMContentLoaded", function() {   // event listener, page loaded
	var el = document.getElementById("myForm");
	el.addEventListener("submit", function(e){      // event listener for submit. e is the built-in event object
		var word = document.getElementById("myWord").value; // get string from form input
		if (validate(word) === false) {
			alert("Please enter a word for Fannee");
		} else {
			dubtest(word);     // evaluate pattern in string and display response
		}
		e.preventDefault();    // stop page from reloading onsubmit
	});
	el.addEventListener("reset", function() {     // reload page when reset button is clicked
		window.location.reload(true);
	});
});

// end of running program