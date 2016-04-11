'use strict';

const isPalindrome = function(n) {
  let str = String(n);
  let revStr = [];
  for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
    revStr[j] = str[i];
  }
  revStr = revStr.join('');
  return revStr === str;
};

const decToBase = function(n,b) {
  return Number(n).toString(b);
};

const solve = function(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (isPalindrome(i) && isPalindrome(decToBase(i,2))) {
      console.log('Dec: ' + i + ', Bin: ' + decToBase(i,2));
      sum += i;
    }
  }
  return sum;
};

// 1, 3, 7, and 585 are all palindromic in bases 2, 8, and 10.
const solveBonus = function(cap) {
  for (let i = 1; i <= cap; i++) {
    if (isPalindrome(i) &&
        isPalindrome(decToBase(i,2)) &&
        isPalindrome(decToBase(i,8))) {
      console.log(i);
    }
  }
};

module.exports = {
  isPalindrome,
  decToBase,
  solve,
  solveBonus,
};
