const express = require("express");
const app = express();

const port = 3000;

app.get('/Add', (req, res) => {
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

app.listen(port, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});