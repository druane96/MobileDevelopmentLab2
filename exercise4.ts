
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log("The Number is: " + decimal)
console.log("The Hex is: " + hex)
console.log("The Binary is: "+ binary);
console.log("The Octal is: "+ octal);

let color: string = "blue";
color = 'red';

console.log("The String is: "+ color);

let fullName: string = `Bob Bobbington`;
console.log(fullName);

let isDone: boolean = false;
console.log(isDone);

let list: number[] = [1, 2, 3];
console.log(list);

let lists: Array<number> = [4, 5, 6];
console.log(lists);

let list1:any[] = [22, 33, 44];
for (let i = 0; i < list1.length; i++) 
{
    console.log("The value at postition "+ (i+1)+ " is " +list1[i]);
}