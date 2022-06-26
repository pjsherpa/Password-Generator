# Password-Generator
UCB Challenge 3

Note:The following will be provided in present tense besides the brainstorm where some presense of future tense is present.

This readme has the following:
1. Brainstorm
2. Features
3. javascript
4. Deployment
5. Screenshot of Password Gen for reference(img1-img5)

Brainstorm:(Before Starting this challenge)
who,what,where,which,when?

1. Who is this for?
This is for an employee or anyone else who wants to create a randomly generated password with options they have selected. 

2. What will consist in the password?

By clicking Generate it will prompt options of upper,lowercase alphabet or both,symbol and numbers.

3. Where will we add the password criteria and length for it to work?

The password criteria and length of the password will be asked in a prompt and from there will be added in a function which will need to be invoked. In this case it is present.

4. Which function will be used for which case and for what purpose?

We will be using function declaration.

5. When will the functions be invoked?

Once all criteria have been met/selected from the question provided.

Features:

Click Generate:

All Questions are in one function called GeneratePassword.

1. There are 4 series of questions that is prompted.
2. For alphabet there are three options provided for uppercase,lowercase or both.(ref img:1)
3. For number and symbol if selected "n" then the variable value for them will be empty. "y" will include the value.
4. If the selection is beyond the given selection(ref img:2) asked for eg "y" || "n" then the question is discontinued after a alert message pops up stating what needs to be typed in.(ref img:3)
5. The final question asks for the length of the password from 8-128(ref img:4) once provided will generate the secure password(ref img:5). If below 8 or above 128 it will discontinue question and need to restart again.


Javascript:
1. Create four variables which are the values that will help construct the password.
2. Variable passwordText is what is required to find.  Kept this in the local scope and not the global scope as it will just add into the password previously created if in the global scope.
3. Create 4 question to prompt with if else statements to select criteria.
4. Create 4 empty variables for the 4 question. Name: v for alphabet criteria,w for number criteria,x for specialCharacter criteria and y for length criteria.
5. To double check that lenght value has been converted I have converted it into a number with a new variable length and have put console.log to confirm it.
6. The last step I have concatinated v,w,x into one variable named characters. 
7. I have assigned the length which we got from var y onto the loop and then assigned both the character and length to math.random function to generate the password.
8. Application load with no error please find link on deployment provided.(ref deployment 1)
9. Comments are provided in js file.

Deployment:
1. live URL:https://pjsherpa.github.io/Password-Generator/
2. GitHub URL:https://github.com/pjsherpa/Password-Generator

Screenshots:
img1:

![Screen Shot 2022-06-25 at 5 29 10 PM](https://user-images.githubusercontent.com/105903416/175796143-879bd17a-15bc-4d63-a8ba-c26afa328eb3.png)

img2:

![Screen Shot 2022-06-25 at 5 29 27 PM](https://user-images.githubusercontent.com/105903416/175796152-041f4be1-3829-42bf-908e-3412a36c2e50.png)

img3:

![Screen Shot 2022-06-25 at 5 29 38 PM](https://user-images.githubusercontent.com/105903416/175796160-888f5fb8-792d-44ba-81ea-36d4501eea50.png)

img4:

![Screen Shot 2022-06-25 at 5 30 22 PM](https://user-images.githubusercontent.com/105903416/175796168-639910a1-238a-488e-bbda-c60e3da96cb9.png)

img5:

![Screen Shot 2022-06-25 at 7 00 02 PM](https://user-images.githubusercontent.com/105903416/175796192-763f8486-9a14-446c-9ed4-daa84cb3e8cf.png)

