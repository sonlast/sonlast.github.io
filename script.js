document.addEventListener("keydown", function (event) {
  if (event.altKey && event.key === "u") {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
  }
});
