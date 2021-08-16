class Home {
  constructor(intranetapi) {
    this.intranetApi = intranetapi;
  }
  /**
   * return all the Home board of Intranet
   * @returns {Promise<any>} All the Home board's
   */
  async getBoard() {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/")
        .then((response) => {
          resolve(response.board);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Return The Current Activity of Your Intranet
   * @returns {Promise<any>} The Current Activity of Your Intranet
   */
  async getCurrentActivity() {
    return new Promise((resolve, reject) => {
      this.intranetApi
        .get("/")
        .then((response) => {
          resolve(response.board.activites);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = Home;
