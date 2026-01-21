

// TASK 1
function checkOrder(orderId) {
    return new Promise((ok, notOk) => {
        setTimeout(() => {
            if (typeof orderId === 'number') {
                ok(" Order Shipped!");
            } else {
                notOk(" Wrong Order ID!");
            }
        }, 1000); 
    });
}

async function testOrder() {
    try {
        console.log("Checking order 123...");
        let result = await checkOrder(123);
        console.log(result);
        
        console.log("Checking wrong order...");
        let wrong = await checkOrder("abc");
    } catch(error) {
        console.log(error);
    }
}
// Task 2
function findUser(name) {
    return new Promise((ok) => {
        setTimeout(() => {
            ok({ name: "Rahul", type: "Premium" });
        }, 1500); 
    });
}

function checkPremium(user) {
    return new Promise((ok, notOk) => {
        setTimeout(() => {
            if (user.type === "Premium") {
                ok("🎉 Netflix Access OK!");
            } else {
                notOk("💳 Please Pay First!");
            }
        }, 500);
    });
}

async function loginUser() {
    try {
        console.log("Step 1: Finding user...");
        let user = await findUser("rahul");
        console.log("Found:", user.name);
        
        console.log("Step 2: Check premium...");
        let access = await checkPremium(user);
        console.log(access);
    } catch(error) {
        console.log("Error:", error);
    }
}

function getUser(id) {
    return new Promise((ok) => {
        setTimeout(() => {
            ok({ name: "Rahul", premium: true });
        }, 1000);
    });
}

function getOrders(id) {
    return new Promise((ok) => {
        setTimeout(() => {
            ok([
                { item: "Laptop", price: 1000, done: "yes" },
                { item: "Phone", price: 500, done: "no" }
            ]);
        }, 2000);
    });
}
// Task 3
async function showShop() {
    try {
        console.log("Loading your shop...");
        
        let [user, orders] = await Promise.all([getUser(1), getOrders(1)]);
        
        console.log("Hi " + user.name + "!");
        
        let delivered = orders.filter(item => item.done === "yes");
        
        let total = 0;
        delivered.forEach(item => {
            let price = item.price;
            if (user.premium) {
                price = price * 0.9;
            }
            total += price;
            console.log(item.item + ": ₹" + price);
        });
        
        console.log("Total: ₹" + total);
        
    } catch(error) {
        console.log("Shop error:", error);
    }
}

async function start() {
    console.log(" STARTING PROMISES!");
    console.log("=".repeat(40));
    
    await testOrder();
    console.log("\n---");
    
    await loginUser(); 
    console.log("\n---");
    
    await showShop();
}

start();
