# Passwrod-Generator
Generating Secure Password
This readme has the following:
1. Brainstorm
2. Features
3. Website URL and github URL
4. Screenshot of work. img1-img10


For this Challenge I plan to do some brainstorm:
who,what,where,when,why,how?

Step 1:
Who is this for?
This is for an employee or anyone else who wants to create a randomly generated password with options they have selected. 
Step 2:
What will consist in the password?
By clicking Generate it will prompt options of upper,lowercase alphabet or both,symbol and numbers.
Step 3:
Where will we add the password criteria and length for it to work?
The password criteria and length of the password will be asked in a prompt and from there will be added in a function which will need to be invoked. In this case it is present.
Step 4:
Which function will be used for which case and for what purpose?
We will be using function expression as we are creating a value.
Step 5:
When will the functions be invoked?
Once all criteria have been met/selected
Step 6:
Why is NaN present, Why is the values not being input to the loop?
Because the input from the prompts are not being read as values for the variable created within the function.



Features:
How would I like this to work?
Webpage open
Click Generate:

All Questions are in one function-GeneratePassword
Question 1:
Prompt: Would you like uppercase or lowercase alphabet or both in your password a,b,c?
if else statment stating Upper case or Lower case or both
next:
Prompt: Would you like numbers in your password Yes or No?
next:
Prompt:Would you like symbols in your password Yes or No?
next:
Prompt:What would you like your password length to be(minimum-8 to maximum-128)
next:
Generate password;
if the answer is beyond the given standards eg "y" || "n" then the question will be returned back after a alert message pops up.
if for number and symbol selected "n" then the variable value for them will be empty.
