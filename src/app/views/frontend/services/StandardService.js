import ApiService from "./ApiService";

export default class StandardService extends ApiService {

  getstandardandSubjectData = async () => {



    const country = { country_code: 6 }   //parameter pass
    let Url = this.baseURL + 'getStandardandSubjects';
    let response = await this.post(Url, country);
    // console.log(data);

    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };

}