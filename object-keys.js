//object.keys() prototype method used for listing the keys of an object.

const car = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
};
const keys = Object.keys(car);
console.log(keys);

//the above code will print an array of strings where each string is a key in the car object ['make', 'model','year']