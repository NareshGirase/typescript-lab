function login(username: string, password: string) {
    return {
        username,
        password,
        loggedIn: true
    };
}

let lg = login('naresh','Naresh@123');
console.log(lg);