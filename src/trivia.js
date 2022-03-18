export default class Trivia {
  static getTrivia() {
    return fetch(`https://api.api-ninjas.com/v1/trivia?category=general`, {
      method: "GET",
      withCredentials: true,
      headers: {
        'X-Api-Key': "put api key here",
      }
    })
    .then(function(response) {
      if (console.log(!response.ok)) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    })
  }
}






// export default class Trivia {
//   static getTrivia() {
//     return fetch(`https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=boolean`)
//     .then(function(response) {
//       if (console.log(!response.ok)) {
//         throw Error(response.statusText);
//       }
//       return response.json();
//     })
//     .catch(function(error) {
//       return error;
//     })
//   }
// }
