const workingArea = document.getElementById("workingArea");
const gridContainer = ['','','','','','','','','','','','','','',''];

gridContainer.map(function(){

    let rowContainer = document.createElement("div");
    workingArea.appendChild(rowContainer);
    rowContainer.setAttribute("class", "first-row");
});