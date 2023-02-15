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
// let names: string [] = ["John", "Mary", "Paul", "Bill", "Emma", "Christine", "Tom"];
// let result13: any = document.getElementById("result13") as HTMLElement;
// let result23: any = document.getElementById("result23") as HTMLElement;
// let result33: any = document.getElementById("result33") as HTMLElement;

// for(let [i, val] of Object.entries(names)){
//     // console.log(i);
//     result13.innerHTML += i + "<br>";
// }
// for(let [i, val] of Object.entries(names)){
//     // console.log(val);
//     result23.innerHTML += val + "<br>";
// }
// for(let [i, val] of Object.entries(names)){
//     // console.log(i, val);
//     result33.innerHTML += i + " " + val + "<br>";
// }
//end of basic exercise 3


//basic exercise 2
let person: {fName: string, lName: string}[] = [
    {fName: "Oksana", lName: "Furman"}
];
let result1: any = document.getElementById("result1") as HTMLElement;
let result2: any = document.getElementById("result2") as HTMLElement;
let result3: any = document.getElementById("result3") as HTMLElement;
for(let i=0; i<10; i++){
    console.log(person[0].fName + " " + person[0].lName);
    result1.innerHTML += person[0].fName + " " + person[0].lName + "<br>";
    result2.innerHTML += person[0].fName + "<br>";
    setTimeout(() => {
        result3.innerHTML += person[0].lName + "<br>";
        console.log(person[0].lName)
      }, 5000);
}
//end of basic exercise 2