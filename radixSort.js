function getIndex(num, ind){
  let index = num.toString();
  return index[Math.abs(index.length-ind-1)] || 0;
}

function getLength(num){
  return Math.abs(num).toString().length;
}

function mostDigits(arr){
 let max = 0;
  arr.forEach((num)=>{
    if (max<getLength(num)){
      max = getLength(num)
    }
  })
  return max;
}


function radixSort(arr){
  for (let i=0; i<mostDigits(arr); i++){
		let list = Array.from({length : 10}, () => []);
  		for (let k=0; k<arr.length; k++){
					console.log(arr[k], i);
	        list[getIndex(arr[k], i)].push(arr[k])
      }
			arr = [].concat(...list)
  }
	return arr;
}
// radixSort([22,6115,718,43])
getIndex(22,3)
  
    