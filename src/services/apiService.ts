import axios from "axios";

const BASE_URL = "https://conduit.productionready.io/api";

class ApiService {
  getTag = async () => {
    return await axios(BASE_URL + "/tags");
  };
}

export default new ApiService();
