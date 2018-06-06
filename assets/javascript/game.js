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
$( '.dialoguebox' ).hide();


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
      attackbuttonclicked = true;
      dialogue();
     currentenemyhp = currentenemyhp - heroattackvalue;
     heroattackvalue = heroattackvalue * 2^5;
     currentherohp = currentherohp - currentenemyattack;
     $('.currentherohp').html(currentherohp);
     $('.currentenemyhp').html(currentenemyhp);
     console.log(currentenemyhp);
     console.log(currentherohp);
     if (soraenemyhasbeenclicked && currentenemyhp<=0) {
         $( '.soraenemypickedcontainer' ).hide();
     }

     if (rikuenemyhasbeenclicked && currentenemyhp<=0) {
         $( '.rikuenemypickedcontainer' ).hide();
     }

     if (donaldenemyhasbeenclicked && currentenemyhp<=0) {
         $( '.donaldenemypickedcontainer' ).hide();
     }

     if (goofyenemyhasbeenclicked && currentenemyhp<=0) {
         $( '.goofyenemypickedcontainer' ).hide();
     }

     if (rikuherohasbeenclicked && currentherohp<=0) {
         $( '.pickedrikucontainer' ).hide();
     }

     if (donaldherohasbeenclicked && currentherohp<=0) {
         $( '.pickeddonaldcontainer' ).hide();
     }

     if (soraherohasbeenclicked && currentherohp<=0) {
         $( '.pickedsoracontainer' ).hide();
     }

     if (goofyherohasbeenclicked && currentherohp<=0) {
         $( '.pickedgoofycontainer' ).hide();
     }
})


function start(){
    $( '.startgamesection' ).hide();
    $( '.pickbuttoncontainer' ).show();
    $( '.playersstartContainer' ).hide();
    $( '.playerchooseContainer' ).show();
    $('.currentherohp').html(currentherohp);
    $('.currentenemyhp').html(currentenemyhp);


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


//function for telling screen to print dialogue for attacks

function dialogue(){
//start of sora hero version

  if (soraherohasbeenclicked && rikuenemyhasbeenclicked) {

      alert("Sora attacked Riku for a value of " + heroattackvalue + "!");
      alert("Riku attacked Sora for a value of " + currentenemyattack + "!");
   }

  if (soraherohasbeenclicked && rikuenemyhasbeenclicked && attackbuttonclicked) {

      alert("Sora attacked Riku for a value of " + heroattackvalue + "!");
      alert("Riku attacked Sora for a value of " + currentenemyattack + "!");
   }

   if (soraherohasbeenclicked && donaldenemyhasbeenclicked && attackbuttonclicked) {

       alert("Sora attacked Donald for a value of " + heroattackvalue + "!");
       alert("Donald attacked Sora for a value of " + currentenemyattack + "!");
    }

    if (soraherohasbeenclicked && goofyenemyhasbeenclicked && attackbuttonclicked) {

        alert("Sora attacked Goofy for a value of " + heroattackvalue + "!");
        alert("Goofy attacked Sora for a value of " + currentenemyattack + "!");
     }

     // start of riku hero version

     if (rikuherohasbeenclicked && soraenemyhasbeenclicked && attackbuttonclicked) {

         alert("Riku attacked Sora for a value of " + heroattackvalue + "!");
         alert("Sora attacked Riku for a value of " + currentenemyattack + "!");
      }

      if (rikuherohasbeenclicked && donaldenemyhasbeenclicked && attackbuttonclicked) {

          alert("Riku attacked Donald for a value of " + heroattackvalue + "!");
          alert("Donald attacked Riku for a value of " + currentenemyattack + "!");
       }

    if (rikuherohasbeenclicked && goofyenemyhasbeenclicked && attackbuttonclicked) {

           alert("Riku attacked Goofy for a value of " + heroattackvalue + "!");
           alert("Goofy attacked Riku for a value of " + currentenemyattack + "!");
        }
// start of donald hero version
        if (donaldherohasbeenclicked && soraenemyhasbeenclicked && attackbuttonclicked) {

            alert("Donald attacked Sora for a value of " + heroattackvalue + "!");
            alert("Sora attacked Donald for a value of " + currentenemyattack + "!");
         }
         if (donaldherohasbeenclicked && rikuenemyhasbeenclicked && attackbuttonclicked) {

             alert("Donald attacked Riku for a value of " + heroattackvalue + "!");
            alert("Riku attacked Donald for a value of " + currentenemyattack + "!");
          }

          if (donaldherohasbeenclicked && goofyenemyhasbeenclicked && attackbuttonclicked) {

              alert("Donald attacked Goofy for a value of " + heroattackvalue + "!");
              alert("Goofy attacked Donald for a value of " + currentenemyattack + "!");
           }
// start of goofy hero version
           if (goofyherohasbeenclicked && soraenemyhasbeenclicked && attackbuttonclicked) {

              alert("Goofy attacked Sora for a value of " + heroattackvalue + "!");
              alert("Sora attacked Goofy for a value of " + currentenemyattack + "!");
            }

            if (goofyherohasbeenclicked && donaldenemyhasbeenclicked && attackbuttonclicked) {

              alert("Goofy attacked Donald for a value of " + heroattackvalue + "!");
              alert("Donald attacked Goofy for a value of " + currentenemyattack + "!");
             }

             if (goofyherohasbeenclicked && rikuenemyhasbeenclicked && attackbuttonclicked) {

              alert("Goofy attacked Riku for a value of " + heroattackvalue + "!");
              alert("Riku attacked Goofy for a value of " + currentenemyattack + "!");
              }

}

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
    $('.currentherohp').html(currentherohp);
    $('.currentenemyhp').html(currentenemyhp);
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
  $('.currentherohp').html(currentherohp);
  $('.currentenemyhp').html(currentenemyhp);
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
    $('.currentherohp').html(currentherohp);
    $('.currentenemyhp').html(currentenemyhp);
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
      $('.currentherohp').html(currentherohp);
      $('.currentenemyhp').html(currentenemyhp);
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
       $( '.dialoguebox' ).show();
       currentenemyattack = 25;
       currentenemyhp = 220;
       $('.currentherohp').html(currentherohp);
       $('.currentenemyhp').html(currentenemyhp);
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
        $( '.dialoguebox' ).show();
        currentenemyattack = 15;
        currentenemyhp = 160;
        $('.currentherohp').html(currentherohp);
        $('.currentenemyhp').html(currentenemyhp);
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
        $( '.dialoguebox' ).show();
        currentenemyattack = 18;
        currentenemyhp = 180;
        $('.currentherohp').html(currentherohp);
        $('.currentenemyhp').html(currentenemyhp);
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
    $( '.dialoguebox' ).show();
    currentenemyattack = 20;
    currentenemyhp = 200;
    $('.currentherohp').html(currentherohp);
    $('.currentenemyhp').html(currentenemyhp);
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
