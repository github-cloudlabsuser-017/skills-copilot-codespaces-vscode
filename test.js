class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }

    subtract() {
        return this.a - this.b;
    }

    multiply() {
        return this.a * this.b;
    }

    divide() {
        if (this.b === 0) {
            return 'Error! Division by zero is not allowed.';
        }
        return this.a / this.b;
    }
}

// Example usage:
let calculator = new Calculator(10, 5);
console.log(`Addition: ${calculator.add()}`);
console.log(`Subtraction: ${calculator.subtract()}`);
console.log(`Multiplication: ${calculator.multiply()}`);
console.log(`Division: ${calculator.divide()}`);