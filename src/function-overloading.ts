//Type this with function overloads.

function findElement(slector: string): string;
function findElement(index: number): string;

function findElement(selectorOrindex: string | number): string {
    if (typeof selectorOrindex === "string") {
        return (`finding element using selector ${selectorOrindex}`)
    }
    return (`finding element using index ${selectorOrindex}`)
}

let elementIsSelector = findElement('.class');
console.log(elementIsSelector);

let elementIsIndex = findElement(2);
console.log(elementIsIndex);