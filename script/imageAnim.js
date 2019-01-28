(() => {
	console.log('fired');

	const theButton = document.querySelectorAll("#buttonHolder img");

	// window.addEventListener("click",changeHeadline);
	// window.addEventListener("load",changeSubhead);

	function changeHeadline()
	{
		document.querySelector("h1").textContent = "Hey There From JS!";
		document.querySelector("p").textContent = "This is the Subhead";
	}
	// set up the puzzle pieces and boards
	//
	//
	
	theButton.forEach(button => button.addEventListener("mousemove",changeHeadline));


})();
