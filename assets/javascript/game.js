$( '.pickbuttoncontainer' ).hide();
$( '.versus' ).hide();
$( '.pickedsoracontainer' ).hide();
$( '.pickedrikucontainer' ).hide();
$( '.pickeddonaldcontainer' ).hide();
$( '.pickedgoofycontainer' ).hide();

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
            start();
        })


function start(){
    $( '.startgamesection' ).hide();
    $( '.pickbuttoncontainer' ).show();

}


//hero selection click to start functions
$( ".sora" ).on( "click", function() {
            soraselect();
        })


$( ".riku" ).on( "click", function() {
            rikuselect();
          })


$( ".donald" ).on( "click", function() {
            donaldselect();
          })


$( ".goofy" ).on( "click", function() {
            goofyselect();
          })


//functions for if person selects a character

function soraselect(){
    $( '.sora' ).hide();
    $( '.pickbuttoncontainer' ).hide();
    $( '.versus' ).show();
    $( '.pickedsoracontainer' ).show();

}

function rikuselect(){
    $( '.riku' ).hide();
    $( '.pickbuttoncontainer' ).hide();
    $( '.versus' ).show();
    $( '.pickedrikucontainer' ).show();

}

function donaldselect(){
    $( '.donald' ).hide();
    $( '.pickbuttoncontainer' ).hide();
    $( '.versus' ).show();
    $( '.pickeddonaldcontainer' ).show();

}

function goofyselect(){
    $( '.goofy' ).hide();
    $( '.pickbuttoncontainer' ).hide();
    $( '.versus' ).show();
    $( '.pickedgoofycontainer' ).show();

}

// if (insert characters var) hp = 0 show "you have been defeated" or "you have defeated blah"
