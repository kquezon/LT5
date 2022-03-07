//a function needed for the css element to change the text color
function DarkModeON() {
    var btn = document.body;
    btn.classList.toggle("dark-mode");
    
  }

  //This changes the text of the button
  var clicked= false;
function DMode(){
    
    if(!clicked){
        clicked = true;
        document.getElementById("btn").innerHTML = "DarkModeOFF";
    } else{
        clicked = false;
        document.getElementById("btn").innerHTML = "DarkModeON";
    }
    
}

//This switches the themes for the website
function Dark(){
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'LT5.css') { 
        theme.setAttribute('href', 'LT4-1.css'); 
    } else { 
        theme.setAttribute('href', 'LT5.css'); 
    } 
}

//Gi isahan ko nalang ang functions sa isang function
function BtnClick(){
    DarkModeON()
    DMode()
    Dark()
}
