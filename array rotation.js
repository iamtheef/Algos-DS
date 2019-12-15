  
function rotate(arr){
  var n = arr.length;
  var temp = [];
  var rotated = [];
  for (var i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
        temp.push(arr[j][i]);
    }
    temp = temp.reverse();
    rotated.push(temp.splice(0,n))
  }
    return rotated;
}

rotate([[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]);