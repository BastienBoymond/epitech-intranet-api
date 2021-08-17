class Project {
  constructor(intranetApi) {
    this.intranetApi = intranetApi;
  }

  /**
   * getProjects By module ID
   * @param {string} moduleId B-MUL-100
   * @returns {Promise<any>} the projects
   */
  async getProjectByModule(moduleId) {
    const year = await this.intranetApi.module.findYearModule(parseInt(moduleId.substr(6, 1)));
    const city = await this.intranetApi.user.getCity();
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get(`/module/${year}/${moduleId}/${city}-${moduleId.substr(6, 1)}-1/`)
        .then((response) => {
          resolve(response.activites.filter(project => project.type_title === 'Project'));
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * get Project by Name 
   * @param {string} moduleId B-MUL-100
   * @param {string} name myRadar
   * @returns {Promise<any>} the Project
   */
  async getProjectByModuleAndName(moduleId, name) {
    const year = await this.intranetApi.module.findYearModule(parseInt(moduleId.substr(6, 1)));
    const city = await this.intranetApi.user.getCity();
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get(`/module/${year}/${moduleId}/${city}-${moduleId.substr(6, 1)}-1/`)
        .then((response) => {
          resolve(response.activites.filter(project => project.title.toLowerCase() === name.toLowerCase()));
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Return the Current Projets of Your Intranet
   * @returns {Promise<any>} the Current Projet of Your Intranet
   */
   async getCurrentProjet() {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/")
        .then((response) => {
          resolve(response.board.projets);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Return the Current Projet of Your Intranet
   * @param {string} name
   * @returns {Promise<any>} the Current Projet of Your Intranet
   */
  async getCurrentProjectByName(name) {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/")
        .then((response) => {
          resolve(response.board.projets.filter(project => project.title.toLowerCase() === name.toLowerCase()));
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Description
   * @param {string} moduleId B-MUL 100
   * @param {string} name myRadar
   * @returns {Promise<string>} acticode 
   */
  async getActiviyProject(moduleId, name) {
    const year = await this.intranetApi.module.findYearModule(parseInt(moduleId.substr(6, 1)));
    const city = await this.intranetApi.user.getCity();
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get(`/module/${year}/${moduleId}/${city}-${moduleId.substr(6, 1)}-1/`)
        .then((response) => {
          response = response.activites.filter(project => project.title.toLowerCase() === name.toLowerCase());
          resolve(response.find(project => project.codeacti).codeacti);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * register you to a project
   * @param {string} moduleId
   * @param {string} name
   * @returns {Promise<any>} register you to a project
   */
  async registerProject(moduleId, name) {
    const year = await this.intranetApi.module.findYearModule(parseInt(moduleId.substr(6, 1)));
    const city = await this.intranetApi.user.getCity();
    const acti = await this.getActiviyProject(moduleId, name);
    return new Promise((resolve, reject) => {
      this.intranetApi
        .post(`/module/${year}/${moduleId}/${city}-${moduleId.substr(6, 1)}-1/${acti}/project/register`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * unregister you to a project
   * @param {string} moduleId
   * @param {string} name
   * @returns {Promise<any>} unregister you to a project
   */
  async unregisterProject(moduleId, name) {
    const year = await this.intranetApi.module.findYearModule(parseInt(moduleId.substr(6, 1)));
    const city = await this.intranetApi.user.getCity();
    const acti = await this.getActiviyProject(moduleId, name);
    const login = await this.intranetApi.user.getEpitechEmail();
    return new Promise((resolve, reject) => {
      this.intranetApi
        .post(`/module/${year}/${moduleId}/${city}-${moduleId.substr(6, 1)}-1/${acti}/project/destroygroup`, {code:`${name}-${city}-${moduleId.substr(6, 1)}-1-${login}`})
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * return you the path of file 
   * @param {string} moduleId
   * @param {string} name
   * @returns {Promise<any>} return you the path of file
   */
  async getProjectFile(moduleId, name) {
    const year = await this.intranetApi.module.findYearModule(parseInt(moduleId.substr(6, 1)));
    const city = await this.intranetApi.user.getCity();
    const acti = await this.getActiviyProject(moduleId, name);
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get(`/module/${year}/${moduleId}/${city}-${moduleId.substr(6, 1)}-1/${acti}/project/file/`)
        .then((response) => {
          resolve(response.map(project => {
            return ("https://intra.epitech.eu" + project.fullpath)
          }));
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  /**
   * return status of register on this projet
   * @param {string} moduleId
   * @param {string} name
   * @returns {Promise<string>} Registered if your register Not Registered if not
   */
  async getStatusRegisterProject(moduleId, name) {
    const year = await this.intranetApi.module.findYearModule(parseInt(moduleId.substr(6, 1)));
    const city = await this.intranetApi.user.getCity();
    const acti = await this.getActiviyProject(moduleId, name);
    const login = await this.intranetApi.user.getEpitechEmail();
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get(`/module/${year}/${moduleId}/${city}-${moduleId.substr(6, 1)}-1/${acti}/project/registered`)
        .then((response) => {
          response = response.find(project => project.master.login === login)
          if (response)
            resolve("Registered");
          else 
            resolve("Not Registered");
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
module.exports = Project;
