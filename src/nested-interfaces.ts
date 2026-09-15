//Model the full shape with nested interfaces.

interface Address {
    street: string,
    city: string,
    state: string,
    pincode: number
}

interface CartItem {
    productName: string,
    quantity: number,
    price: number
}

interface CheckoutData {
    customerName: string;
    email: string;
    address: Address;
    cartItems: CartItem[];
}

const checkout: CheckoutData = {
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