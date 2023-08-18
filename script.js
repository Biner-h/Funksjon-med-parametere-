/*OPPGAVE 1*/

function changeMe(text, color, size){
    document.getElementById("mainDiv").innerHTML = /*HTML*/`
    <div style="background-color:${color}; font-size: ${size}px;">${text}</div> 
    `;
}

/*OPPGAVE 2*/

function changeBackground(color){
    document.getElementById("secondId").innerHTML = /*HTML*/`
    <div style="background-color:${color};"></div> 
    `;
}

function changeBackground(color){
    document.getElementById("thirdId").innerHTML = /*HTML*/`
    <div style="background-color:${color};"></div> 
    `;
}

function changeBackground(color){
    document.getElementById("fourthId").innerHTML = /*HTML*/`
    <div style="background-color:${color};"></div> 
    `;
}