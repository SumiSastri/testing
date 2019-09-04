import { notDeepEqual } from 'assert';

// describe('simple test', () => {
//   // what do you expect the method to do
//   it('a is a greeting hello world, and b is not null', () => {
//     const a = 'Hello World';
//     const b = true;
//     // assert
//     expect(a).toBe('Hello World');
//     expect(b).not.toBe(null);
//   });
// });

describe('addition', () => {
  // set the expectation of what the test should achieve
  it('should add a+b = c', () => {
    // assertion of the test is check if this function adds
    expect(add(10, 5)).toEqual(15);
    // you can write a test assertion to drive an error to see what the error message is
  });
  // Chain assertions
  it('should add a+b but not equal z', () => {
    // expect method now is do not add
    expect(add(10, 5)).not.toEqual(15);
  });
  it('should add a+b and throw an error if the number is not 15', () => {
    expect(add(10, 5)).toEqual(16);
  });
});
