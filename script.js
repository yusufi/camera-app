(function ($window, $document) {


  var input = document.querySelector("#capture");

  input.addEventListener("change", appendImage);

  function appendImage(e) {
	var file = e.target;
	console.dir(file)
	var list = document.querySelector(".photos");
	var firstItem = list.firstChild;
	var newItem = createItem(file);
	list.insertBefore(newItem, firstItem);
  }

  function createItem(file) {
  	var newNode = document.createElement("li");
	var imgNode = document.createElement("img");
	imgNode.alt = file.name;
	newNode.appendChild(imgNode);
	return newNode;
  }


} (window, window.document))

