export default class ApiService {
  async get(endpoint, token) {
    return await fetch(`https://api.github.com${endpoint}`).then((res) => {
      return res.json().then((body) => {
        if (res.status === 200) {
          return body;
        }
        if (res.status === 403) {
          console.log("no token de la api");
        } else {
          throw Error(body.message);
        }
      });
    });
  }
}
