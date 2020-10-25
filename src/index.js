module.exports = function check(str, bracketsConfig) {
  // your solution
  let newbrackConf = [], string = str;

  for (let i = 0; i < bracketsConfig.length; i++) {
    newbrackConf.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < newbrackConf.length; j++) {
      string = string.replace(newbrackConf[j], "");
    }
    if (string.length == 0) {
      return true;
    }
  }

  return false;
}
