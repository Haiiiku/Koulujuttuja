console.log("File loaded");

//Alustetaan elementit muuttujiin kun sivu on latautunut
document.addEventListener("DOMContentLoaded", function(event) {
  var title = document.getElementById("title");
  var desc = document.getElementById("desc");
  var expire = document.getElementById("expire");
});
function Submit() {
  //console.log(title.innerText);
  var thing = new NoteObject(title.value,desc.value,expire.value);
  //thing.returnInfo();
  CreateNote(thing.returnInfo());
}

function CreateNote(data) {
  var div = document.createElement('div');
  div.innerText = data[0];
  div.style.background="gray";
  div.style.color="white";
  div.style.width = "50px;";
  div.style.height = "50px;";
  document.getElementById("nc").appendChild(div);
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
