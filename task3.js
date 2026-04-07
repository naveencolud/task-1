let salary = prompt("Enter your salary:");
let age = prompt("Enter your age:");
let loanAmount = prompt("Enter loan amount:");
let interest = prompt("Enter yearly interest rate:");
let months = prompt("Enter tenure in months:");   ////you have fill the all details 

salary = Number(salary);  // string convert to number ""
age = Number(age);
loanAmount = Number(loanAmount);
interest = Number(interest);
months = Number(months);                 ///you eligiable the loan you click ok 

let isEligible = (salary >= 25000 && age >= 21 && age <= 60)  /// useing for age limited greaterthen and lessthen 
    ? "Eligible " 
    : "Not Eligible ";

console.log("Loan Status:", isEligible);


if (isEligible === "Not Eligible ") {
    console.log("You cannot apply for loan");  ///not age limited && low salary package 
} else {

    let R = interest / 12 / 100;  
    let P = loanAmount;
    let N = months;

    let EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

    console.log("Your EMI is:", EMI.toFixed(2));  /// you are not eligiable loan not a
}
                     
                                      ////

let name1 = prompt("Enter your name:");   // its save as string 


let age1 = Number(prompt("Enter your age:"));  /// its text to string but covert in number 


let salary1 = Number(prompt("Enter your monthly salary:")); /// its text to string but covert in number

let loanAmount1 = Number(prompt("Enter loan amount:"));   /// its text to string but covert in number


console.log("Name:", name1);
console.log("Age:", age1);
console.log("Salary:", salary1);
console.log("Loan Amount:", loanAmount1);   // out put was user enter the details 

                                                 ////
let age2 = Number(prompt("Enter your age:"));
let salary2= Number(prompt("Enter your salary:"));  /// its text to prompt but covert in number

if (age2 >= 21 && age2<= 60 && salary2>= 25000) {
    console.log("Eligible ");     ///&& condition was useing all condition ture its eligible 
} else {
    console.log("Not Eligible ");     // its as one condition was fasle not eligible
}                                                //

                                                   ///////
                
let loanAmount3 = Number(prompt("Enter loan amount:")); /// its text to prompt but covert in number



let emi = loanAmount3 / 12;    // your loan amout divied to 12 month

console.log("Your EMI is:", emi);  // then your emi amout was output show 


                                                 ///////


let loanAmount4 = Number(prompt("Enter loan amount:")); /// its text to prompt but covert in number


if (loanAmount4 > 500000) {
    console.log("High Loan");   // i use if statement  5l greterthen high loan
} else if (loanAmount4 > 200000) {
    console.log("Medium Loan");   /// if and else if statement 2l grethen medium amt 
} else {
    console.log("Low Loan");    // then else 2l below else statement was turn on low amt 
}

                                                 ////////

let salary5 = Number(prompt("Enter your salary:"));     // string convert to number  then user enter the salary 
if(salary > 50000){
    riskLevel9 = "low risk"               // if statement was input its enter low amt low risk slary based 
} else[
    riskLevel9= 'high risk'                //if statement was input its enter high amt high risk slary based 
]
console.log("Risk Level:", riskLevel9);       /// its as user based ture or fasles


                                                  /////////

let emi6 = Number(prompt("Enter your EMI:"));
let customerType;    // string convert t6o number

switch (true) {  /// switch statement ture condition show useful 
    case (emi6 > 40000):
        customerType = "Premium Customer";   // flow  tow statement was ture premium customer 
        break;

    case (emi6 > 20000):
        customerType = "Standard Customer";   /// then below  20k its standard customer 
        break;

    default:
        customerType = "Basic Customer";     //// above 10k default basic customer 
}

console.log("Customer Type:", customerType);


                                                    //////////

let salary8 = prompt("Enter your salary:");   // its as been prompt always string   


console.log("Before conversion:", typeof salary8);  // then user enter the salary its string 

salary8 = Number(salary8);   //  its  as string convert to number 


console.log("After conversion:", typeof salary8);  //  then salary type its as number 

                                                     ////////

let name9 = prompt("Enter Name:");   // its as user prompt string always string 
let age9 = Number(prompt("Enter Age:"));  // prompt  ( string ) convert to number 
let salary9 = Number(prompt("Enter Salary:"));  //prompt  ( string ) convert to number 
let loanAmount9 = Number(prompt("Enter Loan Amount:")); // prompt  ( string ) convert to number 


console.log("Before conversion:", typeof prompt("Check type"));  // before convert to string 
let temp = Number("123");
console.log("After conversion:", typeof temp);  /// and after convert to number 


let isEligible9 = (age9 >= 21 && age9 <= 60 && salary >= 25000) // if is as use && statements  
    ? "Eligible "
    : "Not Eligible ";  // if and else if statement its all ture eligible  

console.log("\n" + isEligible9);

let emi9 = loanAmount9 / 12;
console.log("\nEMI:", emi9);  /// then div for loan amt and 12 month 


let loanCategory; // user if and else statement 

if (loanAmount9 > 500000) {
    loanCategory = "High Loan";  // ur amt is high ur print in high 
} else if (loanAmount9 > 200000) {
    loanCategory = "Medium Loan"; //ur amt is medium  ur print in medium
} else {
    loanCategory = "Low Loan";  //ur amt is low ur print in low
}

console.log("\nLoan Category:", loanCategory);

                                        ///if else statement 
let riskLevel9 = (salary > 50000) 
    ? "Low Risk" 
    : "High Risk";     /// ur salary based loan amt hign or low risk 

console.log("Risk Level:", riskLevel9); // output print risk level 


let customerType9 ;     /// 

switch (true) {  ///switch statement ture condition show useful 
    case (emi > 40000):
        customerType9 = "Premium Customer";     //40k premium customer 
        break;

    case (emi > 20000):
        customerType9 = "Standard Customer"; /// 20k standared customer 
        break;

    default:
        customerType9 = "Basic Customer";  //then default above 10k basic customer ..........
}

console.log("Customer Type:", customerType9);  // customer type useing and  stement was proved 


                                                      ///////

