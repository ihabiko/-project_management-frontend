import http from "../http-common";

class TaskDataService {
  getAll() {

    return http.get("/task/");
  }

  filters(q) {
    return http.get("/task?search="+q);
  }

  changeStatus(itemId,status)
  {
    itemId['status'] = status
        
    return http.put("/task/"+itemId.pk+"/",itemId);
  }
}

export default new TaskDataService();
