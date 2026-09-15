function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);
function print() {
    console.log('not return anything');
}
print();
function clickElement(element) {
    console.log(`click on element: ${element}`);
}
clickElement('loginBtn');
/**
 * this function checking element on the page
 * @param element
 * @param timeout
 * @returns it returns a boolean value
 */
function isElementDisplyed(element, timeout) {
    let isElement = true;
    if (isElement) {
        console.log(`element is present on the page: ${element} within time ${timeout}`);
        return true;
    }
    else {
        console.log(`element is not found....`);
        return false;
    }
}
isElementDisplyed('username', 10);
function getData() {
    console.log('get data .............');
    return ['macbook', 'imac', 'cannon'];
}
console.log(getData());
// this function never returns anything
function throwError(mesg) {
    throw new Error(mesg);
}
function getUserData() {
    return {
        name: 'Naresh',
        age: 30
    };
}
let user = getUserData();
console.log(user);
export {};
