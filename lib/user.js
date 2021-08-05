class User {
  constructor(intranetApi) {
    this.intranetApi = intranetApi;
  }

  /**
   * Returns the User's Gpa
   * @returns {Promise<number>} Gpa
   */
  async getGpa() {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/user/")
        .then((response) => {
          resolve(parseFloat(response.gpa[0].gpa));
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Return the User's Crédits
   * @returns {Promise<number>} Crédits
   */
  async getCredits() {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/user/")
        .then((response) => {
          resolve(response.credits);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Return the User's Promo
   * @returns {Promise<number>} Promo
   */
  async getPromo() {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/user/")
        .then((response) => {
          resolve(response.promo);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Return the User's Name
   * @returns {Promise<string>} Name
   */
  async getName() {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/user/")
        .then((response) => {
          resolve(response.title);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Return the User's ScolarYear
   * @returns {Promise<string>} ScolarYear
   */
  async getScolarYear() {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/user/")
        .then((response) => {
          resolve(response.scolaryear);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Return the User's City
   * @returns {Promise<string>} City
   */
  async getCity() {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/user/")
        .then((response) => {
          resolve(response.location.split("/").pop());
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Return the User's Email
   * @returns {Promise<string>} Epitech Email
   */
  async getEpitechEmail() {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/user/")
        .then((response) => {
          resolve(response.login);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * return binomes List
   * @returns {Promise<Array<string>>} binomes}
   */
  async getBinomes() {
    return new Promise(async (resolve, reject) => {
      const login = await this.getEpitechEmail();
      this.intranetApi
        .get(`/user/${login}/binome/`)
        .then((response) => {
          resolve(response.binomes);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = User;
