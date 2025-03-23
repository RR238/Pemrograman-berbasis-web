const calculate = (operator) => {
    let [a, b] = [
        parseFloat(document.getElementById("num1").value),
        parseFloat(document.getElementById("num2").value)
    ];
    
    const operations = {
        '+': (...nums) => nums.reduce((acc, curr) => acc + curr, 0),
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => b !== 0 ? a / b : 'Tidak bisa bagi 0',
        '%': (a, b) => a % b
    };
    
    document.getElementById("calcResult").innerText = operations[operator](a, b);
};