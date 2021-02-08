"use strict";

// I am searching a number what have a word "m";

let graph = {};

graph["start"] = ["1","2","3"];
graph["1"] = ["4","6"];
graph["4"] = [];
graph["6"] = [];
graph["2"] = ["8"];
graph["8"]= ["9"];
graph["9"] = ["3","10m"];
graph["3"] = ["5","7"];
graph["7"] = ["5"];
graph["5"] = [];
graph["10m"] = [];

// ----------- Simple ------------------

// function search(nameNode) {

//     let done = true;
//     let dec = [nameNode];
//     let checked =  [];
//     let counter = 0;

//     while(done) {
        
//         if (dec[0].includes('m')) {
//             console.log('true');
//             done = false;
//         } else {

//             for (let d = 0; d < checked.length; d++) {
                
//                 if (dec[0] == checked[d]) {
//                     dec.shift();
//                     break;
//                 } 
//             }

//             for (let i = 0; i < graph[dec[0]].length; i++) {
//                 dec.push(graph[dec[0]][i]);
//             }
//             checked.push(dec[0]);
//             dec.shift();
//         }
//     }
// }

// search("start");


// ------------------ Recursion --------------------- 

function breadthFirstSearch(nameNode) {

    let dec = [nameNode];
    let checked = [];

    recursion();

    function recursion() {

        if (dec.length == 0) {
            return;
        }

        if (dec[0].includes('m')) {
            console.log(dec[0]);
            return;

        } else {
            
            if (check(dec[0], checked)) {
                console.log('this element was');
                dec.shift();
                recursion();
            } 

            checked.push(dec[0]);
            dec = addDec(dec[0], dec);
            dec.shift();
            recursion();
            
        }
    }

    return;
}

function addDec(node, arr) {

    let i = 0;

    recursion();

    function recursion() {
        
        if (!node) {
            return;
        }

        if (i == graph[node].length) {
            return arr;

        } else {
            arr.push(graph[node][i]);
            i++;
            recursion();
        }
    }
    
    return arr;
}

function check(element, arr) {

    let i = 0;
    let mark = false;

    recursion(); 

    function recursion() {

        if (i == arr.length) {
            return;
        }

        if (element == arr[i]) {
            mark = true;

        } else {
            i++;
            recursion();
        }
    }

    return mark;
}


breadthFirstSearch("start");
