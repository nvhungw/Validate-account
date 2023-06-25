function validate(email) {
  const regex = /^[_a-z0-9]{6,}$/;
  return regex.test(email);
}
console.log(validate('123abc_'));
console.log(validate('_abc123'));
console.log(validate('______'));
console.log(validate('123456'));
console.log(validate('abcdefg'));
console.log(validate('.@'));
console.log(validate('12345'));
console.log(validate('1234_'));
console.log(validate('abcde '));
