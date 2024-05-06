function validateInput(array){
  if(!Array.isArray(array)){
    console.error('The argument should be an array')
    return false
  }

  for(const element of array){
    if(typeof element !== 'number' || element < 0){
      console.error('Elements of array should be 0 or positive number');
      return false;
    }
  }

  if(array.length < 2){
    console.error('Array should contain more than 1 element')
    return false
  }
return true;
}


function findMissing(array){

  if(validateInput(array)) {
    
    const minValue = Math.min(...array);
    const sortedArr = array.sort((a,b) => a-b);
    let val = minValue
    
    if (sortedArr.every((element, index) => element === val + index)) {
      console.log('No missing number');
      return;
    }
    
    for(let i=0; i < sortedArr.length; i++){
      if(val !== sortedArr[i]){
        console.log(val)
        break;
      } 
      
      val++
    }
    
  }
}


findMissing('a');
findMissing(['a']);
findMissing(['a', 'b', 'c']);
findMissing([4, 'a', 'b']);
findMissing([4]);
findMissing([4,5]);
findMissing([4,5,6]);
findMissing([4,6]);
