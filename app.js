let button = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

button.addEventListener("click", function() {
    let iteam = document.createElement("li");
    iteam.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    iteam.appendChild(delBtn);

    ul.appendChild(iteam);
    inp.value = "";
    
})

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON"){
        let itamlist = event.target.parentElement;
        itamlist.remove();
    }
    console.log("button")
})

// let delBtns = document.querySelectorAll(".delete");

// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }