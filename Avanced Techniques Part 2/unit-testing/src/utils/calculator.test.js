import * as calucator from "./calculator";

describe('Calculator Sum', () => {
    test('sum of positive numbers should be positive', () => {
        // Arrange
        let first = 1;
        let second = 2;
        const expectedResult = 3;
        // Act
        const actualResult = calucator.sum(first, second)
    
        // Assert
        expect(actualResult).toBe(expectedResult); 
    });
    
    test('Should return negative number when adding negative numbers', () => {
        expect(calucator.sum(-1, -2)).toBe(-3);
    });

    test('Use undefines as an argument should return NaN', () => {
        expect(calucator.sum(undefined, 2)).toBe(NaN);
    })

    test('Use undefines as an argument should return NaN', () => {
        expect(calucator.sum('1', 2)).toBe(3);
    })
});

describe('Calculator Divide', () => {
    test('Should throw error when divide by zero', () => {
        expect(() => calucator.divide(2, 0)).toThrow();
    })
})