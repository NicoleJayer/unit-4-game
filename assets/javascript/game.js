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
$( '.attackbutton' ).hide();




// create variables for each of the characters available -- maybe set them equal to health?

var sorahealth = 200;
var rikuhealth = 220;
var goofyhealth = 180;
var donaldhealth = 160;

//hero hit -- make that the number that gets multiplied by 6 each time

var heroattackvalue = 6;

var currentenemyattack = 0;

var currentherohp = 0;

var currentenemyhp = 0;

var newenemyhealth = 0;

//enemies hit -- make that the number that subtracts from the hero health by same number each time

var rikuenemyhit = 25;

var soraenemyhit = 20;

var donaldenemyhit = 15;

var goofyenemyhit = 18;

var goofyenemyhasbeenclicked = false;
var soraenemyhasbeenclicked = false;
var donaldenemyhasbeenclicked = false;
var rikuenemyhasbeenclicked = false;

var soraherohasbeenclicked = false;
var rikuherohasbeenclicked = false;
var donaldherohasbeenclicked = false;
var goofyherohasbeenclicked = false;

var attackbuttonclicked= false;



// assign a value to each of the characters based on their life Health


// do different combinations of player hero vs enemy picks with same math logic for each if then statements




// create an if clicked for each of the characters
    // inside each of these if clicked, create a show to have a green chosen border and


// create logic for start and reset buttons
    //reset so that characters all go to original position and reset button is hidden
    //and hides reset button.

$( ".start" ).on( "click", function() {
            start();
        })

$( ".attackbutton" ).on( "click", function() {
              subtract();
          })

function subtract(){
  var newenemyhp = currentenemyhp - heroattackvalue;
  console.log(newenemyhp);
}


function start(){
    $( '.startgamesection' ).hide();
    $( '.pickbuttoncontainer' ).show();
    $( '.playersstartContainer' ).hide();
    $( '.playerchooseContainer' ).show();
    $('.hpholdersora').html(sorahealth);
    $('.hpholderriku').html(rikuhealth);
    $('.hpholderdonald').html(donaldhealth);
    $('.hpholdergoofy').html(goofyhealth);


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
    soraherohasbeenclicked = true;
    currentherohp = 200;
    console.log(currentherohp);



}

function rikuselect(){
  $( '.playersstartContainer' ).hide();
  $( '.playerchooseContainer' ).hide();
  $( '.playerenemyContainer' ).show();
  $( '.pickbuttoncontainer' ).hide();
  $( '.versus' ).show();
  $( '.pickedrikucontainer' ).show();
  $( '.rikuenemy' ).hide();
  rikuherohasbeenclicked = true;
  currentherohp = 220;
  console.log(rikuherohasbeenclicked);

}

function donaldselect(){
  $( '.playersstartContainer' ).hide();
  $( '.playerchooseContainer' ).hide();
  $( '.playerenemyContainer' ).show();
    $( '.pickbuttoncontainer' ).hide();
    $( '.versus' ).show();
    $( '.pickeddonaldcontainer' ).show();
    $( '.donaldenemy' ).hide();
    donaldherohasbeenclicked = true;
    currentherohp = 160;
    console.log(donaldherohasbeenclicked);

}

function goofyselect(){
  $( '.playersstartContainer' ).hide();
    $( '.playerchooseContainer' ).hide();
  $( '.playerenemyContainer' ).show();
    $( '.pickbuttoncontainer' ).hide();
    $( '.versus' ).show();
    $( '.pickedgoofycontainer' ).show();
    $( '.goofyenemy' ).hide();
      goofyherohasbeenclicked = true;
      currentherohp = 180;
      console.log(goofyherohasbeenclicked);

}

//functions for if enemy character is selected
$( ".rikuenemy" ).on( "click", function() {
            rikuenemy();
          })

function rikuenemy(){
    $( '.rikuenemy' ).hide();
    $( '.rikuenemypickedcontainer' ).show();
     rikuenemyhasbeenclicked = true;
       $( '.attackbutton' ).show();
       currentenemyattack = 25;
       currentenemyhp = 220;
       console.log(currentenemyattack);
}



$( ".donaldenemy" ).on( "click", function() {
            donaldenemy();
          })

function donaldenemy(){
    $( '.donaldenemy' ).hide();
    $( '.donaldenemypickedcontainer' ).show();
      donaldenemyhasbeenclicked = true;
        $( '.attackbutton' ).show();
        currentenemyattack = 15;
        currentenemyhp = 160;
        console.log(donaldenemyhasbeenclicked);
}


$( ".goofyenemy" ).on( "click", function() {
            goofyenemy();
          })

function goofyenemy(){
    $( '.goofyenemy' ).hide();
    $( '.goofyenemypickedcontainer' ).show();
      goofyenemyhasbeenclicked = true;
        $( '.attackbutton' ).show();
        currentenemyattack = 18;
        currentenemyhp = 180;
        console.log(goofyenemyhasbeenclicked);
}


$( ".soraenemy" ).on( "click", function() {
            soraenemy();
          })

function soraenemy(){
    $( '.soraenemy' ).hide();
    $( '.soraenemypickedcontainer' ).show();
     soraenemyhasbeenclicked = true;
    $( '.attackbutton' ).show();
    currentenemyattack = 20;
    currentenemyhp = 200;
    console.log(soraenemyhasbeenclicked);
}
//end of functions for enemy selected


// if various hero enemy combos are true and attack button is clicked, then
// subtract hero attack from enemy Health
// then have hero take damage from Enemy
// then multiply hero damage * 2
// reset attack button so its waiting to be clicked again and will repeat the process
//global number will change so continue to be divided by Two
// if enemy health reaches 0 then hide them
// reset hero attack
