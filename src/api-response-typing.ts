//Define an interface for the expected response and write a typed assertion function.
interface UserResponse {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}

function assertUserResponse(user: UserResponse): void {
    if (user.id <= 0) {
        throw new Error('Invalid user ID')
    }
    else if (user.name === "") {
        throw new Error("Invalid user name")
    }
    else if (user.email === "") {
        throw new Error("invalid email id")
    }
    else if (user.isActive) {
        throw new Error("user is not active")
    }
    else {
        console.log("user response is valid")
    }
}

const user: UserResponse = {
    id: 1,
    name: "Naresh",
    email: "naresh@gmail.com",
    isActive: true
};


assertUserResponse(user);