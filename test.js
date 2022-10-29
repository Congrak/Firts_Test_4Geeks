const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 equal 23' , () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test ('1 dollar should be 127.9 JPY', () => {
  const JPY = fromDollarToYen(3);
  const expected = 3 * 127.9;
  expect(JPY).toBe(383.70000000000005);  
});

test ('1 yen should be 0.8 Pound', () => {
    const pound = fromYenToPound(3);
    const expected = 3 * 0.8;
    expect(pound).toBe(2.4000000000000004);  
  });
  
  