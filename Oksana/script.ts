//basic exercise 1
let numArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result: any = document.getElementById("result1");
for(let i=0; i<numArr.length; i++) {
    console.log(numArr[i]);
    result.innerHTML += "<br>" + numArr[i] + "<br>";
    for(let v=0; v<numArr.length; v++){
       console.log(numArr[i] + " x " + numArr[v] + " = " + numArr[i]*numArr[v]); 
       result.innerHTML += numArr[i] + " x " + numArr[v] + " = " + numArr[i]*numArr[v] + "<br>";
    }
   
}
//end of basic exercise 1

//basic exercise 3
let names: string [] = ["John", ];