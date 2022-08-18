const obj = require("./unittest")

const {stringLength,reverseString, calc, capitalize} = obj

test ('stringLength', () => {
  expect(stringLength('Hello')).toBeTruthy();
});

test ('reverseString', () => {
  const str = "Hello"
  const reverse = str.split("").reverse().join("");
  expect(reverseString (str)).toBe(reverse)
});

describe('Calculator', () => {
  const { add, subtract, multiply, division } = calc;
  test('adding values', () => {
    const sum = 5 + 9;
    expect(add(5, 9)).toBe(sum);
  });

  test('subtracting', () => {
    const val = 10 - 2;
    expect(subtract(10, 2)).toBe(val);
  });

  test('multiplying', () => {
    const val = 6 * 6;
    expect(multiply(6, 6)).toBe(val);
  });

  test('dividing', () => {
    const val = 20 / 5;
    expect(division(20, 5)).toBe(val);
  });
});

test('capitalize', () => {
  const str = 'first';
  expect(capitalize(str)).toBe(str.charAt(0).toUpperCase());
});