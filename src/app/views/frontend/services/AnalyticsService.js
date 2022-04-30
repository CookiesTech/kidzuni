import ApiService from "./ApiService";

export default class AnalyticsService extends ApiService {

    getAnalysticsUsage = async (data) => {

        let Url = this.baseURL + 'getAnalysticsUsage';
        let response = await this.post(Url, data);

        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };

    analysticsProgress = async (data) => {

        let Url = this.baseURL + 'analysticsProgress';
        let response = await this.post(Url, data);
        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };

    analyticsQuestionLog = async (data) => {

        let Url = this.baseURL + 'analyticsQuestionLog';
        let response = await this.post(Url, data);
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