function chapter1one() {
    var firstName = prompt("Enter first name");
    var lastName = prompt("Enter last name");
    var fullname = firstName + " " + lastName;
    alert("Hello " + fullname);
}
function chapter1two() {
    var p = prompt("Enter your favourite mobile model");
    var l = p.length;
    document.write("<p>length of string: " + l + "</p>");
}
function chapter1three() {
    var p = "Pakistani";
    var n = p.indexOf("n");
    document.write("<p>String: " + p + "</p>");
    document.write("<p>Index of n: " + n + "</p>");
}
function chapter1four() {
    var p = "HelloWorld";
    var n = p.indexOf("l");
    document.write("<p>String: " + p + "</p>");
    document.write("<p>Index of n: " + n + "</p>");
}
function chapter1five() {
    var p = "Pakistani";
    document.write("<p>String: " + p + "</p>");
    document.write("<br />Character at 3rd index is:" + p.charAt(3));
}
function chapter1six() {
    var firstName = prompt("Enter first name");
    var lastName = prompt("Enter last name");
    var fullname = firstName.concat(lastName);
    alert("Hello " + fullname);
}
function chapter1seven() {
    var city = "Hyderabad";
    var city1 = city.replace("Hydera", "Islam");
    document.write("<p>City: " + city + "</p>");
    document.write("<p>City after replacement: " + city1 + "</p>");
}
function chapter1eight() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var message1 = message.replace(/and/g, "&");
    document.write("<p>Message: " + message + "</p>");
    document.write("<p>Message after replacement: " + message1 + "</p>");
}
function chapter1nine() {
    var String1 = "475";
    document.write("<p>Value: " + String1 + "</p>");
    document.write("<p>Type: " + (typeof String1) + "</p>");
    var num1 = parseInt(String1);
    document.write("<p>Value: " + num1 + "</p>");
    document.write("<p>Type: " + (typeof num1) + "</p>");
}
function chapter1ten() {
    var x = prompt("Enter any string");
    var x1 = x.toUpperCase();
    document.write("<p>String: " + x + "</p>");
    document.write("<p>Uppercase: " + x1 + "</p>");
}
function chapter1eleven() {
    var str = prompt("Enter any string");

    console.log(

        str.split(' ')
            .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
            .join(' ')

    )

}
function chapter1twelve() {
    var num = 35.36;
    var string1 = num.toFixed(2);
    document.write("<p>number: " + num + "</p>");
    document.write("<p>result: " + string1 + "</p>");
}
function chapter1thirteen() {
    var firstName = prompt("Enter first name");
    if(firstName.includes("!")||firstName.includes(",")||firstName.includes(".")||firstName.includes("@")){
        alert("Please enter a valid username");
    }
}
function chapter1fourteen(){
    var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
    var name = prompt("Welcome to ABC bakery, what do you want to order?");
    var c=name.toLowerCase();
    for (var i = 0; i < A.length; i++) {
        if (c == A[i]) {
            alert(name + "is available");
        }
        else {
            alert(name + "is not available");
        }
    }
}
function chapter1fifteen(){
    var inputtxt=prompt("Enter Password");
    var a=CheckPassword(inputtxt);
    function CheckPassword(inputtxt) 
{ 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
if(inputtxt.value.match(decimal)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}
}
function chapter1sixteen(){
    var university="University of Karachi";
    var s=university.split("");
    for (i=0;i<s.length;i++){
        document.write(s[i]);
    }
}
function chapter1seventeen(){
    var str=prompt("Enter any string");
    var last=str.charAt(str.length-1);
    alert(last+" is last character of string");
}
function chapter1eighteen(){
    var str = "The quick brown fox jumps over the lazy dog";
var count = (str.match(/the/g) || []).length;
alert(count);
}
function chapter2one() {
    var num = prompt("Enter any positive number");
    var num1 = parseInt(num);
    var round = Math.round(num1);
    var ceil = Math.ceil(num1);
    var floor = Math.floor(num1);
    document.write("<p>Number: " + num1 + "</p>");
    document.write("<p>Round off: " + round + "</p>");
    document.write("<p>Ceil: " + ceil + "</p>");
    document.write("<p>Floor: " + floor + "</p>");
}
function chapter2two() {
    var num = prompt("Enter any negative number");
    var num1 = parseInt(num);
    var round = Math.round(num1);
    var ceil = Math.ceil(num1);
    var floor = Math.floor(num1);
    document.write("<p>Number: " + num1 + "</p>");
    document.write("<p>Round off: " + round + "</p>");
    document.write("<p>Ceil: " + ceil + "</p>");
    document.write("<p>Floor: " + floor + "</p>");
}
function chapter2three() {
    var num = ("Enter any number");
    var num1 = parseInt(num);
    var round = Math.abs(num1);
    document.write("<p>Absolute Value: " + round + "</p>");
}
function chapter2four() {
    var rand = Math.floor(Math.random() * 6) + 1;
    document.write("<p>Random Dice Value: " + round + "</p>");
}
function chapter2five() {
    var rand = Math.floor(Math.random() * 2) + 1;
    if (rand == 1) {
        document.write("<p>Heads </p>");
    }
    else {
        document.write("<p> Tails</p>");
    }
}
function chapter2six() {
    var rand = Math.floor(Math.random() * 100) + 1;
    document.write("<p>Random Value between 1 and 100: " + rand + "</p>");
}
function chapter2eight() {
    var num = 7, num1;
    num1 = prompt("Guess the secret number");
    if (num1 == num) {
        alert("Bingo!Correct answer");
    }
    else if (num1 == (num - 1)) {
        alert("Close enough to the correct answer");
    }
}
function chapter3one() {
    var d = new Date();
    document.write(d);
}
function chapter3two() {
    var d = new Date();
    var n = d.getMonth();
    switch (n) {
        case 0:
            document.write("Current Month: January");
            break;
        case 1:
            document.write("Current Month:Febuary");
            break;
        case 2:
            document.write("Current Month:March");
            break;
        case 3:
            document.write("Current Month:April");
            break;
        case 4:
            document.write("Current Month:May");
            break;
        case 5:
            document.write("Current Month:June");
            break;
        case 6:
            document.write("Current Month:July");
            break;
        case 7:
            document.write("Current Month:August");
            break;
        case 8:
            document.write("Current Month:September");
            break;
        case 9:
            document.write("Current Month:October");
            break;
        case 10:
            document.write("Current Month:November");
            break;
        case 11:
            document.write("Current Month:December");
            break;
    }
}
function chapter3three(){
    var d = new Date();
    var n = d.getDay();
    switch (n) {
        case 0:
            document.write("Today is Mon");
            break;
        case 1:
            document.write("Today is Tue");
            break;
        case 2:
            document.write("Today is Wed");
            break;
        case 3:
            document.write("Today is Thu");
            break;
        case 4:
            document.write("Today is Fri");
            break;
        case 5:
            document.write("Today is Sat");
            break;
        case 6:
            document.write("Today is Sun");
            break;
    }
}
function chapter3four(){
var d= new Date();
var n=d.getDay();
if(n==6||n==5){
document.write("Today is funday");
}
}
function chapter3five(){
var n= new Date();
var m= n.getDate();
if (m<=15){
document.write("First fifteen days of the month");
}
else{
document.write("Last days of the month");
}}
function chapter3six(){
var today = new Date();
var c = new Date("1970-01-01");
var diffMs = (c - today); // milliseconds
var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
alert(diffMs + " Milliseconds, " + diffMins + " Minutes");
}
function chapter3seven(){
    var hours = new Date().getHours();
    var hours = (hours+24-2)%24; 
    var mid='am';
    if(hours==0){ 
    hours=12;
    }
    else if(hours>12)
    {
    hours=hours%12;
    mid='pm';
    }
    alert ('Its ' +  mid);

}
function chapter3eight(){
    var d = new Date("2020-12-31");
    document.write(d);
}
function chapter3nine(){
    var today = new Date();
var c = new Date("2015-06-18");
var diffDays = Math.floor(diffMs / 86400000); // days
alert(diffDays + " days since 1st Ramdan 2015");
}
function chapter3ten(){
var dn= new Date();
var df= new Date("2015-12-05");
    var delta = Math.abs(df - dn) / 1000;

    var seconds = delta % 60;  
    alert(seconds+"have passed since"+df);

}
function chapter3eleven(){
    var n= new Date();
    var h=n.getHours();
    document.write("Date:"+n+"1 hour before:"+n.setHours(n.getHours()-1));
}
function chapter3twelve(){
    var n= new Date();
    var year = n.getFullYear();
    var month = n.getMonth();
    var day = n.getDate();
    var c = new Date(year + 100, month, day);
}
function chapter3thirteen(){
    var d=prompt("Enter your age");
    var d1=parseInt(d);
    var n= new Date();
    var y=n.getFullYear();
    var dob=y-d1;
    document.write("Age:"+d+"Date of birth year:"+dob);
}
function chapter3fourteen(){
    var customer=prompt("Enter your name");
    var month=prompt("Enter current month");
    var units1=prompt("Enter number of units");
    var charges1=prompt("Enter charges per unit");
    var late1=prompt("Enter late payment surcharge");
    var units=parseInt(units1);
    var charges=parseInt(charges1);
    var late=parseInt(late1);
    var net=units*charges;
    var gross=net+late;
    document.write("<h1>K-electric Bill</h1>");
    document.write("Customer name:"+customer);
    document.write("Current Month:"+month);
    document.write("Number of units:"+units);
    document.write("Charges per unit:"+charges);
    document.write("<br>Net payable amount(within due date):"+net);
    document.write("Late payment surcharge:"+late);
    document.write("Gross Amount payable(after due date):"+gross);
}
function chapter4one() {
    var d = new Date();
    document.write(d);
}
function chapter4two() {
    var firstName = prompt("Enter first name");
    var lastName = prompt("Enter last name");
    var fullname = firstName + " " + lastName;
    alert("Hello " + fullname);
}
function chapter4three(){
    var n=prompt("Enter any num");
    var n1=prompt("Enter other number");
    var num=parseInt(n);
    var num1=parseInt(n);
    var result=add(num,num1);
    function add(num,num1){
        return num+num1;
    }
    alert("Sum is:"+result);
}
function chapter4four(){
    var num = prompt("Enter first number");
        var num1 = prompt("Enter second number");
        var n1 = parseInt(num1);
        var n = parseInt(num);
        var operation = prompt("Enter operation");
        var result=chapter911Eleven(n,n1,operation);
    function chapter911Eleven(n,n1,operation) {
        
        if (operation == "+") {
            return(n + n1);
        }
        else if (operation == "-") {
            return(n - n1);
        }
        else if (operation == "*") {
            return(n * n1);
        }
        else if (operation == "/") {
            return(n / n1);
        }
    }
    alert("Result:"+result);
}
function chapter4five(){
    var num=prompt("Enter any number");
    var n=parseInt(num);
    var result=square(n);
    function square(n){
        return (n*n);
    }
    alert("Square:"+result);
}
function chapter4six(){
    var n=prompt("Enter any number");
    var num=parseInt(n);
    var result=fact(num);
    function fact(num){
        var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval
    }
    alert("Factorial:"+result);
}
function chapter4seven(){
    var n=prompt("Enter start number");
    var num=parseInt(n);
    var n1=prompt("Enter end number");
    var num1=parseInt(n);
    if (n<n1){
    for(i=n;i<=n1;i++){
        document.write("<br>"+i);
    }}
    else if (n>n1){
        for(i=n;i<=n1;i--){
            document.write("<br>"+i);
        }
    }

}
function chapter4eight(){
    var p=prompt("Enter perpendicular value");
    var b=prompt("Enter base value");
    var perpendicular=calculatesquare(p);
    var base=calculatesquare(b);
    var Hypotenuse=calculateHypotenuse(perpendicular,base);
    function calculatesquare(n){
        var p=n*n;
        return n;
    }
    function calculateHypotenuse(perpendicular,base){
        var Hypotenuse=perpendicular+base;
        return Hypotenuse;
    }
    document.write("Hypotenuse:"+Hypotenuse);
}
function chapter4ten(){
var str=prompt("Enter any string");
a=checkPalindrome(str);
   function checkPalindrome(str) {
  return str == str.split('').reverse().join('');
}
if (a==true){
    alert(str+" is palindrome");
}
else{
    alert(str+" is not palindrome");
}
}
function chapter4eleven(){
    var str=prompt("Enter any string");
    a=uppercase(str);
    function uppercase(str){
        return str.toUppercase(); 
    }
alert(a+" uppercase");
}
function chapter4twelve(){
    var str1=prompt("Enter string");
    var a =longestWord(str1);
    function longestWord(str1) {

        var str = str1.split(" ");
        var longest = 0;
        var word = null;
        for (var i = 0; i < str.length ; i++) {
            if (longest < str[i].length) {
                longest = str[i].length;
                word = str[i];
            }
        }
        return word;
    }
    alert(a+"is longest word");
    
}
function chapter4thirteen(){
    var str=prompt("Enter string");
    var letter=prompt("Enter letter to count");
    var a=char_count(str,letter);
    function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
alert(a+" number of occurences");
}
function chapter4fourteen(){
    var radiu=prompt("Enter radius");
    var radius=parseInt(radiu);
    var area=calcArea(radius);
    var circumference=calcCircumference(radius);
    function calcCircumference(radius){
        return (2*3.14*radius);
    }
    function calcArea(radius){
        return (3.14*radius*radius);
    }
    alert("Area of circle:"+area);
    alert("Circumference of circle:"+circumference);
}