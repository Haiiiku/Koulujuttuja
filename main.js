//Alustetaan elementit muuttujiin kun sivu on latautunut
document.addEventListener("DOMContentLoaded", function(event) {
  var title = document.getElementById("title");
  var desc = document.getElementById("desc");
  var expire = document.getElementById("expire");
});

notes = [];
function Submit() {
  //console.log(title.innerText);
  notes.push(new NoteObject(title.value,desc.value,expire.value));
  //thing.returnInfo();
  /*notes[notes.length-1].addEventListener("onClick", function(event){
    alert("hi");
  });*/
  CreateNote(notes[notes.length-1].returnInfo());
}

function CreateNote(data) {
  var noteDisplay = document.createElement("li");
  var title = document.createElement("h1");
  var description = document.createElement("p");
  title.innerText = data[0];
  description.innerText = data[1];
  noteDisplay.appendChild(title);
  noteDisplay.appendChild(description);
  /*  noteDisplay.style.background="gray";
  noteDisplay.style.color="white";
  noteDisplay.style.width = "50px;";
  noteDisplay.style.height = "50px;"; */
  document.getElementById("nc").insertBefore(noteDisplay, document.getElementById("nc").childNodes[0]);
  console.log("Tried to create div");
}


// Objekti to-do listauksille
function NoteObject(noteTitle,noteDescription,noteExpire) {
  this.nTitle = noteTitle;
  this.nDesc = noteDescription;
  this.nExpire = noteExpire;

  this.returnInfo = ReturnInfo;
}

function ReturnInfo() {
  var info = [this.nTitle,this.nDesc,this.nExpire];
  return info;
}
