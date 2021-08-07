class Module {
  constructor(intranetApi) {
    this.intranetApi = intranetApi;
  }

async findYearModule(nbmodules) {
    const ScolarYear = await this.intranetApi.user.getScolarYear();
    const Studentyear = await this.intranetApi.user.getStudentYear();
    let Year;
    Year = nbmodules / 2;
    if (nbmodules % 2 != 0)
        Year += 0.5;
    Year = ScolarYear - (Studentyear - Year);
    return Year;

  }
  /**
   * Return all the modules of the intranet
   * @returns {Promise<any>} All the modules
   */
  async getAllModules() {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/course/filter/")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Return the module of the semestrer put in parameter
   * @param {number} semester
   * @returns {Promise<any>} All the modules of the semester
   * @example 
   *    getModuleBySemester(1) // return modules of the first semester
   */
  async getModulesBySemester(semester) {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/course/filter/")
        .then((response) => {
            const modules = response;
            resolve(modules.filter(module => module.semester == semester));
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * get a module by its id
   * @param {string} moduleId
   * @returns {Promise<any>} The module
   * 
   * @example
   *    getModuleById("B-MUL-100") // return the graphical module of the first semester
   */
  async getModuleById(moduleId) {
    return new Promise(async (resolve, reject) => {
      const year = await this.findYearModule(parseInt(moduleId.substr(6, 1)));
      const city = await this.intranetApi.user.getCity();
      this.intranetApi
        .get(`/module/${year}/${moduleId}/${city}-${moduleId.substr(6, 1)}-1/`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }


  /**
   * get a module by its Status
   * @param {string} [status]
   * @returns {Promise<any>} The module with the status in parameter
   * @example 
   *        getModuleByStatus("ongoing") // return all the module on going
   *        getModuleByStatus("valid") // return all the module finished and valid
   *        getModuleByStatus("fail") // return all the module finished and fail
   */
  async getModuleByStatus(status) {
    return new Promise((resolve, reject) => {
        this.intranetApi
        .get("/course/filter/")
        .then((response) => {
            const modules = response;
            resolve(modules.filter(module => module.status == status));
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = Module;
