                                    /// Printing & User Interaction ///

console.log( "My name is Naveenkumar and Role in Associate software engineer") //output: my name is naveenkumar and role is associte software engineer

alert( "Hi Welcome to java script") // anytime you have refes the page. show popup box ( hi welcome to js) OK 

let result = confirm("Do you like coding?");
console.log( result);   // you have refers the page show popup box ( ok or Cancel) u click ok its ture / u click cancel its fales data was collected

let food = prompt("Enter your favorite food:");
console.log( food); /// is show popup page then enter your f.food you will enter you data was colleting 

document.writeln("Good morring friends have a nice day");  //i have show to display. i can use the document.writenIn tag 


                                       /// Console Methods ///

let a = 100;
console.log(a);   // i will print a then a value only show 

console.warn("warning your battery was low"); // its as a  warning message  create tag

console.error("Something is misstake!");  // its as a error message create tag


                                            /// Data Types ///

let b = "naveenkumar"
console.log( typeof(b)); // type of  its as string

let age =  21
console.log(typeof(age)); // type of its as number

let i = true; 
console.log(typeof(i)); //  type of its as boolen  ture and fales 

let n ;
console.log(n); //  vaits as undefined vaule not assign

let m = null;
console.log(m); //  its as null

                
                                                    /// Arrays //
    

let fruits = ["Mango", "Apple" ,"Banana" ,"Orange", "Grapes"];
console.log(fruits);  // its as print  the 5 fruits 

let box = ["Mango", "Apple", "Banana", "Orange", "Grapes"];
console.log(box[0]);
console.log(box[box.length - 1]); // its as been 0 mango 1 grapes print 

let add = ["Mango", "Apple", "Banana", "Orange", "Grapes"];
add.push("Pineapple");
console.log( add); //  its as one furites was add in the screen 

let remove = ["Mango", "Apple", "Banana", "Orange", "Grapes"];
remove.pop();
console.log(remove); //  one furites was remove in the screen  only 4  furit was print 

let l = ["Mango", "Apple", "Banana", "Orange", "Grapes"];
console.log(l.length);  //  how many array value show to screen 5 to print 

                                       
                                            ///Objects///


let student = {
    name: "Naveenkumar",
    age: 21,
    course: "js",
};
console.log("Student object:", student); //  print to nmae, age , course  

let s = {
    name: "Naveenkumar",
    age: 21,
    course: "js" 
};
console.log("Student name:", s.name);  //  print only for name 

let t = {
    name: "Naveenkumar",
    age: 21,
    course: "js"
};
console.log("Student age:", t.age);    //   print only for name

let u = {
    name: "Naveenkumar",
    age: 21,
    course: "js"
}
u.college = "vysya College";
console.log(u);                       //   add one string collage name then print it 

let d = {
    name: "Naveenkumar",
    age: 21,
    course: "Js",
     e: ["Mango", "Apple", "Banana", "Orange", "Grapes"]
};

console.log(d.e);

console.log( d.e[0]);

console.log(d.e[d.e.length - 1]);  //   add to furite  then  print the mango and grapes 

let z= {
    name: "Naveenkumar",
    age: 21,
    course: "AWS",
    college: "vysya collage"
};
z.age = 23;
console.log(z);  // resuse the age value 21 convert to  23 print it 


                                           ///Operators///

let num1 = 30;
let num2 = 10;
let difference= num1 + num2;
console.log(difference);   //  add tow value then print the add value 40

let n1 = 50;
let n2 = 20;
let sum = n1 - n2
console.log( sum); //   Subtraction the tow value then print the value 30 

let mu1 = 50;
let mu2  = 20;
let product= mu1 * mu2
console.log(product); //  mulit the tow value  then print the value 1000

let div1 = 50;
let div = 10;

let quotient = num1 / num2;
console.log( quotient); // div the tow value then print value 3

let pre1= 17;
let pre = 5;
let remainder = pre1 % pre;
console.log(remainder);  //  17 div the 5 then 3 times ( 5 × 3 = 15)  and 17 - 15 the print statement was 2 


let base = 2;
let exponent = 3;
let mett = base ** exponent;
console.log( mett);   //      2 power 3  2 mult in 3 time then print the value 8 


                                                          //Increment & Decrement //
            
let num = 5;

console.log("post-increment:", num++);  //   current value 5 and add 1 value print the 6 

console.log("Using pre-increment:", ++num); //   frist add 1 value then one more add 1 value. print the 7


let user = 5 
let user1 = 5

console.log("user++:", user++);
console.log("user++:", user)  //  first print 5 then value 6 

console.log("++user:", ++user);
console.log("++user:", user)  //  first increase 7  then print 7 

let o = 5;

console.log(o);  // print 5 
console.log( o--);  // post decrement frist print  5   then 4 output was 5 
console.log(o);    // then print 4
console.log( --o);   // frist3 then print 3 
console.log( o);       //   t5hen print 3 
 
let y= 5;    
let w = y++;  
let c = ++y;  

console.log(y); 
console.log(w); 
console.log(c);   //  y = 5 and w= 5 then add 1 VALUE  print it 6  c = y value 7 then print it 7 

                  
                                              ///Real-Time Logic Tasks ///

let h = prompt("Enter your age:");

h = Number(h);

if (h >= 18) {
    console.log("YOU ARE ELIGIBLE TO VOTE");  
} else {
    console.log("YOU ARE NOT ELIGIBLE TO VOTE");   //   show the popup box question was enter your age u click ok its ture cencel fales  
}

let word = prompt("Enter your name:");
console.log("Hi" + word);  //

let marks = [78, 85, 92, 67, 90];
let highestMark = Math.max(...marks);
console.log("Highest mark:", highestMark);  //   u enter the name hi  naveen show and show to highest mark 

let just = {
    tropical: ["Mango", "Pineapple", "Banana"],
    citrus: ["Orange", "Lemon", "Lime"],
    berries: ["Strawberry", "Blueberry", "Raspberry"]
};

console.log( just.tropical); // 3 furite as print 
console.log( just.citrus[0]);   //  0 print orange
console.log( just.berries);    //    3 furite as  print 
 

let favoriteFruits = [];

for (let i = 1; i <= 3; i++) {
    let fruit = prompt("Enter favorite fruit " + i + ":");
    favoriteFruits.push(just);
}

console.log( favoriteFruits);    //  for loop 3 furite store in the place