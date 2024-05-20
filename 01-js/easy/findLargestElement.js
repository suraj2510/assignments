/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {    
    if(numbers===0){
        return 0;
    }
    int max= numbers[0]
    for(let i=0;i<numbers;i++){
      if(numbers[i]>max[i]){
          max[i]= numbers[i]
      }  
    }
    return max;
}

module.exports = findLargestElement;
