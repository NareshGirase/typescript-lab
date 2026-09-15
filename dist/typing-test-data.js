function login(username, password) {
    return {
        username,
        password,
        loggedIn: true
    };
}
let lg = login('naresh', 'Naresh@123');
console.log(lg);
export {};
