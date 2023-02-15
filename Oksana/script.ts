//basic exercise 1
// let numArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result1: any = document.getElementById("result1");
// for(let i=0; i<numArr.length; i++) {
//     console.log(numArr[i]);
//     result1.innerHTML += "<br>" + numArr[i] + "<br>";
//     for(let v=0; v<numArr.length; v++){
//        console.log(numArr[i] + " x " + numArr[v] + " = " + numArr[i]*numArr[v]); 
//        result1.innerHTML += numArr[i] + " x " + numArr[v] + " = " + numArr[i]*numArr [v] + "<br>";
//     } 
// }
//end of basic exercise 1

//basic exercise 3
let names: string [] = ["John", "Mary", "Paul", "Bill", "Emma", "Christine", "Tom"];
let result13: any = document.getElementById("result13") as HTMLElement;
let result23: any = document.getElementById("result23") as HTMLElement;
let result33: any = document.getElementById("result33") as HTMLElement;

for(let [i, val] of Object.entries(names)){
    // console.log(i);
    result13.innerHTML += i + "<br>";
}
for(let [i, val] of Object.entries(names)){
    // console.log(val);
    result23.innerHTML += val + "<br>";
}
for(let [i, val] of Object.entries(names)){
    // console.log(i, val);
    result33.innerHTML += i + " " + val + "<br>";
}
//end of basic exercise 3

//basic exercise 2
// let person: {}[] = [
//     {fName: "Oksana", lName: "Furman"}
// ];
// for(let val of person){
//     console.log(val.fName + " " + val.lName);

// }
//end of basic exercise 2