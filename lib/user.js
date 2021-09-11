const { convert } = require("html-to-text");

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
   * Return the User's Student Year
   * @returns {Promise<number>} Student Year}
   */
  async getStudentYear() {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/user/")
        .then((response) => {
          resolve(response.studentyear);
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
        .get(`/user/${login}/flags/`, null, true)
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
          const picture = this.intranetApi.url + "user" + response.picture;
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
          resolve({
            login: response.login,
            picture: this.intranetApi.url + "user" + response.picture,
            name: response.title,
            semester: response.semester,
            scolarYear: response.scolaryear,
            city: response.location.split("/").pop(),
            Promo: response.promo,
            GPA: response.gpa[0].gpa,
            credits: response.credits,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Return the User's Last Notification
   * @param {string} notifStatus alert, coming, missed, message
   * @returns {Promise<any>} The user's last notification by type
   * @example
   *      getLastNotification("alert"); // return the last alert
   *      getLastNotification("coming"); // return the last coming
   *      getLastNotification("missed"); // return the last missed
   *      getLastNotification("message"); // return the last message
   *   */
  async getNotification(notifStatus) {
    return new Promise(async (resolve, reject) => {
      const email = await this.getEpitechEmail();
      this.intranetApi
        .get(`/user/${email}/notification/${notifStatus}/`)
        .then((response) => {
          if (response instanceof Array) {
            response = response.map((notif) => {
              notif.content = convert(notif.content, { wordwrap: false });
              return notif;
            });
          }
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getXp(year) {
    const city = await this.getCity();
    const login = await this.getEpitechEmail();
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get(`/module/${year}/B-INN-000/${city}-0-1/?format=json`)
        .then(async (response) => {
          let activities = response.activites;
          let xp = 0;
          let hubProjects = 0;
          let hackathonsParicipation = 0;
          let hackathonsOrganisation = 0;
          let limitOrganizationWorkshop = 0;
          let limitParticipationWorshop = 0;
          let limitParticipationHubTalk = 0;
          let limitOrganizationHubTalk = 0;
          let limitExperience = 0;
          for (const activity of activities) {
            if (activity.type_title == "Workshop") {
              let evnt = activity.events;
              let dataevnt = evnt.length;
              for (let j = 0; j < dataevnt; j++) {
                if (evnt[j].assistants) {
                  evnt[j].assistants.forEach((assistant) => {
                    if (assistant.login == login) {
                      if (assistant.manager_status === "present") {
                        limitOrganizationWorkshop += 1;
                      } else if (assistant.manager_status === "absent") {
                        limitOrganizationWorkshop -= 1;
                      }
                    }
                  });
                }
                if (evnt[j].user_status == "present") {
                  limitParticipationWorshop += 1;
                } else if (evnt[j].user_status == "absent") {
                  limitParticipationWorshop -= 1;
                }
              }
            } else if (activity.type_title == "Talk") {
              let evnt = activity.events;
              let dataevnt = evnt.length;
              for (let j = 0; j < dataevnt; j++) {
                if (evnt[j].assistants) {
                  evnt[j].assistants.forEach((assistant) => {
                    if (assistant.login == login) {
                      if (assistant.manager_status === "present") {
                        limitOrganizationHubTalk += 1;
                      } else if (assistant.manager_status === "absent") {
                        limitOrganizationHubTalk -= 1;
                      }
                    }
                  });
                }
                if (evnt[j].user_status == "present") {
                  limitParticipationHubTalk += 1;
                } else if (evnt[j].user_status == "absent") {
                  limitParticipationHubTalk -= 1;
                }
              }
            } else if (activity.type_title == "Experience") {
              if (limitExperience < 8) {
                const response = await this.intranetApi.get(
                  `/module/${year}/B-INN-000/${city}-0-1/${activity.codeacti}/project/?format=json`
                );
                if (response.user_project_status == "project_confirmed") {
                  limitExperience += 1;
                }
              }
            } else if (activity.type_title == "Hackathon") {
              const response = await this.intranetApi.get(
                `/module/${year}/B-INN-000/${city}-0-1/${activity.codeacti}/?format=json`
              );
              for (const event of response.events) {
                if (event.assistants) {
                  event.assistants.forEach((assistant) => {
                    if (assistant.login == login) {
                      if (assistant.manager_status === "present") {
                        hackathonsOrganisation += 1;
                      } else if (assistant.manager_status === "absent") {
                        hackathonsParicipation -= 1;
                      }
                    }
                  });
                }
                if (event.user_status == "present") {
                  hackathonsParicipation += 1;
                } else if (event.user_status == "absent") {
                  hackathonsParicipation -= 1;
                }
              }
            } else if (activity.type_title == "Project") {
              let finalNotes = 0;
              let curentProjects = 0;
              console.log(activity.type_title, activity.codeacti)
              const response = await this.intranetApi.get(
                `/module/${year}/B-INN-000/${city}-0-1/${activity.codeacti}/project/?format=json`
              );
              const notes = await this.intranetApi.get(
                `/module/${year}/B-INN-000/${city}-0-1/${activity.codeacti}/note/?format=json`
              );
              if (response.user_project_status == "project_confirmed") {
                console.log(response.user_project_status);
                notes.forEach(note => {
                  if (note.login === login) {
                    finalNotes = note.note
                  }
                })
                curentProjects += parseInt(
                  response.title
                    .toLowerCase()
                    .replace("#hubproject - ", "")
                    .replace("xp", "")
                );
                curentProjects = finalNotes / 100 * curentProjects;
                curentProjects = Math.round(curentProjects);
                hubProjects += curentProjects
              }
            }
          }
          if (limitExperience > 8) {
            limitExperience = 8;
          }
          if (limitOrganizationHubTalk > 6) {
            limitOrganizationHubTalk = 6;
          }
          if (limitParticipationHubTalk > 15) {
            limitParticipationHubTalk = 15;
          }
          if (limitOrganizationWorkshop > 3) {
            limitOrganizationWorkshop = 3;
          }
          if (limitParticipationWorshop > 10) {
            limitParticipationWorshop = 10;
          }
          xp =
            hubProjects +
            hackathonsParicipation * 6 +
            hackathonsOrganisation * 15 +
            limitExperience * 3 +
            limitOrganizationWorkshop * 7 +
            limitParticipationWorshop * 2 +
            limitParticipationHubTalk * 1 +
            limitOrganizationHubTalk * 4;
          resolve(xp);
        });
    }).catch((error) => {
      reject(error);
    });
  }
}

module.exports = User;
