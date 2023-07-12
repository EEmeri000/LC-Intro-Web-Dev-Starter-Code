//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

function minimumFunc(arr) {
    let min = arr[0]
    let i = 0 
    while ( i < arr.length) {
      if (arr[i] < min) {
        min = arr[i]
      }
      i++
    }
    
    return min
  }
  
    
  
  //Sample arrays for testing:
  let nums1 = [5, 10, 2, 42];
  let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
  let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
  
  
  
  //Using one of the test arrays as the argument, call your function inside the console.log statement below.
  
  
  
  console.log(minimumFunc(nums3));
  
  
  
  function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }
  
  
  
  //Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.
    
  
  //Within the function:
  
  //a) Define a new, empty array to hold the final sorted numbers.
  
    
  //b) Use the findMinValue function to find the minimum value in the old array.
  
    
  //c) Add the minimum value to the new array, and remove the minimum value from the old array.
  
  //d) Repeat parts b & c until the old array is empty.
  
  //e) Return the new sorted array.
  
    
  //f) Be sure to print the results in order to verify your code.
  
  
  //Your function here...
  function sortNums(arr){
    let sortedArray=[];
    while(arr.length>0){
      let min= findMinValue(arr);
      sortedArray.push(min);
      arr.splice(arr.indexOf(min), 1);
    }
    return sortedArray;
  }
  console.log(sortNums(nums1));
  console.log(sortNums(nums2));
  console.log(sortNums(nums3));
  console.log(nums2)
  
  
  //Part 3
  //Sample arrays for testing:
  
  
  //Sort each array in ascending order.
  nums1.sort(function(a,b) {return a-b});
  console.log(nums1);
  
  
  
  //Sort each array in decending order.
  
  nums2.sort(function(b,a) {return a-b});
  console.log(nums2);
  
  nums3.sort(function(a,b){return b-a;
  });
  console.log(nums3);
  
  console.log("\n")
  console.log('Bonus\n');
  
  let nums1a = [5, 10, 2, 42];
  let nums2b= [-2, 0, -10, -44, 5, 3, 0, 3];
  let nums3c= [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
  
  function sortNumsRec(arr, sorted=[]){
    if(arr.length===0){
      return sorted;
    }
    let min= findMinValue(arr);
    sorted.push(min);
    arr.splice(arr.indexOf(min), 1);
    return sortNumsRec(arr, sorted);
  }
  console.log(sortNumsRec(nums1a));
  console.log(sortNumsRec(nums2b));
  console.log(sortNumsRec(nums3c));
  
  function sortArray(unsortedArray) {
      let newArray = [];
      while(unsortedArray.length !== 0) {
          let smallestValue = findMinValue(unsortedArray);
          newArray.push(smallestValue);
          unsortedArray.splice(unsortedArray.indexOf(smallestValue),1);
      }
      return newArray;
  }
  
  
  // that is the solution to 11.11.1.2
  // when sorting the old array into a new one (edited) 
  
  //With findMinValue being the function to find the minimum value in the array: 
  // function findMinValue(arr) {
  //   let min = arr[0]
  //   let i = 0
  //   while ( i < arr.length ) {
  //     if (arr[i] < min) {
  //       min = arr[i]
  //     }
  //     i++
  //   }
  //   return min
  // }
  
  //lastly this is the recursive version of the sort function created;
  
  function recursiveSortArray (unsortedArray, newArray=[]){
      if (unsortedArray.length===1){
          newArray.push(unsortedArray[0]);
      } else {
          newArray.push(findMinValue(unsortedArray));
          unsortedArray.splice(unsortedArray.indexOf(findMinValue(unsortedArray)),1);
          recursiveSortArray(unsortedArray,newArray);
      }
      return newArray;
  }