                                                                               ////// Task 1
 
 function calculateDiscount(product, price) {
    let finalPrice;                  /// fuction  as been defined 

    if (price > 1000) {
        finalPrice = price * 0.8;      // calculated to product and price return the final price 
    } else {
        finalPrice = price * 0.9;  
    }                                           ///price return the final price 

    return finalPrice;     ///  
}


let result = calculateDiscount("Shoes", 2000);  

console.log("Product: Shoes");
console.log("Final Price:", Math.floor(result));   /// then final price as been print 

                                                                                 //////  Task 2

function placeOrder(callback) {   //fuction name  placeorder
    console.log("Order placed");      /// this callback function one function call completed  then  another function will be call 
    callback(500);     /// once order placed next function start 
}

function payment(amount, callback) {
    console.log("Payment of " + amount + " successful");      /// this callback function one function call completed  then  another function will be call 
    callback();  
}

function orderSuccess() {
    console.log("Order delivered");  // once order placed next function start 
}


placeOrder(function(amount) {
    payment(amount, orderSuccess);   /// payment ,callback ,orded , run start
});

                                                                           //// Task 3
    
let employees = [
    { name: "Navee", salary: 50000 },   /// the use for arraya of object 
    { name: "Nasee", salary: 70000 } 
];

for (let i = 0; i < employees.length; i++) {
    let emp = employees[i];                          ///  useing for loop tag 

    if (emp.salary > 60000) {
        console.log(emp.name + ": High Salary");    //its as been above 600000 is as high salary 
    } else {
        console.log(emp.name + ": Normal Salary");
    }                                                     // its as been below is as low salary 
} 
 
                                                                             /// Task 4

let correctPassword = "1234";                   
let enteredPassword = "1234";             
let attempts = 0;

while (attempts < 3) {
    console.log("Attempt " + (attempts + 1));   ////use for whileloop  maximium 3 attempt 

    if (enteredPassword === correctPassword) {
        console.log("Login success");                   //// password correct login succ
        break;                                  /// loop stop use break 
    }

    attempts++;
}   

                                                                                      //// Task 5

function* couponGenerator() {    /// all value fuction 
    yield "10% OFF";                    
    yield "20% OFF";
    yield "Free Delivery";
    yield "Cashback";                 
}

let offers = couponGenerator();    ////////////////

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);   /// print the all function .........

                                                                                        ///Task 6
                                                                                
let cart = [100, 200, 300, 400];      //// enter the 4 amt 

let total = 0;

for (let price of cart) {
    total += price;   //// then total the price
}

console.log("Total Bill:", total);  ///// then print the screen for total bill: 1000

                                                                                     //// Task 7  

let user = {
  name: "Naveenkumar",
  role: "Associate software engineer",    ////  right side key and left side value 
  location: "India"                         /// this  creat 3 tag name role location 
};

for (let key in user) {
    let value = user[key];
    console.log(key + " : " + value);
}                                           ///  then print screen for enter the name 

                                                                                           /// Task 8

function createPhone() {
    return "Phone";
}

function createBattery() {
    return "Battery";
}

function createCharger() {
    return "Charger";                ///// fuction use to create charger then return charge 
}

function createOrder() {
    return `${createPhone()} + ${createBattery()} + ${createCharger()}`;  //Variables & strings combine 
}

console.log("Your Order: " + createOrder());    /// then print the screen output 3 


                                                                                        /// Task 9

function createStudent(name, department) {
    department = department || "Not Assigned";   //// useing for not assigned 
    console.log("Name:", name);
    console.log("Department:", department);   /// print the tow person name and department 
}

createStudent("Navee", "Associate software engineer");
createStudent("nasee");                              /// then print the screen  nmae and departrment

                                                                                     //// Task 10

function emi(principal) {
    return function(rate) {
        return function(time) {
            let emiAmount = (principal * rate * time) / 100;  ///caculated the EMI amt
            return emiAmount;
        }                                                        ////One function returns another function
    }
}

console.log("EMI:", emi(10000)(2)(12)); 
console.log("EMI:", emi(5000)(5)(6));                  /// then print emi amt final amt 


                                                                                      //// Task 11


for (let i = 1; i <= 10; i++) {            ///  i have 1 to 10 odd and even number assigned 
    if (i % 2 === 0) {
        console.log(i + " - Even");     
    } else {
        console.log(i + " - Odd");
    }                                           //// then print screen 1 to 10 
}

                                                                                             /// Task 12

function scopeTest() {     /// its as been function statements 
    if (true) {
        var a = 10;       
        let b = 20;       
        const c = 30;         /// if ture as block the value 
    }

    console.log("var a:", a);    /// then print the screen a 
    
}
                             /////
scopeTest(); 

                                                                                          ///Task 13

(function() {
    console.log(" Flash Sale: 50% OFF on Shirts");
})();           /// print the screen AS BEEN Flash Sale: 50% OFF on Shirts


                                                                                         ///Task 14

function marks(m1, m2, m3) {
    let total = m1 + m2 + m3;                   ///its as been function 
    let average = total / 3;

    return { total, average };               /// then return the value 
}


let result1= marks(80, 90, 70);          //// caculate the value 

console.log("Total:", result1.total);
console.log("Average:", result1.average);            /// then print screen a totzal and averger value 


                                                                                          ///Task 15

function* offerGenerator() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";   /// its been function such bee caclulated 
}

let offers1 = offerGenerator();


let offer = offers1.next();       
while (!offer.done) {
    console.log("Offer:", offer.value);
    offer = offers1.next();     /// then return the value 
}


if (offer.done) {
    console.log("All offers expired");   /// then print screen output as been All offers expired
}