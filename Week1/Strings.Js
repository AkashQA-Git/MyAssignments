// 1. Create a variable originalWord (example: "madam"). 
// 2. Convert it to characters using split(""). 
// 3. Use a for loop from end to start to reverse and store the string in reversedWord. 
// 4. Print the reversed word using console.log(). 
// 5. Use an if statement to compare both words. 
// 6. Print "It’s a palindrome!" if they match, else print "Not a palindrome!". 

let originalWord="level"
let characters=originalWord.split("")
let reverse=""

for (i=characters.length-1;i>=0;i--){
    reverse+=originalWord.charAt(i)
}
console.log(`reversed word:${reverse}`)

if(originalWord===reverse){
    console.log("It's a palindrome")
}
else{
    console.log("It's not a palindrome")
}