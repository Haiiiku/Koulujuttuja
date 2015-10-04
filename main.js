//Alustetaan elementit muuttujiin kun sivu on latautunut
document.addEventListener("DOMContentLoaded", function(event) {
  var title = document.getElementById("title");
  var desc = document.getElementById("desc");
  var color = document.getElementById("colortag");
});

function Submit() {
  CreateNote([title.value,desc.value,colortag.value]);
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
  noteDisplay.style.opacity = 1;

  //Listauksien "poisto" toiminto
  noteDisplay.addEventListener("click", function(event){
    var interval = setInterval(function(){
      noteDisplay.style.opacity -= 0.15;
      if (noteDisplay.style.opacity <= 0) {
        noteDisplay.style.display = "none";
        clearInterval(interval);
      }
    }, 50);
  });
  document.getElementById("nc").insertBefore(noteDisplay, document.getElementById("nc").childNodes[0]);
}
