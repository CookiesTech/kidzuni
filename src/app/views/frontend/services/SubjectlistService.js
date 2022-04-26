import ApiService from "./ApiService";

export default class SubjectlistService extends ApiService {


    subjectlistdata = async (code) => {

        const country = { country_code: code } //parametter
        let Url = this.baseURL + 'getAllSubjects';
        let response = await this.post(Url, country);
        // console.log(data);
        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };

}