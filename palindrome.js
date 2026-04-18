// 4. Check for Palindrome
function isPalindrome(s) {
    const reversedString = s.split("").reverse().join("")
    return s.toLowerCase() === reversedString.toLowerCase()
}