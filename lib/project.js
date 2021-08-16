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
  // https://intra.epitech.eu/module/2021/B-PRO-300/MPL-3-1/acti-458873/project/register?format=json
  // https://intra.epitech.eu/module/2021/B-PRO-300/MPL-3-1/acti-458873/project/destroygroup?format=json
}
module.exports = Project;
