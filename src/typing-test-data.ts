// Convert this to TypeScript, ensuring username and password are strings and the function's return shape is explicit.
function login(username: string, password: string) {
    return {
        username,
        password,
        loggedIn: true
    };
}

let lg = login('naresh','Naresh@123');
console.log(lg);