var enterBtn = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field

	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);


	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("X"));
	li.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", deleteListItem);

	function deleteListItem(){
		li.classList.add("delete")
	}
}

function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode ===13) { //this now looks to see if you hit "enter"/"return"
		createListElement();
	} 
}

enterBtn.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
