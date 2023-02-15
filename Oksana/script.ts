let numArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i=0; i<numArr.length; i++) {
    console.log(numArr[i]);
    for(let v=0; v<numArr.length; v++){
       console.log(numArr[i] + " x " + numArr[v] + " = " + numArr[i]*numArr[v]); 
      
    }
   
}


