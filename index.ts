import * as readline from 'readline';

class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculator = new Calculator();

rl.question('Enter the first number: ', (num1Input) => {
  const num1 = parseFloat(num1Input);

  rl.question('Enter the second number: ', (num2Input) => {
    const num2 = parseFloat(num2Input);

    console.log('--- Results ---');
    console.log('Addition:', calculator.add(num1, num2));
    console.log('Subtraction:', calculator.subtract(num1, num2));
    console.log('Multiplication:', calculator.multiply(num1, num2));

    try {
      console.log('Division:', calculator.divide(num1, num2));
    } catch (error) {
      console.error(error.message);
    }

    rl.close();
  });
});
