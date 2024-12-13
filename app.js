const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

inputBox.addEventListener("keyup", function (event) {
	if (event.key == "Enter") {
		addTask();
    saveData();
	}
});

function addTask() {
	if (inputBox === "") {
		alert("you must write something");
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7"; //for cross icon
		li.appendChild(span); // to display the cross icon
	}
	inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
	if (e.target.tagName === "LI") {
		//if we click in "li"
		e.target.classList.toggle("checked");
    saveData();
	} else if (e.target.tagName === "SPAN") {
		//if we click in "span" (cross)
		e.target.parentElement.remove();
    saveData();
	}
},false);

function saveData(){
  //whatever code in listContainer all store as a data
  localStorage.setItem("data",listContainer.innerHTML);
}
function showItem(){
  //we will display the "data" to getItem
  listContainer.innerHTML=localStorage.getItem("data");
}
showItem();

