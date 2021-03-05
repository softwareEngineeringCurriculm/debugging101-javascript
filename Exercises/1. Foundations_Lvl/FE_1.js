const sumNum = (nums) => {
  let total = 0; 
  for(let i = 0; i < nums.length; i += 1) {
    total += nums[i]; 
    return total;
  }
}