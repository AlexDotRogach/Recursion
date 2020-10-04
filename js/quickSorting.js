"use strict";

document.addEventListener('DOMContentLoaded', () => {
  
    const arr = [20,30,10,5,2,1,23,2000,2000,42,89,543,23,2000,12132];
    
// the first variant 
    const quickSort = arr => {

            if (arr.length < 2) {
                return arr;
            } 

            //random value
            const pivot = arr[randomNumber(arr.length - 1)];
            // middle value
            // const pivot = arr[Math.round(arr.length / 2)]; 
            const low = arr.filter(value => value < pivot);
            const high = arr.filter(value => value > pivot);
            const repeat = arr.filter(value => value == pivot);
            return [...quickSort(low), ...repeat, ...quickSort(high)];
            
        };

    console.log(quickSort(arr));

    function randomNumber(range) {
        return Math.round(Math.random() * range);
    }

// the second variant 
// if you want to cut down on amount actions 
   
    const partitionArray = (arr, low, high) => {

        const pivot = arr[Math.round(Math.random() * arr.length)];

        while (high > low) {
            while (arr[high] > pivot) {
                high--;
            } 

            while (arr[low] < pivot) {
                low ++;
            }

            if (high > low) {
                const tmp = arr[low];

                arr[low] = arr[high];
                arr[high] = tmp;
                high--;
                low++;
            }
        }
        
        return low;
    };

    const qsort = (arr, low = 0, high = arr.length - 1) => {

        if (low < high) {
            const index = partitionArray(arr, low, high);
            qsort(arr, low, index - 1);
            qsort(arr, index, high);
        }
        return arr;
    };
    
    console.log(qsort(arr));
});

