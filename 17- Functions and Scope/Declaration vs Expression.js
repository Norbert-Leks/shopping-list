// Function Declartion -- Doesnt end with a semi colon
function addDollarSign(value){
    return '$' + value;
}

console.log(addDollarSign(100));

// Function Expression -- Ends with a semi colon
const addPlusSign = function(value) {
    return '+' + value;
};

console.log(addPlusSign(200));

