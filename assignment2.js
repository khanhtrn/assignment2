//Assignment 2 Part 1
//STEP 1
//var name = window.prompt("Type in your name: ");
//window.alert("Your name have " + name.length + " characters, including space");
//STEP 2
//var name = window.prompt("Type in your name: ");
//var i = window.prompt("Type the position of the character you're looking for: ");
//window.alert("The character " + name.charAt(i) + " is at position " + i);
//STEP 3
//var fname = window.prompt("Type in your first name: ");
//var lname = window.prompt("Type in your last name: ");
//window.alert(fname.concat(lname));
//STEP 4
//var foxdog = "The quick brown fox jumps over the lazy dog";
//var index = window.prompt("Type the word index you are looking for: ");
//window.alert("Position " + foxdog.indexOf(index) + " is what you are looking for.");
//STEP 5
//var foxdog = "The quick brown fox jumps over the lazy dog";
//var index = window.prompt("Type the word index you are looking for: ");
//window.alert("Position " + foxdog.lastIndexOf(index) + " is what you are looking for.");
//STEP 6
//var foxdog = "The quick brown fox jumps over the lazy dog";
//var fullname = window.prompt("Please enter your full name: ");
//window.alert(foxdog.replace("the lazy dog", fullname));
//STEP 7
//var foxdog = "The quick brown fox jumps over the lazy dog";
//var searchword = window.prompt("Enter the word you are looking for: ");
//window.alert(foxdog.match([searchword]));
//STEP 8
//var old_string = "The quick brown fox jumps over the lazy dog";
//var new_string = (old_string.slice(30,43));
//var new_string = new_string.toUpperCase();
//window.alert(new_string);
//STEP 9
//var textString = "           THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
//window.alert(textString.toLowerCase(textString.trim));
//STEP 10
//var textString = "the quick brown fox jumps over the lazy dog";
//window.alert(textString.substring(0,1).toUpperCase() + textString.substring(1));
//ASSIGNMENT 2 PART 2 
//PART 1 Math and Math Functions (5 points)
//QUESTION 1
/*  1.	Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.   */
//var numValue = window.prompt("Please enter either a negative or positive number: ");
//console.log(Math.abs(numValue));
//QUESTION 2
/*  2.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window. */
//var floatValue = window.prompt("Please enter a floating point decimal: ");
//console.log(Math.ceil(floatValue));
//QUESTION 3
/*  3.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.   */
//var floatValue = window.prompt("Please enter a floating point decimal: ");
//console.log(Math.floor(floatValue));
//QUESTION 4
/*  4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.  */
//var num1 = Number(window.prompt("Please enter first number: "));
//var num2 = Number(window.prompt("Please enter second number: "));
//var num3 = Number(window.prompt("Please enter third number: "));
//var num4 = Number(window.prompt("Please enter fourth number: "));
//var num5 = Number(window.prompt("Please enter fifth number: "));
//console.log("The largest number you enter is: " + Math.max(num1, num2, num3, num4, num5) + "\n And the smallest number you enter is: " + Math.min(num1, num2, num3, num4, num5));
//QUESTION 5
/*  5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window.    */
//var numValue = window.prompt("Please enter a number you would like to get the square root of: ");
//console.log(Math.sqrt(numValue));
//PART 2 Date and Date Functions (6 points)
//QUESTION 6
/*  6.	Create an application that gets the current date. Display that result within the console window. */
//var dateVal = new Date();
//console.log(dateVal.getDate());
//QUESTION 7
/*  7.	Create an application that gets the number of days in a month. Display that result within the console window.    */
//var dateVal = new Date();
//dateVal = dateVal.getMonth();
//switch(dateVal) {
//    case 0:
//        window.alert("January have 31 days.");
//        break;
//    case 1:
//        window.alert("February have 28 days.");
//        break;
//    case 2:
//        window.alert("March have 31 days.");
//        break;
//    case 3:
//        window.alert("April have 30 days.");
//        break;
//    case 4:
//        window.alert("May have 31 days.");
//        break;
//    case 5:
//        window.alert("June have 30 days.");
//        break;
//    case 6:
//        window.alert("July have 31 days.");
//        break;
//    case 7:
//        window.alert("August have 31 days.");
//        break;
//    case 8:
//        window.alert("September have 30 days.");
//        break;
//    case 9:
//        window.alert("October have 31 days.");
//        break;
//    case 10:
//        window.alert("November have 30 days.");
//        break;
//    case 11:
//        window.alert("December have 31 days.");
//        break;
//}
//QUESTION 8
/*  8.	Create an application that gets the month name from a particular date. Display that result within the console window.    */
//var dateVal = new Date();
//dateVal = dateVal.toDateString(dateVal.getDate);
//console.log(dateVal.slice(3, 7));
//QUESTION 9
/*  9.	Create an application that tests whether a date is a weekend. Display that result within the console window. */
//var Val = new Date();
//if(Val === 0 || Val === 6) {
//    console.log("Today is a weekend!");
//} else {
//    console.log("Today is not a weekend!");
//}
//QUESTION 10
/*  10.	Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. */
//var Val = new Date();
//Val = Val.getDay();
//Val = Val -= 1;
//console.log(Val.toDateString);
//QUESTION 11
/*  11.	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.   */
//var dateVal = new Date();
//dateVal = dateVal.toDateString(dateVal.getDate);
//console.log(dateVal.slice(0, 1));
//PART 3 - Conditional Logic and Looping Operations (4 points)
//QUESTION 12
//var int1 = window.prompt("Enter first integer: ");
//var int2 = window.prompt("Enter second integer: ");
//console.log(Math.max(int1, int2));
//QUESTION 13
//function gradeMark(grade) {
//    if (grade > 90) {
//        return 'A';
//    } else if (grade > 80) {
//        return 'B';
//    } else if (grade > 70) {
//        return 'C';
//    } else if (grade > 65) {
//        return 'D';
//    } else {
//        return 'F';
//    }
//}
//console.log('Ursula got a ' + gradeMark(80));
//console.log('Paul got a  ' + gradeMark(77));
//console.log('Henry got a  ' + gradeMark(88));
//console.log('Tabitha got an  ' + gradeMark(95));
//console.log('Lucy got a  ' + gradeMark(68));
//QUESTION 14
/*  14.	Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window. */
//for (var i = 1; i <= 15; i++) {
//    console.log(i);
//    if (i % 2 == 0) {
//        console.log(i + " is an even number.");
//    }else{
//        console.log(i + " is an odd number.");
//    }
//}
//QUESTION 15
/*  15.	Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.   */
//for (var i = 1; i <= 100; i++) {
//    if(i % 3 == 0 && i % 5 == 0) {
//        console.log(i + " is FizzBuzz");
//    }else if(i % 3 == 0) {
//        console.log(i + " is Fizz");
//    }else if(i % 5 == 0) {
//        console.log(i + " is Buzz");
//    }else{
//        console.log(i);
//    }
//}
//PART 4 - The “Hitchhiker’s Guide to the Galaxy” Game (5 points)
//QUESTION 1
//var ready2play = window.confirm("Are you ready to play the game?");
//        if (ready2play) {
//            window.alert("Awesome, our hero is waiting!");
//        } else {
//            window.alert("Too bad, we\’re going to play anyway because our hero desperately needs your help!");
//        }
 //QUESTION 2       
//        window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera.\nYou are disoriented, lost, hungry and extremely thirsty.\nYou see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left.\nYour back is against the wall.");
//QUESTION 3
//		var direction = window.prompt("Which direction would you like to head (please enter forward, left, or right).");
//        direction = direction(direction.toLowerCase());
//QUESTION 4
//		switch (direction) {
//            case "forward":
//		      window.alert("You walk about 100 yards and safely make your way out of the cave.");
//		      break;
//		    case "left":
//		      window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
//		      break;
//		   case "right":
//		      window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
//		      break;
//		    default:
//		      window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
//		}
////QUESTION 5 & 6
//        var rateGame = window.prompt("Please rate our game on a scale of 1-10.");
//        if (!isNaN(rateGame)) {
//            if (rateGame <= 10 && rateGame > 5) {
//                window.alert("Thank you, we will continue to make improvements to the game!");
//            } else if (rateGame <= 5 && rateGame > 0) {
//                window.alert("Whatever, you weren't very good at this game anyway!");
//            } else {
//                window.alert("You didn't enter a number between 1 and 10!");
//            }
//        } else {
//            window.alert("You didn't enter a number!")
//        }
//PART 5 - The “Coin Flip” Game (5 points)
/*In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:*/
//var coinFlip = Math.round(Math.random());
//        var choice = window.prompt("Would you like head or tail?").toLowerCase();
//        if (coinFlip) {
//            if (choice == "head") {
//                window.alert("The flip was head, and you chose head, you win!");
//            } else {
//                window.alert("The flip was head, but you chose tail, you lose!");
//            }
//        } else {
//            if (choice == "head") {
//                window.alert("The flip was tail, but you chose head, you lose!");
//            } else {
//                window.alert("The flip was tail, and you chose tail, you win!");
//            }
//        }
//PART 6 - The “Coin Flip” Game Redux (5 points)
/*In this part of the assignment you will explore what you’ve learned so far about variables, for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”. To complete the game follow the steps outlined below:*/
//var coinFlip;
//        for (var i = 1; i <= 10; i++) {
//            coinFlip = Math.round(Math.random());
//            if (!coinFlip) {
//                console.log("Heads");
//            } else {
//                console.log("Tails");
//            }
//        }
//PART 7 - The “Coin Flip Streak” Game (5 points)
/*In this part of the assignment you will explore what you’ve learned so far about variables, do while loops, conditionals, operators, math, and more to create a “coin flip streak game”. The point of this simple game is to see what kind of streak you can get to (how many times “Heads” comes up in a row before “Tails” does to end the game). To complete the game follow the steps outlined below:*/
//var coinFlip;
//        do {
//            coinFlip = Math.round(Math.random());
//            if (coinFlip) {
//                console.log("Heads");
//            } else {
//                console.log("You finally got Tails!");
//            }
//        } while (coinFlip);
//PART 8 - Looping a Triangle (5 points)
/*Write a loop that displays the following triangle within a console window:*/
//for (var line = "#"; line.length < 8; line += "#")
//  console.log(line);
//PART 9 - Odd or Even? (5 points)
/*Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. */
//for (var i = 0; i <= 15; i++) {
//    if (i % 2 === 0) {
//        console.log(i + " is even");
//    } else {
//        console.log(i + " is odd");
//    }
//}