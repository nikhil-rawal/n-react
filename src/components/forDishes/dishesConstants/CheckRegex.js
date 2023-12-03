function regularExpressionCheck(checkString) {
  if (checkString.length === 5) return checkString;
  let result = /(?<=_id[=])[0-9]{5}/g.exec(checkString);
  return result;
}

export default regularExpressionCheck;
