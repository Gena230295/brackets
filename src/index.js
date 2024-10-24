
module.exports = function check(str, bracketsConfig) {
  /*str = "|()|(||)||";
  bracketsConfig = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
    ["|", "|"],
  ];*/

  const newStr = bracketsConfig.join("");
  let stillStr = "";

  for (i = 0; i < newStr.length; i++) {
    if (newStr[i] == ",") {
      stillStr += "";
    } else {
      stillStr += newStr[i];
    }
  }

  let newArr = [];
  for (i = 0; i < stillStr.length; i = i + 2) {
    newArr.push(stillStr[i] + stillStr[i + 1]);
  }

  let stillNewStr = str;

  for (let i = 0; i < str.length; i++) {
    newArr.forEach((j) => {
      stillNewStr = stillNewStr.replace(j, "");
    });
  }
  if (stillNewStr.length == 0) {
    return true;
  }
  if (stillNewStr.length != 0) {
    return false;
  }

//   console.log(str);
//   console.log(newArr);
//   console.log(stillNewStr);
}
// console.log(check());
