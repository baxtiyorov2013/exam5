document.getElementById("form").addEventListener("submit", function name(event) {
    event.preventDefault();

    const modemId = document.getElementById("form-inp").value;
    const password = document.getElementById("inp").value;

    if (modemId === "702207" && password === "75849") {
        alert("Siz ro'yhtingiz otingiz") ;
    } else {
        const newElement = document.createElement("p");
        alert("Hato");
    }
});
const domtext = document.getElementById("text")
document.getElementById("btn1").addEventListener("click", function btnfunction() {
   let savol = prompt("Savol kriting");
   domtext.innerText = savol
})