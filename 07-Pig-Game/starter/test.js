'use strict';

function comp(array1, array2) {
  if (array1 == null || array2 == null) {
    return false;
  }
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] * array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
