const axios = require("axios");

const User = require("./lib/user");

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
  }

  async initData() {
    axios
      .get(`https://intra.epitech.eu/${this.autologin}/user/?format=json`)
      .then((response) => {
        this.login = response.data.login;
        this.city = response.data.location.split("/").pop();
        this.year = response.data.scolaryear;
        console.log(`Logged in as ${this.login}`);
        console.log(`City: ${this.city}`);
        console.log(`Year: ${this.year}`);

      })
      .catch((error) => {
        console.log(error);
      });
  }

  async get(endpoint) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.url}/${endpoint}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = IntranetApi;
