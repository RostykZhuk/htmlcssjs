// // Make Pow
// let a = 2;
// let b = 5;

// a ** b; // 32

// Math.pow(a, b); // 32

// // Execution order
// let a = 5,
//     b = 2,
//     c = 2;

// a ** b ** c; // 625

// // Execution order of a ** b ** c;
// (5 ** (2 ** 2))
// (5 ** 4);
// 625

// // One more example;
// (5 ** (2 ** 3))
// (5 ** 8);
// 390625

// // Invalid Operations
// +a ** b;
// -a ** b;
// ~a ** b;
// !a ** b;
// delete a ** b;
// void a ** b;
// typeof a ** b;

// // Uncaught SyntaxError: Unary operator used
// // immediately before exponentiation expression.
// //Parenthesis must be used to disambiguate
// //operator precedence

// // Handling negative numbers
// -2 ** 2; //invalid

// // Valid
// (-2) ** 2; // 4
// (-2) ** 3; //-8

// // Any operation on NaN is NaN
// NaN ** 1; //NaN
// NaN ** NaN; // NaN

// // Undefined
// 1 ** undefined; // NaN

// // explanation
// 1 ** Number(undefined);
// 1 ** NaN; // NaN

// // null
// 10 ** null; // 1

// // because
// 10 ** Number(null); // Number(null) --> 0
// 10 ** 0; // 1
