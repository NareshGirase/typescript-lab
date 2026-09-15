//Type this so overrides only accepts a partial User shape (i.e., any subset of User fields).
function createUser(overrides = {}) {
    return {
        id: 1,
        name: "Test User",
        email: "test@example.com",
        ...overrides
    };
}
const user1 = createUser();
const user2 = createUser({
    name: "Naresh"
});
const user3 = createUser({
    id: 10,
    email: "[naresh@example.com](mailto:naresh@example.com)"
});
console.log(user1);
console.log(user2);
console.log(user3);
export {};
