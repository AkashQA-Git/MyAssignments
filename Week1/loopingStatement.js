// . Start by creating a variable that keeps track of the current number. 
// 2. Use a for loop to move from 1 up to 25, one number at a time. 
// 3. Inside the loop, check if the number is odd using the modulo operator (%). 
// 4. If the number is odd, display it using console.log(). 
// 5. Run the program in debug mode and observe how the loop executes each step. 

for (let i=1;i<=25;i++){
    if(i%2==1)
    {
        console.log(`the number ${i} is odd`)
    }
}