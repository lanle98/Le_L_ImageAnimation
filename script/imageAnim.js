(() => {
	console.log('fired');

	//set up the puzzle pieces and boards
	//
	// need a reference to each piece that we want to create
	const thePieces = ["topLeft","topRight","bottomLeft","bottomRight"];

	//get a reference to the drag side
	let piecesBoard = document.querySelector(".puzzle-pieces");
	let puzzleBoard = document.querySelector(".puzzle-board");

	// get a reference to the butons at the bottom so we can change the puzzle
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	//functions og in the middle
	function createPuzzlePieces(pictureIndex)
	{
		//generate images here -> need to make 4 (top left, right, bottom left, right)
		thePieces.forEach((piece,index) =>{
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image"
			 src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">`;

			 piecesBoard.innerHTML += newPuzzlePiece;
		});

		// debugger;
	}


	function resetPuzzlePieces()
	{
		// change the current puzzle, regenerate the pieces
		//debugger;
		//clean out the puzzle pieces div
		piecesBoard.innerHTML = "";


		//generate new pieces
		createPuzzlePieces(this.dataset.puzzleref);
	}

	//event handling goes here
	puzzleSelectors.forEach(button => button.addEventListener("click",resetPuzzlePieces));

	// call this function to set up / generate the pieces on load
	createPuzzlePieces(0);

	debugger;
})();
