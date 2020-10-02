"use strict";

document.addEventListener('DOMContentLoaded', () => {
  
    let arr = [20,1,2000,30,5,5,4,2,9], num = 5;

    function start(arr, num) {
        let i = 0;

        function theSecond() {

            if (arr[i] > arr[i+1]) {

            let box = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = box;
                i++;
                theSecond();
            }

            if (arr[i] < arr[i+1]) {
                i++;
                theSecond();
            }

            if (arr[i] == arr[i+1]) {
                i++;
                theSecond();
            }

            i = 0;
        }

        theSecond();
        
        let low = 0, high = arr[arr.length - 1], mid = 0;

        function binarSearch(num) {


            if (num > low) {

            }
            
        }
    }

    start(arr, num);
    console.log(arr);
});
