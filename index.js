let x =5;
let y =10;
let z = 20;

function add(x, y) {
    return x + y;
}

function subtract(z, y) {
    return z - y;
}

function multiply(x, z) {
    return x * z;
}

function divide(z,y) {
    return z / y;
}

function increment(z) {
    return (z +=1);
}

function decrement(z) {
    return (z-=1);
}

function makeInt(string) {
    return parseInt(string,10);
}

function preserveDecimal(string) {
    return parseFloat(string);
}