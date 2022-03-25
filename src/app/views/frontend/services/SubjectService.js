import ApiService from "./ApiService";

export default class SubjectService extends ApiService {


  standardDtata = async () => {

    const country = { country_code: 6 } //parametter

    let Url = `http://feltech.in/kidzuni_backend/public/api/getAllStandard`;

    let response = await this.post(Url, country);
    // console.log(data);

    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };

}