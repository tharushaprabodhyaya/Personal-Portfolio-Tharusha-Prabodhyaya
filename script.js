window.onload = function(){
  this.alert("Welcome to My Portfolio Website!");
}

document.addEventListener("copy", function (e) {
  e.preventDefault();
  alert("Copying content is disabled.");
});
