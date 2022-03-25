import ApiService from "./ApiService";

export default class StandardService extends ApiService {

  subjectList = async () => {
    const country = { country_code: 3 }   //parameter pass

    let Url = `http://feltech.in/kidzuni_backend/public/api/getAllSubjects`;

    let response = await this.post(Url, country);
    // console.log(data);

    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };

}