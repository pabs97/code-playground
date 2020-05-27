function addNumbers(num1, num2) {

  // 123.45     3.0005

  const decimalDigits1 = num1.split('.')[1].length;
  const decimalDigits2 = num2.split('.')[1].length;
  const decimalDifference = decimalDigits1 - decimalDigits2;
  let result = '';

  if (decimalDifference > 0) {
    result = num1.substring(num1.length - decimalDifference);
  } else if (decimalDifference < 0) {
    result = num2.substring(num2.length + decimalDifference);
  }




  return result;

}

const output = addNumbers('123.45', '3.0005');
console.log(output);