const workingArea = document.getElementById("workingArea");
const gridContainer = ['','','','','','','','','','','','','','',''];

gridContainer.map(function(){
    let rowContainer1 = document.createElement("div");
    workingArea.appendChild(rowContainer1);
    rowContainer1.setAttribute("class", "first-row");
});