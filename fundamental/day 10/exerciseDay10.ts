// task 1
// yang di kurung itu logika Object kyknya, bener kah?
let exel: { [key: string]: number } = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};
let conExToNum = function (A: string) {
  let output: number = 0;
  let input = A;
  let aar = [];
  aar = A.split(``);
  for (let i = 0; i < aar.length; i++) {
    output = exel[aar[i]] + output * 26;
    if (i == aar.length - 1) {
      return output;
    }
  }
};
console.log(conExToNum(`BA`));

//task 2
let annCheck = function (S: string, T: string) {
  if (
    S.toLowerCase().split("").sort().join("") ==
    T.toLowerCase().split("").sort().join("")
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(annCheck("anagram", "nagaram"));

//task 3
const climbStaircase = (stairs: number) => {
  let let1: number = 1;
  let let2: number = 2;
  let ways: number = 0;
  for (let i = 1; i <= stairs; i++) {
    if (i == 1) {
      ways = let1;
    } else if (i == 2) {
      ways = let2;
    } else if (i >= 3) {
      ways = let1 + let2;
      let1 = let2;
      let2 = ways;
    }
  }
  return ways;

  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
};

console.log("from climbStairscase", climbStaircase(5));

//task 4
//create a function
//input height :number
//output : console log 4 types of triangles
/*
 * * * * *
 * * * *
 * * *
 * *
 *
 */

/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

/*
 * * * * *
 __* * * *
 ____* * *
 ______* *
 ________*
 */
let output1: string = "";
let output2: string = "";
let output3: string = "";
let output4: string = "";
let triangle = function (input: number) {
  for (let i = 0; i < input; i++) {
    for (let j = i; j < input; j++) {
      output1 += "* ";
    }
    output1 += "\n";
  }

  for (let i = 0; i < input; i++) {
    for (let j = 0; j <= i; j++) {
      output2 += "* ";
    }
    output2 += "\n";
  }

  for (let i = 0; i < input; i++) {
    for (let k = i; k > 0; k--) {
      output3 += "  ";
    }
    for (let j = i; j < input; j++) {
      output3 += "* ";
    }
    output3 += "\n";
  }

  for (let i = 0; i < input; i++) {
    for (let k = input; k > i + 1; k--) {
      output4 += "  ";
    }
    for (let j = 0; j <= i; j++) {
      output4 += "* ";
    }
    output4 += "\n";
  }

  let allOut = output1 + "\n" + output2 + "\n" + output3 + "\n" + output4;
  return allOut;
};
console.log(triangle(5));

/*
 ________*
 ______* *
 ____* * *
 __* * * *
 * * * * *
 */
