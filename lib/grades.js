const Module = require("./module");

class Grades {
  constructor(intranetApi) {
    this.intranetApi = intranetApi;
  }

  /**
   * Return your grades with possible filters
   * @param {string} [moduleId] - Module id
   * @returns {Promise<any>} Module grades with some information
   * @example 
   *    grades.getGrades(B-MUL-100); // returns name, codemodule, grade, crédits of B-MUL-100
   *    grafes.getGrades(); // returns all grades like upper 
   */
  async getGrades(moduleId) {
    return new Promise(async (resolve, reject) => {
      const email = await this.intranetApi.user.getEpitechEmail();
      this.intranetApi
        .get(`/user/${email}/notes`)
        .then((response) => {
          if (moduleId) {
            const module = response.modules.find(
              (module) => module.codemodule === moduleId
            );
            resolve({
              name: module.title,
              codemodule: module.codemodule,
              grade: module.grade,
              credits: module.credits,
            });
          } else {
            resolve(
              response.modules.map((module) => {
                return {
                  name: module.title,
                  codemodule: module.codemodule,
                  grade: module.grade,
                  credits: module.credits,
                };
              })
            );
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * return the Current Node of Your Intranet
   * @returns {Promise<any>} the Current Note of Your Intranet
   */
   async getCurrentNotes() {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/")
        .then((response) => {
          resolve(response.board.notes);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = Grades;
