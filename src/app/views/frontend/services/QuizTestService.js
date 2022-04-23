import ApiService from "./ApiService";

export default class QuizTestService extends ApiService {

    create = async (data) => {
        //let Url = 'http://localhost:8000/public/api/insert_quiztestdata';
        let Url = this.baseURL + 'insert_quiztestdata';
        let response = await this.post(Url, data);

        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };

    getQuestions = async (data) => {
        //let Url = 'http://localhost:8000/public/api/getQuestionsByID';
        let Url = this.baseURL + 'getQuestionsByID';
        let response = await this.post(Url, data);
        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };

    fetchResults = async (data) => {
        //let Url = 'http://localhost:8000/public/api/getQuestionsByID';
        let Url = this.baseURL + 'getTestResults';
        let response = await this.post(Url, data);
        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };

}