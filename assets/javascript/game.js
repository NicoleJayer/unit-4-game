$( '.pickbuttoncontainer' ).hide();
$( '.playerchooseContainer' ).hide();
$( '.versus' ).hide();
$( '.pickedsoracontainer' ).hide();
$( '.pickedrikucontainer' ).hide();
$( '.pickeddonaldcontainer' ).hide();
$( '.pickedgoofycontainer' ).hide();
$( '.playerenemyContainer' ).hide();
$( '.soraenemypickedcontainer' ).hide();
$( '.rikuenemypickedcontainer' ).hide();
$( '.donaldenemypickedcontainer' ).hide();
$( '.goofyenemypickedcontainer' ).hide();




// create variables for each of the characters available -- maybe set them equal to health?

var sorahealth = 200;
var rikuhealth = 220;
var goofyhealth = 180;
var donaldhealth = 160;

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
    $( '.playersstartContainer' ).hide();
    $( '.playerchooseContainer' ).show();
    $('#hpholdersora').html(sorahealth);
    $('#hpholderriku').html(rikuhealth);
    $('#hpholderdonald').html(donahealth);
    $('#hpholdergoofy').html(goofyhealth);


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


//functions for if person selects a character and that person becomes the hero

function soraselect(){
    $( '.playersstartContainer' ).hide();
    $( '.playerchooseContainer' ).hide();
    $( '.playerenemyContainer' ).show();
    $( '.pickbuttoncontainer' ).hide();
    $( '.versus' ).show();
    $( '.pickedsoracontainer' ).show();
    $( '.soraenemy' ).hide();

}

function rikuselect(){
  $( '.playersstartContainer' ).hide();
  $( '.playerchooseContainer' ).hide();
  $( '.playerenemyContainer' ).show();
  $( '.pickbuttoncontainer' ).hide();
  $( '.versus' ).show();
  $( '.pickedrikucontainer' ).show();
  $( '.rikuenemy' ).hide();

}

function donaldselect(){
  $( '.playersstartContainer' ).hide();
  $( '.playerchooseContainer' ).hide();
  $( '.playerenemyContainer' ).show();
    $( '.pickbuttoncontainer' ).hide();
    $( '.versus' ).show();
    $( '.pickeddonaldcontainer' ).show();
    $( '.donaldenemy' ).hide();

}

function goofyselect(){
  $( '.playersstartContainer' ).hide();
    $( '.playerchooseContainer' ).hide();
  $( '.playerenemyContainer' ).show();
    $( '.pickbuttoncontainer' ).hide();
    $( '.versus' ).show();
    $( '.pickedgoofycontainer' ).show();
    $( '.goofyenemy' ).hide();

}

//functions for if enemy character is selected
$( ".rikuenemy" ).on( "click", function() {
            rikuenemy();
          })

function rikuenemy(){
    $( '.rikuenemy' ).hide();
    $( '.rikuenemypickedcontainer' ).show();
}



$( ".donaldenemy" ).on( "click", function() {
            donaldenemy();
          })

function donaldenemy(){
    $( '.donaldenemy' ).hide();
    $( '.donaldenemypickedcontainer' ).show();
}


$( ".goofyenemy" ).on( "click", function() {
            goofyenemy();
          })

function goofyenemy(){
    $( '.goofyenemy' ).hide();
    $( '.goofyenemypickedcontainer' ).show();
}


$( ".soraenemy" ).on( "click", function() {
            soraenemy();
          })

function soraenemy(){
    $( '.soraenemy' ).hide();
    $( '.soraenemypickedcontainer' ).show();
}
//end of functions for enemy selected


// if (insert characters var) hp = 0 show "you have been defeated" or "you have defeated blah"
