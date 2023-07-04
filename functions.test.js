import {
  capitalise,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./functions";

test("takes a string and returns it with first letter capitalised", () => {
  expect(capitalise("test")).toBe("Test");
  expect(capitalise("hello world")).toBe("Hello world");
});

test("reverses a string", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
  expect(reverseString("hi")).toBe("ih");
});

test("calculator adds", () => {
  expect(calculator.add(4, 7)).toBe(11);
});

test("calculator subtracts", () => {
  expect(calculator.subtract(6, 4)).toBe(2);
});

test("calculator multiplies", () => {
  expect(calculator.multiply(4, 6)).toBe(24);
});

test("calculator divides", () => {
  expect(calculator.divide(4, 2)).toBe(2);
  expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
});

test("caesar wraps entire case", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 5)).toBe(
    "fghijklmnopqrstuvwxyzabcde"
  );
});

test("caesar keeps the same case", () => {
  expect(caesarCipher("Hello World", 2)).toBe("Jgnnq Yqtnf");
});

test("caesar keeps punctuation", () => {
  expect(caesarCipher("lol, that's funny", 7)).toBe("svs, aoha'z mbuuf");
});

test("analyze array works", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
