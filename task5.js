                                                                                            //// 

let cart1 = [
  {name: "Shirt", price: 500},
  {name: "Shoes", price: 1500}    /// create the tow cart      
]

let cart2 = [
  {name: "Watch", price: 2000}  /// then create one cart name and price 
]

let cart = [...cart1, ...cart2]  ///then merge the tow array


cart.push({name: "Cap", price: 300})  // then add the one cart cap


cart.pop()

let total1 = cart.reduce((sum, item) => sum + item.price, 0)  // each item price add 

console.log(cart)
console.log("Total:", total1)  // then print the screen total 40000


                                                                                         ///

let user = {
  name1: "Naveen",
  role: "Associate software engineer",  ///
  salary: 20000                                // creat the let name,role,salary
}

let update = {
  role: "Developer",         /// then updated the role and salary 
  salary: 30000
}

let updatedUser = { ...user, ...update }

let { name1, role, salary } = updatedUser       /// object values strone in variable 


console.log(`${name1} now a ${role} amount pre  ${salary}`)   /// then print the Naveen now a Developer amount pre 30000

                                                                                                 ////

function teamScore(teamName, ...scores) {   
  console.log("Team:", teamName)              /// fuction create tow array concept 

  
  console.log("Scores:", scores)       ///

  
  let total = scores.reduce((sum, s) => sum + s, 0)
  console.log("Total Score:", total)                        /// assiging the values 

  
  let highest = Math.max(...scores)
  console.log("Highest Score:", highest)     ///  then highst values was assigined 
}


teamScore("Warriors", 50, 60, 70, 80)  //// then output show on display 

                                                                                                     ///

let apiData = {
  user: {
    name: "Naveenkumar",
    address: {
      city: "salem",
      pincode: 6460007       // this have use for neasted fromed 
    }
  }
}


let {
  user: {
    name,
    address: { city, pincode }  //// this have use for neasted fromed 
  }
} = apiData           


console.log(`${name} lives in ${city} - ${pincode}`)  //// then print the scrren as Naveenkumar  in salem - 6460007

                                                                                                ///

let users = ["A", "B", "C", "D", "E"]    /// create let abcde


users.splice(2, 2, "X", "Y")        //// then user foe splice fromate 

console.log("After splice:", users)    ///   add the xy  remove cd  


let firstThree = users.slice(0, 3)
console.log("First 3 users:", firstThree)              //  then remove star and end 03 
                                                    

let hasB = users.includes("B")
console.log("Contains B:", hasB)        /// its as been ture 

let indexE = users.indexOf("E")
console.log("Index of E:", indexE)          /// then ptrint the screen as been 

                                                                                                     ///

let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"] // its as  been value a null undefined 


let flatData = messyData.flat(Infinity)           /// it fatdata use straing array 

let cleanData = flatData.filter(item => item != null)

console.log(cleanData)                          /// print the screen display numbers 

                                                                                                  ///

let prices = [1000, 200, 50, 5000]    //// normal path 

prices.sort((a, b) => a - b) // ///smallest → biggest (ascending order)

console.log(prices)   // then print the screen display 50, 200, 1000, 5000

                                                                                                   ///

let orders = [
  {id:1, amount:100},     
  {id:2, amount:200},
  {id:3, amount:300}                 /// then let use name and amt 
]


let total = orders.reduce((sum, order) => sum + order.amount, 0) /// then added as amt  then total amt 


let average = total / orders.length         /// then length div amt  and average amt fined 

console.log("Total Revenue:", total)
console.log("Average Order Value:", average)    ///  and print the screen display 

                                                                                                        ///

let inventory1 = ["Shirt", "Shoes", "Watch"]
let inventory2 = ["Cap", "Bag"]   /// let use 5 items create 


inventory1.push("Belt")
console.log("After Add:", inventory1)           /// then add one item belt 


inventory1.pop()
console.log("After Remove:", inventory1)      /// and remove the one inventory 


let index = inventory1.indexOf("Shoes")       /// and its as been 1 
if (index !== -1) {
  inventory1.splice(index, 1, "Sneakers")       /// index 1 repalce with sneakers 
}
console.log("After Update:", inventory1)      /// and then update the  inventory one 


let hasWatch = inventory1.includes("Watch")
console.log("Has Watch:", hasWatch)                  /// and inclueds the watch also 


let finalInventory = [...inventory1, ...inventory2]
console.log("Merged Inventory:", finalInventory)     /// and print the screen one and tow inventory

                                                                                                       ////

function processData(...data) {      /// fuction + rest optored used in the create   
  let flat = data.flat(Infinity)

  
  let unique = [...new Set(flat)]   /// and used for flat proptery  and set use for dupliced removed 

  
  let sorted = unique.sort((a, b) => a - b)   ///  then useing for assineding order 

  return sorted   /// and used for return tag 
}

console.log(processData(1, 2, [3, 4], [5, [6]]))  // and print the screen as been processdata 