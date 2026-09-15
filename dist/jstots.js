const users = [
    { id: 1, name: "Saad", active: true },
    { id: 2, name: "Dev", active: false }
];
function getActiveUsers(users) {
    return users.filter(u => u.active);
}
const result = getActiveUsers(users);
if (result.length === 1) {
    console.log("Test passed");
}
else {
    console.log("Test failed");
}
export {};
