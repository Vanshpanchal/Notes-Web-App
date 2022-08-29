console.log("hello");
// localStorage.clear();
show();
let input = document.getElementById('txt').value;

console.log(input);

let addbtn = document.getElementById('add');
console.log(addbtn);

addbtn.addEventListener("click", function (e) {
    let input = document.getElementById('txt');

    let html = document.createElement('div');
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        obj = [];
    }
    else {
        obj = JSON.parse(notes);
    }
    obj.push(input.value);
    localStorage.setItem("notes", JSON.stringify(obj));
    if (input.value == "") {
        alert(
            "Enter a valid Note")
    }

    else {

        show();
    }
    input.value = ""

}
)


function show() {
    let date = new Date()
    let month = date.getMonth() + 1;
    let time = date.getDate() + "-" + month + "-" + date.getFullYear();
    let input012 = document.getElementById('txt')
    if (input012.value == " ") {
        prompt("Are You Sure You Want To Enter A Empty Note ‼️")
    }
    let html = document.createElement('div');
    let input = document.getElementById('txt');


    let notes = localStorage.getItem("notes")
    if (notes == null) {
        obj = [];
    }
    else {
        obj = JSON.parse(notes);
        let hello = "";
        obj.forEach(function (element, index) {

            if (element == "") {

            }
            else {
                hello += `   <div class="box">
    <h3>
        note
    </h3>
    <p id=time> ${time} </p>
    <p id="data">
        ${element}
        
    </p>
    <button id=${index} onclick="del(this.id)">
        Delete Note
    </button>
</div>`
                console.log(element);
            }
        });

        let enter = document.getElementById('inside');

        let hey = "No Notes Yet‼️‼️"
        if (obj.length != 0) {
            enter.innerHTML = hello;
        }
        else {
            enter.innerHTML = hey;
        }
    }
}




function del(index) {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        obj = [];
    }
    else {
        obj = JSON.parse(notes);
    }

    obj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(obj));
    show();
}

function clr() {
    localStorage.clear()
    let enter = document.getElementById('inside');

    enter.innerHTML = "";

}
