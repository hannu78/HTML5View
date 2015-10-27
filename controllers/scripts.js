console.log("Here we go!!");

window.onload = function(event) {
    //"use strict";
    console.log(event);
    para1.innerHTML = "Changed from JS";
    para1.style.backgroundColor = "blue";
    var temp = document.createElement("p");
    temp.innerHTML = "New element";
    para1.appendChild(temp);
};

function domReady(event) {
    "use strict";
    return 2;
}

//window.onload = domReady;

function someFunction(nimi) {
    "use strict";
    console.log(nimi);
}

someFunction();
someFunction("Hannu");