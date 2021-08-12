import http from "../http-common";

class TeamDataService {

  addNewTeam(form){
    return http.post("/team/",form);
  }

  getAll() {
    console.log(this.$cookies)

    return http.get("/team/");
  }

  filters(q) {
    return http.get("/team?search="+q);
  }
}

export default new TeamDataService();
