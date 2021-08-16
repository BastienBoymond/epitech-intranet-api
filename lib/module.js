class Module {
  constructor(intranetApi) {
    this.intranetApi = intranetApi;
  }

  async findYearModule(nbmodules) {
    const ScolarYear = await this.intranetApi.user.getScolarYear();
    const Studentyear = await this.intranetApi.user.getStudentYear();
    let Year = nbmodules / 2;
    if (nbmodules % 2 != 0) Year += 0.5;
    return (Year = ScolarYear - (Studentyear - Year));
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
          resolve(modules.filter((module) => module.semester == semester));
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
   * @param {string} status
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
          resolve(modules.filter((module) => module.status == status));
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Return you the module of the name in parameter
   * @param {string} nome of the module
   * @returns {Promise<any>} The module with the name in parameter}
   * @example
   *      getModuleByName("InteRNship") // return the module of the name Internship
   */
  async getModuleByName(name) {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/course/filter/")
        .then((response) => {
          const modules = response;
          resolve(
            modules.filter(
              (module) =>
                module.title.substr(5).toLowerCase() == name.toLowerCase()
            )
          );
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Retrun the modules with the grade in parameter
   * @param {string} grade
   * @returns {Promise<any>} The modules with the grade in parameter
   */
  async getModuleByGrades(grade) {
    return new Promise(async (resolve, reject) => {
      const email = await this.intranetApi.user.getEpitechEmail();
      this.intranetApi
        .get(`/user/${email}/notes`)
        .then((response) => {
          resolve(
            response.modules.filter(
              (module) => module.grade === grade)
            )
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async registerModule(moduleId) {
    return new Promise(async (resolve, reject) => {
      const year = await this.findYearModule(parseInt(moduleId.substr(6, 1)));
      const city = await this.intranetApi.user.getCity();
      this.intranetApi
        .post(`/module/${year}/${moduleId}/${city}-${moduleId.substr(6, 1)}-1/register/`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async unregisterModule(moduleId) {
    return new Promise(async (resolve, reject) => {
      const year = await this.findYearModule(parseInt(moduleId.substr(6, 1)));
      const city = await this.intranetApi.user.getCity();
      this.intranetApi
        .post(`/module/${year}/${moduleId}/${city}-${moduleId.substr(6, 1)}-1/unregister`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }


}

module.exports = Module;
