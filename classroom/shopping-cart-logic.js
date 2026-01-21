// Task 1 
const rawUsers = [
  { id: 1, name: "Rahul", password: "fb_password", role: "admin" },
  { id: 2, name: "Sanya", password: "123_password", role: "user" },
  { id: 3, name: "Amit", password: "secret_password", role: "user" }
];

const safeUsers = rawUsers.map(({ password, ...user }) => user);
console.log("Safe Users (no passwords):", safeUsers);

const admins = rawUsers.filter(user => user.role === "admin");
console.log("Admins only:", admins);

// Task 2: Shopping Cart Logic
const cart = [
  { item: "Laptop", price: 50000, quantity: 1, inStock: true },
  { item: "Mouse", price: 1500, quantity: 2, inStock: true },
  { item: "Keyboard", price: 3000, quantity: 1, inStock: false }
];

const allInStock = cart.every(item => item.inStock);
console.log(allInStock ? "Ready to Ship" : "Wait");

const availableItems = cart.filter(item => item.inStock);
console.log("Available Items:", availableItems);

const totalBill = availableItems.reduce((total, item) => {
  return total + (item.price * item.quantity);
}, 0);

console.log("Final Total Bill: ₹", totalBill);
