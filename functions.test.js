import functions from "./functions.js";

test('Adding 1 + 1 equals 2', () => {
    expect(returnTwo(1, 1)).toBe(2)
  });

  test('Greet Name for Hello Name', () => {
    expect(greeting('James')).toBe('Hello James');
    expect(greeting('Jill')).toBe('Hello Jill');
  })
 
  test('Adding 1 + 1 equals x', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(5, 9)).toBe(14);
  });
  