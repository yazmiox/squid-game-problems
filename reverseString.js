// 1. Reverse a String
function reverseString(s) {
    const stringArr = s.split("")
    const reversedArr = stringArr.reverse()
    return reversedArr.join("")
}