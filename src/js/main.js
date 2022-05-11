const workingArea = document.getElementById("workingArea");
const gridContainer =
[['','','','','','','','','','','','','','',''],
['','','','','','','','','','','','','','',''],
['','','','','','','','','','','','','','',''],
['','','','','','','','','','','','','','',''],
['','','','','','','','','','','','','','',''],
['','','','','','','','','','','','','','',''],
['','','','','','','','','','','','','','',''],
];
let index = 0;


gridContainer.map(function(row){
    index ++;
    let rowContainer = document.createElement("div");
    rowContainer.classList.add("first-row");
    rowContainer.setAttribute("id", "Row" + index);

    row.map(function () {
        let bricks = document.createElement("div");
        bricks.setAttribute("id","bricks");
        bricks.classList.add("bricks");


        rowContainer.appendChild(bricks);
    });

    workingArea.appendChild(rowContainer);
});