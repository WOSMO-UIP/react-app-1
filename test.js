//Given an array of numbers, filter out any numbers that are less than 10.


const arr = [1,2,3,55,65,4,23,4,53,2,21,3,4,43,43,4];

const filterAboveTen = arr.filter(num => num > 9);
console.log(filterAboveTen);