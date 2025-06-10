const screen = document.getElementById("screen-input")
const buttons = document.querySelectorAll(".button button")


// console.log(buttons);
// console.log(buttons[14].innerHTML);



// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         let content = button.innerHTML
//         expression = ["12", "+", "7"];
//         screen.value = expression.join("");

//         if (button.dataset.action === "delete"){
//             content = ""
//             screen.value = screen.value.slice(0, -1);
//         } else if (content === "=") {
//             eval(expression.join(""));
//         }
//         screen.value += content; 
//     })
// });


// result
expression = ["12", "+", "7"];
console.log(expression);
expression.forEach(item => {
    if (!isNaN(item)){
        item = Number(item);
    }
});
console.log(expression);
expression.forEach(item => {
    
});


