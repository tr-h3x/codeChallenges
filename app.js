//Fibonacci Finder

function fibFinder(n) {
    if (n <= 1) 
        return n;
    return fibFinder(n-1) + fibFinder(n-2);
}

console.log(fibFinder(6))

//Reverse Words

function wordReverser(phrase) {
    const strArr = phrase.split(' ');
    const reversed = strArr.reverse();
    return reversed.join(' ');
  }
  
  console.log(wordReverser("Codecademy rules"));

  //Find Xth number in order

  function getX(x, nums) {
    const result = [];
    for (let i = 0; i < nums.length; i += x) {
      if (nums.indexOf(x)) {
        nums.sort((a, b) => a - b);
        result.push(nums[x-1]);
        return result;
  } else {
          return 0 ;
  }
  }
      return result;
  }
  
  console.log(getX(6, [5, 10, -3, -3, 7, 9]));
  
 