//project calculator ramadan night coding with sir zia and sir ameen alam





var  prompt = require("prompt-sync")();

let n1 = parseInt (prompt(`what is your first numbrer`));

let n2= parseInt (prompt(`what is your second numbrer`));

let operator = prompt(`what is your third opearor (  + , - , * , /)`)
 
if (operator == "+") {
console.log(`The answer is ${n1} ${operator} ${n2} = ${n1 + n2}`);
    
}
 
else if (operator == "-") {
console.log(`The answer is ${n1} ${operator} ${n2} = ${n1 - n2}`)}
 
else if (operator == "*") {
console.log(`The answer is ${n1} ${operator} ${n2} = ${n1 * n2}`)}
 
else if (operator == "/") {
console.log(`The answer is ${n1} ${operator} ${n2} = ${n1 / n2}`)}
else{ console.log(`please select the correct operator`);
}
    


export{};
