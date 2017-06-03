function max(arr){
  var ma = arr[0];
  for(var i of arr){
    if (ma < i) {
      ma = i;
    }
  }
  return ma;
}

module.exports = function(list){
  var firstmin = list[0];
  var i = 0;
  for(i = 0; i < list.length; i++){
    if (firstmin < list[i]) {
      console.log("breaking");
      break;
    }
    else{
      console.log("smaller value found");
      firstmin = list[i];
    }
  }
  console.log(firstmin);

  var restArr = list.slice(i);
  if (restArr.length === 0) {
    return -1;
  }
  var secondMax = max(restArr);

  console.log("result is " + (secondMax - firstmin));
  return secondMax - firstmin;
}