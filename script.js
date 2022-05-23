const container = document.querySelector(".container");
const btnChange = document.querySelector(".change");
const btnClear = document.querySelector(".clear");

btnChange.addEventListener("click", () => {
    let nodeCount = prompt("Enter number of pixels per side. Maximum 100");
    if (isNumber(nodeCount)) {
        clearNodes();
        addNodes(nodeCount);
    }
});

btnClear.addEventListener("click", () => {
    const allNodes = Array.from(document.querySelectorAll(".node"));
    allNodes.forEach(node => node.style.backgroundColor = "white");
});

function addNodes(nodes) {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    if (nodes > 100) nodes = 100;
    
    for (let i = 0; i < nodes * nodes; i++) {
        const node = document.createElement("div");
        node.classList.add("node");
        node.style.width = containerWidth / nodes + "px";
        node.style.height = containerHeight / nodes + "px";
        container.appendChild(node);

    }
    const allNodes = Array.from(document.querySelectorAll(".node"));
    allNodes.forEach(node => node.addEventListener("mouseover", changeColor));
}

addNodes(50);

function changeColor() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = randomColor;
}


function isNumber(str) {
    if (typeof str !== "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}

function clearNodes() {
    const allNodes = Array.from(document.querySelectorAll(".node"));
    allNodes.forEach(node => node.remove());
}