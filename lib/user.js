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
          resolve(parseInt(response.promo));
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
   * Return the User's Semester
   * @returns {Promise<number>} Semester
   */
  async getSemester() {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/user/")
        .then((response) => {
          resolve(response.semester);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Return the User's ScolarYear
   * @returns {Promise<number>} ScolarYear
   */
  async getScolarYear() {
    return new Promise((resolve, reject) => {
      if (this.intranetApi.scolarYear) {
        resolve(this.intranetApi.scolarYear);
      } else {
        this.intranetApi
          .get("/user/")
          .then((response) => {
            this.intranetApi.scolarYear = response.scolarYear;
            resolve(parseInt(response.scolaryear));
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  }

  /**
   * Return the User's City
   * @returns {Promise<string>} City
   */
  async getCity() {
    return new Promise((resolve, reject) => {
      if (this.intranetApi.city) {
        resolve(this.intranetApi.city);
      } else {
        this.intranetApi
          .get("/user/")
          .then((response) => {
            this.intranetApi.city = response.location.split("/").pop();
            resolve(response.location.split("/").pop());
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  }

  /**
   * Return the User's Email
   * @returns {Promise<string>} Epitech Email
   */
  async getEpitechEmail() {
    return new Promise((resolve, reject) => {
      if (this.intranetApi.login) {
        resolve(this.intranetApi.login);
      } else {
        this.intranetApi
          .get("/user/")
          .then((response) => {
            this.intranetApi.login = response.login;
            resolve(response.login);
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  }

  /**
   * return the User's binomes List
   * @returns {Promise<any>} binomes}
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

  /**
   * return the User's Flags if args or all
   * @param {string} [flag] - the flag to return (optional)
   * @returns {Promise<any>} Flags
   * @example 
   *    getFlags(); // return all flags
   *    getFlags("medal"); // return the medail flag 
   *    getFlags("remarkable"); // return the remarkable flag
   *    getFlags("difficulty"); // return the difficulty flag
   *    getFlags("ghost") // return the ghost flag
   */
  async getFlags(flag) {
    return new Promise(async (resolve, reject) => {
      const login = await this.getEpitechEmail();
      this.intranetApi
        .get(`/user/${login}/flags/`, true)
        .then((response) => {
          if (flag) {
            resolve(response.flags[flag]);
          } else {
            resolve(response.flags);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * return url of the user's avatar
   * @returns {Promise<string} url of the user's avatar
   */
  async getPicture() {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/user/")
        .then((response) => {
          const picture = this.intranetApi.url + "user" +  response.picture;
          resolve(picture);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * return the User's important information
   * @returns {Promise<any>} All the user's important data
   */
  async getProfile() {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/user/")
        .then((response) => {
          resolve({login:response.login, picture:this.intranetApi.url + "user" +response.picture, name:response.title, semester:response.semester, scolarYear:response.scolaryear, city:response.location.split("/").pop(), Promo:response.promo, GPA:response.gpa[0].gpa, credits:response.credits});
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = User;
