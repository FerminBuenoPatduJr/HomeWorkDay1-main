var arr1: string[] = ["false", "0", "7", "9", "0", "4", "3", "0", "1"];
let num: number = arr1.length;
console.log("All the elements!");

zeroesToEnd(arr1, num);
console.log("All zero(0) elements moved to the end!");
console.log(arr1);
// for (let x = 0; x < num; x++) console.log(arr1[x] + ", ");

function zeroesToEnd(arr1: string[] | number[], n: number) {
  let ctr = 0;
  for (let x = 0; x < num; x++) if (arr1[x] != 0) arr1[ctr++] = arr1[x];
  while (ctr < num) arr1[ctr++] = 0;
}
