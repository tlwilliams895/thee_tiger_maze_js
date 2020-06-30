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

let positionRow;
let positionCol;

const maze_element = document.getElementById("maze");
// createMaze variable function provide by Randy during Demo
// Completed assessment with personal study group (Deidre B and Elisia B)
const createMaze = function (blueprint) {
    for (let rowNum = 0; rowNum < blueprint.length; rowNum++) {
        const rowString = blueprint[rowNum];
        let div_blocks = "";

        for (let colNum = 0; colNum < rowString.length; colNum++) {
            const blockType = rowString[colNum];

            if (blockType === "W") {
                div_blocks += `<div class="block wall" data-column="${colNum}" data-row="${rowNum}"></div>`;
            } else if (blockType === "S") {
                div_blocks += `<div class="block" id="start" data-column="${colNum}" data-row="${rowNum}"></div>`;
                positionRow = rowNum;
                positionCol = colNum;
            } else if (blockType === "F") {
                div_blocks += `<div class="block finish" data-column="${colNum}" data-row="${rowNum}"></div>`
            } else {
                div_blocks += `<div class="block" data-column="${colNum}" data-row="${rowNum}"></div>`;
            }
        }
        maze_element.innerHTML += `<div class="row">${div_blocks}</div>`;
    }

    // Create the box/user and starting position 
    let box = document.createElement("div");
    box.id = "box";
    document.getElementById("start").appendChild(box);


    // Check to see if Tiger is inside the board and not a wall
    function canMove(colNum, rowNum) {
        let move_box = document.querySelector(`[data-column="${colNum}" ][data-row="${rowNum}"]`);

        if (move_box.classList.contains("wall") === false) {
            let box = document.getElementById("box");
            box.parentNode.removeChild(box);
            move_box.appendChild(box);

            positionRow = rowNum;
            positionCol = colNum;

            // If-Statement for Winning Condition - Check if user reached the "F" position, then the game is over. 
            if (move_box.classList.contains("finish")) {
                document.getElementById("gamePlay").innerText = "Congratulations! You made it through the Tiger Maze!";
            }
        }
        //return (positionY >= 0) && (positionY < map.length) && (positionX >= 0) && (positionX < map[positionY].length) && (map[positionY][positionX] != 1);
    }

    document.addEventListener('keydown', logKey);

    function logKey(tiger) {
        event.preventDefault();
        //log.textContent += ` ${e.code}`;
        let rowNum = positionRow;
        let colNum = positionCol;

        switch (tiger.code) {
            // switch ((tiger.code) && (canMove)) {
            case "ArrowUp":
                rowNum--;
                // boxElement = (boxTop -= 10);
                break;
            case "ArrowDown":
                rowNum++;
                // boxElement = (boxTop += 10);
                break;
            case "ArrowRight":
                colNum++;
                // boxElement = (boxLeft += 10);
                break;
            case "ArrowLeft":
                colNum--;
                // boxElement = (boxLeft -= 10);
                break;
                //default:
                //return;
        }
        canMove(colNum, rowNum);
    }

}
createMaze(map);

// let blockSize = 10;

// let playerPosition = {
//     x: 0,
//     y: 0
// };