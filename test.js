// FAILED Test Case: getPrices method applies tax when taxBoolean parameter is true
// Your Code Produced:
// Dish:  Italian pasta Price: $ 11.46\nDish:  Rice with veggies Price: $ 10.38\nDish:  Chicken with potatoes Price: $ 18.66\nDish:  Vegetarian Pizza Price: $ 7.74\nExpected Output Is:
// Dish: Italian pasta Price: $11.46
// Dish: Rice with veggies Price: $10.38
// Dish: Chicken with potatoes Price: $18.66
// Dish: Vegetarian Pizza Price: $7.74

// FAILED Test Case: getPrices method does not apply tax when taxBoolean parameter is false
// Your Code Produced:
// Dish:  Italian pasta Price: $ 9.55\nDish:  Rice with veggies Price: $ 8.65\nDish:  Chicken with potatoes Price: $ 15.55\nDish:  Vegetarian Pizza Price: $ 6.45\nExpected Output Is:
// Dish: Italian pasta Price: $9.55
// Dish: Rice with veggies Price: $8.65
// Dish: Chicken with potatoes Price: $15.55
// Dish: Vegetarian Pizza Price: $6.45

// Passed: getPrices method logs expected error message when taxBoolean is not supplied
// FAILED Test Case: getDiscount method when tax is applied and guests less than 5
// Your Code Produced:
// Dish:  Italian pasta Price: $ 11.46\nDish:  Rice with veggies Price: $ 10.38\nDish:  Chicken with potatoes Price: $ 18.66\nDish:  Vegetarian Pizza Price: $ 7.74\nDiscount is: $5\nExpected Output Is:
// Dish: Italian pasta Price: $11.46
// Dish: Rice with veggies Price: $10.38
// Dish: Chicken with potatoes Price: $18.66
// Dish: Vegetarian Pizza Price: $7.74
// Discount is: $5

// FAILED Test Case: getDiscount method when tax is applied and guests more than 5
// Your Code Produced:
// Dish:  Italian pasta Price: $ 11.46\nDish:  Rice with veggies Price: $ 10.38\nDish:  Chicken with potatoes Price: $ 18.66\nDish:  Vegetarian Pizza Price: $ 7.74\nDiscount is: $10\nExpected Output Is:
// Dish: Italian pasta Price: $11.46
// Dish: Rice with veggies Price: $10.38
// Dish: Chicken with potatoes Price: $18.66
// Dish: Vegetarian Pizza Price: $7.74
// Discount is: $10

// FAILED Test Case: getDiscount method when tax is not applied and guests less than 5
// Your Code Produced:
// Dish:  Italian pasta Price: $ 9.55\nDish:  Rice with veggies Price: $ 8.65\nDish:  Chicken with potatoes Price: $ 15.55\nDish:  Vegetarian Pizza Price: $ 6.45\nDiscount is: $5\nExpected Output Is:
// Dish: Italian pasta Price: $9.55
// Dish: Rice with veggies Price: $8.65
// Dish: Chicken with potatoes Price: $15.55
// Dish: Vegetarian Pizza Price: $6.45
// Discount is: $5

// FAILED Test Case: getDiscount method when tax is not applied and guests more than 5
// Your Code Produced:
// Dish:  Italian pasta Price: $ 9.55\nDish:  Rice with veggies Price: $ 8.65\nDish:  Chicken with potatoes Price: $ 15.55\nDish:  Vegetarian Pizza Price: $ 6.45\nDiscount is: $10\nExpected Output Is:
// Dish: Italian pasta Price: $9.55
// Dish: Rice with veggies Price: $8.65
// Dish: Chicken with potatoes Price: $15.55
// Dish: Vegetarian Pizza Price: $6.45
// Discount is: $10

// FAILED Test Case: getDiscount method logs expected error message when guests count not in range
// Your Code Produced:
// Dish:  Italian pasta Price: $ 11.46\nDish:  Rice with veggies Price: $ 10.38\nDish:  Chicken with potatoes Price: $ 18.66\nDish:  Vegetarian Pizza Price: $ 7.74\nThe second argument must be a number between 0 and 30\nExpected Output Is:
// Dish: Italian pasta Price: $11.46
// Dish: Rice with veggies Price: $10.38
// Dish: Chicken with potatoes Price: $18.66
// Dish: Vegetarian Pizza Price: $7.74
// The second argument must be a number between 0 and 30