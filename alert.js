
// alert("I'm JavaScript!"); alert("I Love Fitness!!");
// alert(3+
//     2+
//     1);


// alert("Hello");

/* Multiple lines 
comment
*/

// [1,2].forEach(alert);
// [1,2].forEach(alert);
// [1,2].forEach(alert);

// let my_first_js_variable;

// my_first_js_variable = "Super Idol"

// alert(my_first_js_variable)
"use strict"
// let num = 5;
// const code= 10087;
// alert(num + code);
// // num = 22
// // code = 1
// let admin;
// let name;
// name = 'John';
// admin = name;
// alert(admin);

// const NAME = 'ZOW';
// let testNum = 1/0;
// let notSet
// alert(testNum)
// alert(notSet)

// let mua = prompt('eat rubbish', 'ss')
// alert(mua)

// let testConform = confirm("Are you OK?")

// alert(testConform)

// let userName = prompt('Please give me your name', 'ZZZ')
// alert(`${userName} Super Cool!`)
// alert("" - 1 + 0)
// alert(true + false)
// alert(6 / "3");
// alert("2" / "3");
// alert(4 + 5 + "px");
// alert("$" + 4 + 5);
// alert("4" - 2);
// alert("4px" - 2);
// alert(" -9 " + 5);
// alert(" -9 " - 5);
// alert(null + 1)
// alert(undefined + 1)
// alert(" \t \n" - 2)

// let a = prompt("First number?", 1);
// let b = prompt("Second number", 2);
// alert(Number(a) + Number(b)) ;

// alert(null == "\n0\n");
// alert(null === +"\n0\n");

// let missMe = prompt("Did you miss me?", 'YES');
// if (missMe == 'YES') {
//     alert("Your are right")
// } else if (missMe == 'NO') {
//     alert("Your are death")
// } else {
//     alert("Oops another chance")
// }
// let jsName = prompt("enter name", 'ECMAScript');

// (jsName == 'ECMAScript') ? 
//     alert('Right') : alert("You don't know Javascript?")
// let a = +prompt("a", )
// let b = +prompt("b", )
// let result = (a + b < 4) ? "Below" : "Over"
// alert(result)

// let message;
// let login = prompt("Enter login", )
// message = (login == 'Employee') ? "Hello" : 
//     (login == 'Director') ? "Greetings" :
//     (login == '') ? "No login" : ''

// alert(message)

// alert(alert(1) && alert(2))
let userInput = prompt("Who's there?", )
if (userInput == 'Admin') {
    let passWord = prompt("Enter your password:", )
    if (passWord == 'TheMaster') {
        alert("Welcome")
    } else if (passWord) {
        alert("Wrong Password")
    } else {
        alert("Canceled")
    }
} else if (userInput) {
    alert("I don't Know you")
} else {
    alert("Canceled")
}