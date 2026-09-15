//Model the full shape with nested interfaces.
const checkout = {
    customerName: 'Naresh',
    email: 'naresh@gmail.com',
    address: {
        street: "MG Road",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: 400001
    },
    cartItems: [
        {
            productName: "Laptop",
            quantity: 1,
            price: 50000
        },
        {
            productName: "Mouse",
            quantity: 2,
            price: 400
        }
    ]
};
console.log(checkout);
export {};
