// create variables for each of the characters available -- maybe set them equal to health?

//hero hit -- make that the number that gets multiplied by 6 each time

//enemies hit -- make that the number that subtracts from the hero health by same number each time


// assign a value to each of the characters based on their life Health


// create an if clicked for each of the characters
    // inside each of these if clicked, create a show to have a green chosen border and
    // function to move that character to the top of the list while simultaneously moving
      // the other characters to the bottom

// creat a base game settings varaible for the health of each of the characters


// create logic for start and reset buttons
    //reset so that characters all go to original position and reset button is hidden
    //start button so that all characters become clickable (aka starts functions)
    //and hides reset button.

$( ".start" ).on( "click", function() {
        console.log( "click" );
            start();
        })


function start(){
    $( '.startgamesection' ).hide();

}


// if (insert characters var) hp = 0 show "you have been defeated" or "you have defeated blah"
