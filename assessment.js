function validateInput(array){
  if(!Array.isArray(array)){
    console.log('The argument should be an array')
    return false
  }

  for(const element of array){
    if(typeof element !== 'number' || element < 0){
      console.log('Elements of array should be 0 or positive number');
      return false;
    }
  }

  if(array.length < 2){
    console.log('Array should contain more than 1 element')
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
        return val;
      } 
      
      val++
    }
    
  }
}

findMissing([5,0,1,3,2]);
findMissing([7, 9,10, 11, 12]);

module.exports = findMissing;