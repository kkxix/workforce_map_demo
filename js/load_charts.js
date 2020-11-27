import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@kkxix/multi-line-chart.js?v=3";

const main = (new Runtime).module(define, name => {
    if (name === "chart") return Inspector.into(".GSI-chart")();
});

var state_svgs = document.getElementsByClassName("state");

var myFunction = function () {
    var name = this.getAttribute('id').trim();
    main.redefine("state", name);
}

Array.from(state_svgs).forEach(function (s) {
    s.addEventListener('click', myFunction);
});

        // document.getElementById("myBtn").addEventListener("click", function () {
        //         document.getElementById("demo").innerHTML = "Hello World";
        //     });

        // (async function () {
        //     // Redefine the cell `data` as the local file population.json; 
        //     // it will update in the element previously given to the Inspector above
        //     const name = document.getElementById("state_name").textContent;
        //     main.redefine("state_input", name);
        // })()