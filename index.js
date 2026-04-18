// 1. Reverse a String
function reverseString(s) {
    const strArr = s.split("")
    const r = strArr.reverse()
    return r.join("")
}

// 2. FizzBuzz
function fizzBuzz(n) {
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        }
    }
}

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

// 4. Check for Palindrome
function isPalindrome(s) {
    const reverseString = s.split("").reverse().join("")
    return s.toLowerCase() === reverseString.toLowerCase()
}

// 5. Sum of Array Elements
function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

// 6. Count Vowels
function countVowels(s) {
    const vowels = "aeiouAEIOU"
    let count = 0
    for (const char of s) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}

// 7. Factorial Calculation
function factorial(n) {
    if (n === 0) return 1
    let result = 1
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result
}

// 8. Even or Odd List
function evenOdd(nums) {
    const evenNums = nums.filter(num => num % 2 === 0)
    return evenNums
}

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

// 12. Check Prime Number
function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`)
    }
}