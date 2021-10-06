// const calculate = require("./script");

const calculate = (n1, operatorSymbol, n2) => {
    module.exports = calculate;
    const firstNum = parseFloat(n1);
    const secondNum = parseFloat(n2);
    if (operatorSymbol === 'add') return firstNum + secondNum;
    if (operatorSymbol === 'subtract') return firstNum - secondNum;
    if (operatorSymbol === 'multiply') return firstNum * secondNum;
    if (operatorSymbol === 'divide') return firstNum / secondNum;
}

describe("Given calculate function", () => {
    describe("When a recived a Number1 = 5, operator * and Number2 = 10", () => {
        test("Then it returns 50", () => {
            const number1 = 5;
            const operator = "multiply";
            const number2 = 10;

            const expected = 50;

            const result = calculate(number1, operator, number2);
            expect(result).toBe(expected);
        });
    });
    describe("When a recived a Number1 = 5, operator + and Number2 = 10", () => {
        test("Then it returns 15", () => {
            const number1 = 5;
            const operator = "add";
            const number2 = 10;

            const expected = 15;

            const result = calculate(number1, operator, number2);
            expect(result).toBe(expected);
        });
    });
    describe("When a recived a Number1 = 5, operator - and Number2 = 10", () => {
        test("Then it returns -5", () => {
            const number1 = 5;
            const operator = "subtract";
            const number2 = 10;

            const expected = -5;

            const result = calculate(number1, operator, number2);
            expect(result).toBe(expected);
        });
    });
    describe("When a recived a Number1 = 5, operator / and Number2 = 10", () => {
        test("Then it returns 0.5", () => {
            const number1 = 5;
            const operator = "divide";
            const number2 = 10;

            const expected = 0.5;

            const result = calculate(number1, operator, number2);
            expect(result).toBe(expected);
        });
    });
});