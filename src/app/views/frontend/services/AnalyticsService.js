import ApiService from "./ApiService";

export default class AnalyticsService extends ApiService {

    getAnalystics = async (data) => {
        //let Url = 'http://localhost:8000/public/api/insert_quiztestdata';
        let Url = this.baseURL + 'getAnalytics';
        let response = await this.post(Url, data);

        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };

    getProgress = async (data) => {
        //let Url = 'http://localhost:8000/public/api/getQuestionsByID';
        let Url = this.baseURL + 'analysticsProgress';
        let response = await this.post(Url, data);
        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };

    fetchQuestionLog = async (data) => {
        //let Url = 'http://localhost:8000/public/api/getQuestionsByID';
        let Url = this.baseURL + 'getQuestionLog';
        let response = await this.post(Url, data);
        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };

    fetchAnalysticsSubjects = async () => {
        //let Url = 'http://localhost:8000/public/api/getQuestionsByID';
        let Url = this.baseURL + 'fetchAnalysticsSubjects';
        let response = await this.get(Url);
        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };

    fetchSubjectandStandard = async (data) => {

        let Url = this.baseURL + 'analyticsFetchSubjectandStandard';
        let response = await this.post(Url, data);
        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };

}