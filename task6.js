let cart = [
  {name: "Shirt", price: 500, qty: 2},
  {name: "Shoes", price: 1500, qty: 1},
  {name: "Cap", price: 300, qty: 3}        /// array to product name create 
];

                                                        
let totalPrice = cart.reduce((total, item) => {    /////  Calculate total price using reduce
  return total + (item.price * item.qty);              ///array convent into one value 
}, 0);

console.log("Total Price:", totalPrice);


let expensiveProducts = cart.filter(item => item.price > 1000);   //  Print only products above 1000 price using filter

console.log("Products above 1000:", expensiveProducts);

let productNamesUpper = cart.map(item => item.name.toUpperCase());  // //  Get all product names in uppercase using map

console.log("Product Names (Uppercase):", productNamesUpper);         //// then output on the screen 

                                                                                 /////

let students = [
  {name: "Arun", marks: 85},
  {name: "Bala", marks: 45},
  {name: "Charan", marks: 60},
  {name: "Divya", marks: 30}
];

let failedStudents = students.filter(student => student.marks < 50);    /////  Failed students (marks < 50)
console.log("Failed Students:", failedStudents);


let hasDistinction = students.some(student => student.marks > 80);   //  Any distinction (>80)
console.log("Has Distinction:", hasDistinction);


let allPassed = students.every(student => student.marks > 35);   //  All passed (>35)
console.log("All Passed:", allPassed);


let firstFailed = students.find(student => student.marks < 50);   //  First failed student
console.log("First Failed Student:", firstFailed);


                                                                                                /////

let employees = [
  {name: "A", salary: 25000},
  {name: "B", salary: 40000},
  {name: "C", salary: 15000},
  {name: "D", salary: 50000}
];


let increasedSalary = employees.map(emp => {       //  Increase salary by 10%
  return {
    ...emp,
    salary: emp.salary * 1.10
  };
});

console.log("After 10% hike:", increasedSalary);

let highEarners = employees.filter(emp => emp.salary > 30000);   //  Employees with salary > 30000

console.log("Salary > 30000:", highEarners);


let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0); //  Total salary expense

console.log("Total Salary Expense:", totalSalary);


let sortedEmployees = [...employees].sort((a, b) => b.salary - a.salary);   //  Sort employees by highest salary

console.log("Sorted by Highest Salary:", sortedEmployees); 

                                                                                                    ////////

let products = ["Laptop", "Mobile", "Tablet", "Camera"];


let hasMobile = products.includes("Mobile");    //  Check if "Mobile" exists
console.log("Mobile exists:", hasMobile);


let lowerCaseProducts = products.map(p => p.toLowerCase());  //  Convert all to lowercase
console.log("Lowercase:", lowerCaseProducts);


let tabletIndex = products.indexOf("Tablet");  //  Find index of "Tablet"
console.log("Index of Tablet:", tabletIndex);


let productString = products.join("-");             //  Convert array to string using join("-")
console.log("Joined String:", productString);

                                                                                                       ///////


let dob = new Date("2003-05-15"); // change this date   /// /  Take DOB (hardcoded)


let today = new Date();   //  Get current date


let age = today.getFullYear() - dob.getFullYear();  //  Calculate age


let monthDiff = today.getMonth() - dob.getMonth();  // Adjust if birthday not yet reached this year
let dayDiff = today.getDate() - dob.getDate();

if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
  age--;
}


console.log(`You are ${age} years old`); //  Print result

                                                                                                   /////
                                                                
let users = [
  {username: "admin", password: "1234"},
  {username: "user", password: "abcd"}
];

let inputUsername = "admin";       // Input (you can change this)
let inputPassword = "1234";


let foundUser = users.find(user => user.username === inputUsername);    //  Check if user exists using find


if (foundUser && foundUser.password === inputPassword) {           // 2. Validate username & password
  console.log("Login Success ");
} else {
  console.log("Invalid Credentials ");
}

                                                                                                            ///////

let numbers = [10, 15, 20, 25, 30];


let evenNumbers = numbers.filter(num => num % 2 === 0);    //  Get all even numbers
console.log("Even Numbers:", evenNumbers);


let hasOdd = numbers.some(num => num % 2 !== 0);     //  Check if any odd number exists
console.log("Any Odd Number Exists:", hasOdd);


let allEven = numbers.every(num => num % 2 === 0);   //  Check if all numbers are even
console.log("All Numbers Even:", allEven);


let firstGreaterThan20 = numbers.find(num => num > 20);  //  Find first number > 20
console.log("First Number > 20:", firstGreaterThan20); 

                                                                                                          ///////

let orders = [
  {id: 1, amount: 500, status: "delivered"},
  {id: 2, amount: 1500, status: "pending"},
  {id: 3, amount: 2000, status: "delivered"}
];


let totalRevenue = orders
  .filter(order => order.status === "delivered")     // Total revenue of delivered orders
  .reduce((sum, order) => sum + order.amount, 0);

console.log("Total Delivered Revenue:", totalRevenue);


let pendingOrders = orders.filter(order => order.status === "pending");   //  Get all pending orders
console.log("Pending Orders:", pendingOrders);


let hasHighValueOrder = orders.some(order => order.amount > 1000);   //  Check if any order > 1000
console.log("Any Order > 1000:", hasHighValueOrder);


let sortedOrders = [...orders].sort((a, b) => a.amount - b.amount);  //  Sort orders by amount (ascending)
console.log("Sorted Orders (Ascending):", sortedOrders);