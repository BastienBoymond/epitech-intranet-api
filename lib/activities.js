class Activities {
    constructor(intranetApi) {
        this.intranetApi = intranetApi;
      }
    
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

      async getCurrentFollowUp() {
        return new Promise((resolve, reject) => {
          this.intranetApi
            .get("/")
            .then((response) => {
                const followUp = response.board.activites.filter(activity => activity.type_title === "followup");
                resolve(followUp);
            })
            .catch((error) => {
              reject(error);
            });
        });
      }
}

module.exports = Activities;
