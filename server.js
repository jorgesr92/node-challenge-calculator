const express = require("express");
const app = express();

const port = 3000;

const getNumbers = (numbers) => {
    console.log(numbers);
}

/* app.get('/Add', (req, res) => {
    getNumbers(req.query);
    const num1 = req.query.value1;
    const num2 = req.query.value2;
    console.log(`el cliente quiere sumar los numeros ${num1} y ${num2}`);
    res.send(`La suma de los numeros ${num1} y ${num2} es: ${parseInt(num1) + parseInt(num2)}`);
});

app.get('/Substract', (req, res) => {
    const num1 = req.query.value1;
    const num2 = req.query.value2;
    console.log(`el cliente quiere restar los numeros ${num1} y ${num2}`);
    res.send(`La resta de los numeros ${num1} y ${num2} es: ${parseInt(num1) - parseInt(num2)}`);
});

app.get('/Multiply', (req, res) => {
    const num1 = req.query.value1;
    const num2 = req.query.value2;
    console.log(`el cliente quiere multiplicar los numeros ${num1} y ${num2}`);
    res.send(`La multiplicación de los numeros ${num1} y ${num2} es: ${parseInt(num1) * parseInt(num2)}`);
});

app.get('/Divide', (req, res) => {
    const num1 = req.query.value1;
    const num2 = req.query.value2;
    console.log(`el cliente quiere dividir los numeros ${num1} y ${num2}`);
    res.send(`La división de los numeros ${num1} y ${num2} es: ${parseInt(num1) / parseInt(num2)}`);
});
 */

const myLogger = (req, res, next) => {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    next();
};
app.use(myLogger);

 const getResult = (oper, value1, value2) => {
    if (oper === "add") {
        return +value1 + +value2;
    } else if (oper ==="substract") {
        return +value1 - +value2;
    }else if (oper ==="multiply") {
        return +value1 - +value2;
    }else if (oper ==="divide") {
        return +value1 - +value2;
    };
 };

app.get('/:operation/:value1/:value2', (req, res) => {
    const operation = req.params.operation;
    const num1 = req.params.value1;
    const num2 = req.params.value2;
    let result = getResult(operation, num1, num2);
    console.log(`el cliente quiere ${operation} los numeros ${num1} y ${num2}`);
    res.send(`La ${operation} de los numeros ${num1} y ${num2} es: ${result.toString()}`);
});


app.listen(port, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});