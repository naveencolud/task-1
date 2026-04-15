console.log("Order placed");  //// started to be run in the order 

setTimeout(() => {
    console.log("Preparing food");      /// is  2000 ms 2min before run preparing time
}, 2000);

setTimeout(() => {
    console.log("Food ready");          //// then 4000 ms 4min run the food ready time 
}, 4000);

setTimeout(() => { 
    console.log("Delivered");              ////then same 50000 ms 5min and delived 
}, 5000);

                                                              /////// 

let count = 0;                                //// 0 is as been count varb 

const clock = setInterval(() => {            /// this as loop run 1min 1000ms
    const now = new Date();
    console.log(now.toLocaleTimeString());      /// its print in the time only 
    
    count++;                                    //// sec to be increses statement 

    if (count === 10) {                                  //// then count will 10 lock no run time
        clearInterval(clock);
        console.log("Clock stopped");        //// print the screen 
    }
}, 1000);

                                                                //////

function loginUser(callback) {         /// 1sec wait statements 
    setTimeout(() => {
        console.log("User Logged In");         //// user logged in printed
        callback();                                                            //// then call back the next statrement 
    }, 1000);                        
}

function getUserData(callback) {            /// 1sec delay  
    setTimeout(() => {
        console.log("User Data Fetched");                   /// printed the user data fetched 
        callback();
    }, 1000);                                                          /// then calll back the next staements
}  

function getUserPosts(callback) {                 //// 1sec wait 
    setTimeout(() => {
        console.log("User Posts Fetched");                     /// print the user posts feched 
        callback();                             /// then call back the next statements 
    }, 1000);
}

loginUser(() => {
    getUserData(() => {
        getUserPosts(() => {                     //// callback hell  statements 
    
        });
    });
});


                                                                   ////

function getProducts() {
    return new Promise((resolve, reject) => {               /// set the promises resolve ok reject not ok 
        setTimeout(() => {
            const success = true;                            // change to false to test error
            
            if (success) {
                resolve([
                    { id: 1, name: "Laptop" },                  //// resolved all the call data return 
                    { id: 2, name: "Mobile" },
                    { id: 3, name: "Headphones" }
                ]);
            } else {
                reject("API Failed");                         //// reject then error message donoted
            }
        }, 2000);
    });
}

                                                                          // Consuming the Promise 
getProducts()
    .then((products) => {
        console.log("Products:", products);     //// resolve run print the screen 
    })
    .catch((error) => {
        console.log("Error:", error);                   //// reject its as been error 
    })
    .finally(() => {
        console.log("Request completed");                 /// always run success or any error 
    });