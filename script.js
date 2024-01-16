//your JS code here. If required.
let selectedSquare;
const unrankedDropZone = document.getElementById("unranked-drop-zone");

//--ITEMS
document.querySelectorAll(".item").forEach((square) => {
  square.addEventListener("dragstart", (e) => (selectedSquare = e.target));
  square.addEventListener("dblclick", function () {
    if (this.parentElement != unrankedDropZone)
      unrankedDropZone.appendChild(this);
  });
});

//--ZONES
document.querySelectorAll(".drop-zone").forEach((dropZone) => {
  dropZone.addEventListener("dragover", (e) => e.preventDefault());
  dropZone.addEventListener("drop", function () {
    if (selectedSquare.parentElement === this) return;
    this.appendChild(selectedSquare);
  });
});