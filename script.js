//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.item');
  const dropZones = document.querySelectorAll('.drop-zone');

  let draggedItem = null;

  function handleDragStart(event) {
    draggedItem = event.target;
    event.dataTransfer.setData('text/plain', ''); // Required for Firefox to initiate drag
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const dropZone = event.target.closest('.drop-zone');

    if (dropZone && !dropZone.contains(draggedItem)) {
      dropZone.appendChild(draggedItem);
    }

    draggedItem = null;
  }

  function handleDoubleClick(event) {
    const unrankedDropZone = document.getElementById('unranked-drop-zone');
    if (event.target.classList.contains('item') && !unrankedDropZone.contains(event.target)) {
      unrankedDropZone.appendChild(event.target);
    }
  }

  items.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dblclick', handleDoubleClick);
  });

  dropZones.forEach(dropZone => {
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('drop', handleDrop);
  });
});