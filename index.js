const axios = require("axios");

const User = require("./lib/user");
const Module = require("./lib/module");

class IntranetApi {
  /**
   * Init the IntranetApi
   * @param {string} autologin - The autologin of the user
   */
  constructor(autologin) {
    this.autologin = autologin.replace("https://intra.epitech.eu/", "");
    this.url = `https://intra.epitech.eu/${this.autologin}`;
    this.login = null;
    this.city = null;
    this.year = null;
    this.user = new User(this);
    this.module = new Module(this);
  }

  async get(endpoint, resolveonError) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.url}${endpoint}?format=json`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (resolveonError) {
            resolve(error.response.data);
          } else {
            reject(error);
          }
        });
    });
  }
}

module.exports = IntranetApi;
