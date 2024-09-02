const container = document.querySelector(".container");
const button = document.querySelector(".grid-size");

for (i = 1; i <= 256; i++){
    const div = document.createElement("div");
    div.style.cssText = "height: 37.5px; width: 37.5px;"
    container.appendChild(div);
    div.addEventListener("mouseover", () => {
        div.style.cssText = "height: 37.5px; width: 37.5px; background-color: black;";
    })
}

// button.addEventListener("click", () => {
//     container.replaceChildren();

//     do{
//         newGrid = +prompt("Enter new grid size", "Enter a number between 16 and 100");  
//     }
//     while(newGrid < 16 || newGrid > 100);

//     newGridSize = newGrid * newGrid;
//     squareSize = 600 / newGrid;
//     console.log(squareSize);

//     for (i = 1; i <= (newGridSize); i++){
//         const div = document.createElement("div");
//         div.style.cssText = "width:(squareSize)px; height:(squareSize)px; "
//         container.appendChild(div);
//         div.addEventListener("mouseover", () => {
//             div.style.cssText = "background-color: black;";
//         })
//     }

// })