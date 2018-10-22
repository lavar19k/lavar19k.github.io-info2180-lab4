var boundaries;
var end;
var start;
var statusState;
var mazeBoundary;
var win = false;
var outOfBounds = false;

window.onload = function() {
    boundaries = document.querySelectorAll(".boundary");
    end = document.getElementById("end");
    start = document.getElementById("start");
    statusState = document.getElementById("status");
    mazeBoundary = document.getElementById("maze");

    //Assignment of functions to events to be used to run the game
    start.onclick = resetGame;
    mazeBoundary.onmouseleave = antiCheat;
    end.onmouseover = CheckWin;
    for (var i = 0; i < boundaries.length - 1; i++) { //boundaries.length - 1 was used to exclude the example boundary from being touched
		boundaries[i].onmouseover = overBounds;
	}
}

function overBounds(){ 
	if (!win){ 
		if(!outOfBounds) 
		{
			outOfBounds = true;
			statusState.innerText = 'You Lose! Click the "S" to reset and play again.';
			for (var i = 0; i < boundaries.length - 1; i++) {
			boundaries[i].className += " youlose";
			}
		}
	}
}

function CheckWin(){
	if(!outOfBounds){ //Checks if the user hit any boundaries and also if he/she lost the game
		win = true;
		statusState.innerText = 'You Win! Click the "S" to reset and play again.';
		}

}

function resetGame(){
	win = false;
	outOfBounds = false;
	statusState.innerText = 'Move your mouse over the "S" to begin.';	
	for (var i = 0; i < boundaries.length - 1; i++) {
		boundaries[i].className = "boundary";
	}
}

function antiCheat(){
	if(!win){ //Checks if the user trys to cheat and activates the fail state if triggered
		overBounds();		
		}

}