// Ülesanne 1 //
var arr = ['welcome', 'hey', 'hello']

function findLongestString(arr) { let longestStringArr = arr.sort((a, b) => a.length - b.length).reverse(); return longestStringArr[0]; }

console.log(findLongestString(arr))

// Ülesanne 2 //
function checkTheEnding(str, target){
  if ( str === ""){
  return('Both strings are required')
}else{
  return str.slice(str.length - target.length) === target 
}
};


console.log(checkTheEnding("welcome", "ome"));
console.log(checkTheEnding("welcome", "end"));
console.log(checkTheEnding("", "end"));


// Ülesanne 3 //
const axios = require("axios");
const fetchUser = async (userId) =>
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => "error");

module.exports = {fetchUser, checkTheEnding, findLongestString };


