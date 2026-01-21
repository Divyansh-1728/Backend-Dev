// console.log("task1")
// let user;
// setTimeout(()=>{
//    user={name:"abc",phone:"78326723",address:"Mathura"}
//     console.log("task2")
// },0);
// console.log(user)
// Promise.resolve(()=>console.log("task3"))
// console.log(user)
// const fetchUser=()=>{
//     return new Promise;{(resolve,reject)=>{
//         const users={1:{name:"raj",email:"raj@gmail.com",address:"Mathura"},2:{name:"Vishal",email:"vishal@gmail.com"}}
//     }}
// }




// TASK 1
// function checkOrderStatus(orderId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof orderId === "number") {
//         resolve("Order Shipped");
//       } else {
//         reject("Invalid Order ID");
//       }
//     }, 1000);
//   });
// }

// async function runTask1() {
//   try {
//     const result = await checkOrderStatus(123);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// runTask1();



// TASk 2
// function getUser(username) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ name: "Rahul", type: "Premium" });
//     }, 1500);
//   });
// }
// function checkSubscription(user) {
//   return new Promise((resolve, reject) => {
//     if (user.type === "Premium") {
//       resolve("Access Granted to Netflix");
//     } else {
//       reject("Please Subscribe");
//     }
//   });
// }
// async function runTask2() {
//   try {
//     const user = await getUser("Rahul");
//     const result = await checkSubscription(user);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }
// runTask2();



// TASK
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Rahul", isPremium: true });
    }, 1000);
  });
}
function fetchOrders(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { item: "Laptop", price: 1000, status: "delivered" },
        { item: "Phone", price: 500, status: "pending" }
      ]);
    }, 2000);
  });
}
async function displayDashboard(id) {
  try {
    const user = await fetchUser(id);
    const orders = await fetchOrders(id);
    const delivered = orders.filter(o => o.status === "delivered");
    let total = 0;
    if (user.isPremium) {
      total = delivered.reduce((sum, o) => sum + (o.price * 0.9), 0);
    } else {
      total = delivered.reduce((sum, o) => sum + o.price, 0);
    }
    console.log("Hello", user.name);
    console.log("Total Amount =", total);
  } catch (err) {
    console.log("Error:", err);
  }
}
displayDashboard(1);