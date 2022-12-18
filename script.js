let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let list = document.getElementsByTagName("li");
let buttons = document.getElementsByClassName("btn");
let makeArray = Array.from(list);
let makeArrayTwo = Array.from(buttons);
console.log(buttons)


function inputLenght(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    var div = document.createElement("div");
    var button = document.createElement("button");
    ul.appendChild(div);
    div.classList.add('flex','w-100','pa3', 'mt2', 'v-mid', 'center', 'animate__animated', 'animate__pulse');
    li.appendChild(document.createTextNode(input.value));
    li.classList.add('f4');
    div.appendChild(li);
    input.value="";
    button.innerText = "Delete";
    button.classList.add("btn",'dim', 'f5', 'b--light-purple');
    div.appendChild(button);
    li.addEventListener("click", () => {
        li.classList.toggle("done");
    })
    button.addEventListener("click", () => {
        ul=div.parentNode
        ul.removeChild(div);
    })
}

function addListAfterClick() {
        if ( inputLenght() > 0) {
            createListElement();
        }
}

button.addEventListener("click", addListAfterClick);

function addListAfterKeypress(event){
        if ( inputLenght() > 0 && event.which === 13) {
            createListElement();
        }
}

input.addEventListener("keypress", addListAfterKeypress);

function addClassDone() {
    makeArray.forEach(element => {
        element.addEventListener("click", () => {
            element.classList.toggle("done");
            console.log(makeArray);
        })
    });
}

addClassDone();

var div = document.querySelector("div")

function deleteListItem() {
    makeArrayTwo.forEach(element => {
        element.addEventListener("click", () => {
            console.log("deleteListItem()");
            div=element.parentNode;
            ul=div.parentNode
            ul.removeChild(div);
        })
    })
}

deleteListItem();












