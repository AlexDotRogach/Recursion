"use strict";

document.addEventListener('DOMContentLoaded', () => {
  
    let someArray = [20,1,2000,30,6,6,77,3,2,4,5,5,4,2,9], num = 21;

    function start(arr, num) {

        let i = 0;

        function bubbleSort() {

            if (arr[i] > arr[i+1]) {

            let box = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = box;
                i++;
                bubbleSort();
            }

            if (arr[i] < arr[i+1]) {
                i++;
                bubbleSort();
            }

            if (arr[i] == arr[i+1]) {
                i++;
                bubbleSort();
            }

            i = 0;
        }

        bubbleSort();

        let low = 0, high = arr.length - 1, mid = 0, message = '';
        
        binarSearch();

        function binarSearch() {

            mid = Math.round((high + low) / 2);

            if (high == low) {
                message = 'false';
                return message;
            }

            if (num < arr[mid]) {
                high = mid - 1;
                binarSearch();
            } 

            if (num > arr[mid]) {
                low = mid + 1;
                binarSearch();
            }

            if (arr[mid] == num) {
                message = 'true';
                return message;
            }
        }

        return message;
    }

    console.log(start(someArray, num));

});

