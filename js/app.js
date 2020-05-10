const tableElementA = document.getElementsByTagName(`td`).item(0);
const tableElementB = document.getElementsByTagName(`td`).item(1);
const tableElementC = document.getElementsByTagName(`td`).item(2);
const tableElementD = document.getElementsByTagName(`td`).item(3);

//All table items are rotated 180 degrees and turned mediumblue
let rotateA = () => {
    if (tableElementA.style.transform != `rotate(180deg)`) {
        tableElementA.style.transform = `rotate(180deg)`;
        tableElementA.style.color = `mediumblue`;
    }
    else reverseA();
    reverseB();
    reverseC();
    reverseD();
};

let rotateB = () => {
    if (tableElementB.style.transform != `rotate(180deg)`) {
        tableElementB.style.transform = `rotate(180deg)`;
        tableElementB.style.color = `mediumblue`;
    }
    else reverseB();
    reverseA();
    reverseC();
    reverseD();
};

let rotateC = () => {
    if (tableElementC.style.transform != `rotate(180deg)`) {
        tableElementC.style.transform = `rotate(180deg)`;
        tableElementC.style.color = `mediumblue`;
    }
    else reverseC();
    reverseA();
    reverseB();
    reverseD();
};

let rotateD = () => {
    if (tableElementD.style.transform != `rotate(180deg)`) {
        tableElementD.style.transform = `rotate(180deg)`;
        tableElementD.style.color = `mediumblue`;
    }
    else reverseD();
    reverseA();
    reverseB();
    reverseC();
};

//All table items are returned to 0 degrees of rotation and black color
let reverseA = () => {
    tableElementA.style.transform = `rotate(0deg)`;
    tableElementA.style.color = `black`;
};

let reverseB = () => {
    tableElementB.style.transform = `rotate(0deg)`;
    tableElementB.style.color = `black`;
};

let reverseC = () => {
    tableElementC.style.transform = `rotate(0deg)`;
    tableElementC.style.color = `black`;
};

let reverseD = () => {
    tableElementD.style.transform = `rotate(0deg)`;
    tableElementD.style.color = `black`;
};

tableElementA.addEventListener(`click`,rotateA);
tableElementB.addEventListener(`click`,rotateB);
tableElementC.addEventListener(`click`,rotateC);
tableElementD.addEventListener(`click`,rotateD);
