export default class CurrencyExchange {
  static getPaid() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else if (this.status === 404) {
          alert("404 Page not Found")
        } else { 
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  } 
}

// export class ClassExample2 {
//   constructor() {

//   }

//   function1() {

//   }

//   function2() {

//   }
// }