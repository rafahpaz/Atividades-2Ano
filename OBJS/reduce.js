const array1 = [2, 5, 7, 10];

const initialValue = 2;
const rafael = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(rafael);

