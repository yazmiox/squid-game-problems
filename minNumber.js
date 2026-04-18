// 10. Find the Minimum in an Array
function min(nums) {
    let min = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i]
        }
    }
    return min
}