document.getElementById("toggle").onclick = function() {toggleModal()};

function toggleModal() {
  // Find the modal and overlay
	modal = document.getElementById("modal");
  overlay = document.getElementById("overlay");

  // Open Modal
  modal.classList.toggle("open");

  // Open Overlay
  overlay.classList.toggle("open")

  // Check Anchor
  if(modal.offsetHeight > window.innerHeight) {
    modal.classList.toggle("anchored");
  }
}

document.getElementById("overlay").onclick = function(event) {
  overlay.classList.toggle("open")
  modal.classList.toggle("open");
}

// Autofill Date
var d = new Date();

var months = ["January ","February ","March ","April ","May ","June ","July ","August ","September ","October ","November ","December "];
var month = months[d.getMonth()];

document.getElementById('date').value = month + d.getDate() + ", " + d.getFullYear();
