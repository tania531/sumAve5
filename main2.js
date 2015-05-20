

// find the sum and average of
// 5, 10, 15, 20, 25, …, 1000
// var result = sumAndAverageInStepsOf5(1000);
// console.log(result)
// {sum: __30__, avg: ___10___}

var arr = [5, 10, 15];
var sum = 0;

var ave = 0;

// function sumAndAverageInStepsOf5(arr){
//   return sum = arr.reduce(function(previousValue, currentValue, arr) {
//     previousValue + currentValue;
//   });
// }
//
// console.log(sum);
//
//
// arr.forEach(function(a, i){
//
// })
 var result = {};

 var len = arr.length;
 console.log('len: ', len);



for(var i = 0; i < arr.length; i++){
  result.sum = arr[i] += arr[i];

   result.ave =  ((arr[i] += arr[i])/arr.length);

   return result;

}


console.log('sum: ', result.sum);

console.log('ave: ', result.ave);
