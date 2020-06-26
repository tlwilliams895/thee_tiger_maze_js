// Use Multiplication Table and Keydown Events assessments
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let x;
let y;

const maze_element = document.getElementById("maze");

const creatMaze = function (blueprint) {
    for (let rowNum = 0; rowNum < blueprint.length; rowNum++) {
        const rowString = blueprint[rowNum];
        let div_blocks = "";

        for (let colNum = 0; colNum < rowString.length; colNum++) {
            const blockType = rowString[colNum];
            if (blockType === "W") {
                div_blocks += `<div class="block wall"></div>`;
            } else if (blockType === "S") {
                div_blocks += `<div class="block start"></div>`;
                x = colNum;
                y = rowNum;
            } else {
                div_blocks += `<div class="block"></div>`;
            }
        }
        maze_element.innerHTML += `<div class="row">${div_blocks}</div>`;
    }
}
creatMaze(map);