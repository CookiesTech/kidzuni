import ApiService from "./ApiService";

export default class ParentService extends ApiService {

  add_kids = async (data) => {

    let Url = this.baseURL + "add_kids";

    let response = await this.post(Url, data);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };



}  