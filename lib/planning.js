class Planning {
  constructor(intranetApi) {
    this.intranetApi = intranetApi;
  }

   /**
   * return the Current Planning with possible filters (semester)
   * @param {string} [semester] - the Planning dependant on the semester
   * @returns {Promise<any>} Current Planning
   * @example
   *    getCurrrentPlanning(); // return the Current Planning of all Semester
   *    getCurrentPlanning(1); // return the Current Planning of first Semester
   */
  async getCurrentPlanning(semester) {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/planning/load/")
        .then((response) => {
          if (semester) {
            resolve(
              response.filter((planning) => planning.semester === semester)
            );
          } else {
            resolve(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}


module.exports = Planning;
