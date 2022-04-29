import ApiService from "./ApiService";

export default class StandardService extends ApiService {

  getstandardandSubjectData = async (code) => {
    const country = { country_code: code }
    console.log(country);
    let Url = this.baseURL + 'getStandardandSubjects';
    let response = await this.post(Url, country);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };

  getRecommendationStandard = async (data) => {

    let Url = this.baseURL + 'getAllStandard';
    let response = await this.post(Url, data);
    // console.log(data);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };

  getRecommendationData = async (data) => {

    let Url = this.baseURL + 'getrecommendations';
    let response = await this.post(Url, data);
    // console.log(data);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };

}