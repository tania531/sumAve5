


// find the sum and average of
// 5, 10, 15, 20, 25, …, 1000

// {sum: _____, avg: ______}
var resultObj = {};
var sum = 0;
var length = 0;
function sumAndAverageInStepsOf5(end){

  for (var i = 5; i <= end; i += 5){
    sum = sum + i;
    console.log('i: ', i);
    length++;
  }

  resultObj.sum = sum;
  resultObj.ave = sum / length;
  return resultObj;
}

var result = sumAndAverageInStepsOf5(1000);
console.log(' resultObj: ', resultObj);
