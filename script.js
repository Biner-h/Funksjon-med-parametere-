/*OPPGAVE 1*/

function changeMe(text, color, size){
    document.getElementById("mainDiv").innerHTML = /*HTML*/`
    <div style="background-color:${color}; font-size: ${size}px;">${text}</div> 
    `;
}

/*OPPGAVE 2*/

let testList = [1, 2, 3, 4];

function goThroughList() {
    for (let item of testList) {
        console.log(item);
    };
};

let colorChange;

function changeBody(){
    document.body.style.backgroundColor = colorChange;
}

function setColor(element, color){
    console.log("colorChange before function: ", colorChange);
    for (let child of element.parentElement.children) {
        child.classList.remove("border");
    };
    element.classList.add('border');
    colorChange = color;
    console.log("colorChange after function: ", colorChange);
};

function changeBox(element){
    element.style.backgroundColor = colorChange
}

function changeAllDivs(element) {
    let number = 0;
    let incrementBy = 10;
    for (let child of element.children) {
        child.textContent = number;
        number += incrementBy;
    };
};