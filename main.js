//Alustetaan elementit muuttujiin kun sivu on latautunut
document.addEventListener("DOMContentLoaded", function(event) {
  var title = document.getElementById("title");
  var desc = document.getElementById("desc");
  var color = document.getElementById("colortag");
  var noteHolder = document.getElementById("nc");


});
//Pikku muuttuuja fade funktioille
var fadeSpd = 0.05;

function Submit() {
  if(title.value == "" | desc.value == "") {
    var emptyFields = "";
    (title.value == "") ? emptyFields+="\n*Title" : "";
    (desc.value == "") ? emptyFields+="\n*Description" : "";
    alert("Fill all of the fields before submitting!\nFill the following fields:\n" + emptyFields)
  } else {
    CreateNote([title.value,desc.value,colortag.value,nc]);
  }
}

// Funktio joka luo listauksen.
function CreateNote(data) {
  var noteDisplay = document.createElement("li");
  var title = document.createElement("h1");
  var description = document.createElement("p");
  title.innerText = data[0];
  description.innerText = data[1];
  noteDisplay.appendChild(title);
  noteDisplay.appendChild(description);
  noteDisplay.style.background = data[2];
  noteDisplay.style.opacity = 0;

  FadeIn(noteDisplay);
  //Listauksien "poisto" toiminto
  noteDisplay.addEventListener("click", function(event){
    if (noteDisplay.style.opacity >= 1) {
      FadeOut(noteDisplay);
    }
  });
  var noteHolder = data[3];
  noteHolder.insertBefore(noteDisplay, noteHolder.childNodes[0]); //Lisää listauksen sivulle
}

function FadeIn(element) {
  var opacity = 0;
  var interval2 = setInterval(function(){
    opacity += fadeSpd;
    element.style.opacity = opacity; // Käytän apumuuttujaa opacity koska jos yritän suoraan suurentaa element.style.opacity += 0.05 niin se ei toimi.
    if(element.style.opacity >= 1) {
      console.log("finished");
      clearInterval(interval2);
    }
  }, 40);
}

function FadeOut(element) {
  var interval = setInterval(function(){
    element.style.opacity -= fadeSpd;
    if (element.style.opacity <= 0) {
      element.style.display = "none";
      document.getElementById(element);
      element.parentNode.removeChild(element)
      clearInterval(interval);
    }
  }, 40);
}
