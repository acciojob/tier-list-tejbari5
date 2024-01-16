//your JS code here. If required.
let dropZones = document.querySelectorAll(".drop-zone");
let items = document.querySelectorAll(".item");
let dragItem = null;
for ( let i = 0; i < items.length; i++ ){
    items[i].addEventListener("dragstart", onDragStart);
}
for (let i = 0; i < dropZones.length; i++ ){
    dropZones[i].addEventListener("dragover", onDragOver);
    dropZones[i].addEventListener("drop", onDrop);
}
function onDragStart(event){
    
    dragItem = event.target;
}
function onDragOver(event){
    
    event.preventDefault();
}
function onDrop(event){
    
    event.target.appendChild(dragItem);
}