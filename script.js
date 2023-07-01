var myElement = document.getElementById("tapThis");

myElement.addEventListener("click", function() {
  if (myElement.style.backgroundColor === "white") {
    myElement.style.backgroundColor = "black";
  } else {
    myElement.style.backgroundColor = "white";
  }
});
