const caseNumber = require("./script");

describe("Given caseNumber function", () => {
    describe("When a recived a Number, and on the display is '0'", () => {
        test("Then it returns this Number", () => {
            const number = 5;
            const expected = 5;

            const result = caseNumber(number);
            expect(result).toBe(expected);
        });
    });
});

/* Test suite failed to run

    The error below may be caused by using the wrong test environment, see https://jestjs.io/docs/configuration#testenvironment-string.
    Consider using the "jsdom" test environment.

  ReferenceError: document is not defined */