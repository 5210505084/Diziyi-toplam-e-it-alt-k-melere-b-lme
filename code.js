function subsetSum(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  if (sum % 2 !== 0) {
    return false;
  }
  const target = sum / 2;
  const memo = {};
  memo[0] = [[]];
  for (const num of arr) {
    for (let i = target; i >= num; i--) {
      if (memo.hasOwnProperty(i - num)) {
        memo[i] = memo[i] || [];
        memo[i].push(...memo[i - num].map((subset) => [...subset, num]));
      }
    }
  }
  return memo.hasOwnProperty(target);
}
