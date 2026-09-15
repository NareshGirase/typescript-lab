//Refactor a real JS test file into TypeScript
interface User {
    id: number;
    name: string;
    active: boolean;
}

const users: User[] = [
    { id: 1, name: "Saad", active: true },
    { id: 2, name: "Dev", active: false }
];

function getActiveUsers(users: User[]): User[] {
    return users.filter(u => u.active);
}

const result = getActiveUsers(users);

if (result.length === 1) {
    console.log("Test passed");
} else {
    console.log("Test failed");
}