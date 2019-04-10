var maxSubArray = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  var max = nums[0]
  var curSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > curSum) {
      curSum = nums[i]
    } else {
      curSum += nums[i]
    }
    if (curSum > max) {
      max = curSum
    }
  }

  return max
}