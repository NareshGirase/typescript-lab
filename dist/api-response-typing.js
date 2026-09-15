function assertUserResponse(user) {
    if (user.id <= 0) {
        throw new Error('Invalid user ID');
    }
    else if (user.name === "") {
        throw new Error("Invalid user name");
    }
    else if (user.email === "") {
        throw new Error("invalid email id");
    }
    else if (user.isActive) {
        throw new Error("user is not active");
    }
    else {
        console.log("user response is valid");
    }
}
const user = {
    id: 1,
    name: "Naresh",
    email: "naresh@gmail.com",
    isActive: true
};
assertUserResponse(user);
export {};
