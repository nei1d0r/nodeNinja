// Modules and Require - count.js file

let counter = function(array){
    return `there are ${array.length} items in the array`;
};

let adder = function(a,b){
    return `the sum of ${a} and ${b} is ${a + b}`;
}

const pi = 3.142;

module.exports = {
    counter:counter,
    adder:adder,
    pi:pi
}; 