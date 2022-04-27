import ApiService from "./ApiService";

export default class SubjectService extends ApiService {


  standardDtata = async (data) => {

    let Url = this.baseURL + 'getAllStandard';
    let response = await this.post(Url, data);
    // console.log(data);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };

}