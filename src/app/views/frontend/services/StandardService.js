import ApiService from "./ApiService";

export default class StandardService extends ApiService {

  getstandardandSubjectData = async (code) => {
    const country = { country_code: code }
    let Url = this.baseURL + 'getStandardandSubjects';
    let response = await this.post(Url, country);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };

}