// 3. Find the Largest Number in an Array
function max(n) {
    let max = n[0]
    for (let i = 0; i < n.length; i++) {
        if (n[i] > max) {
            max = n[i]
        }
    }
    return max
}