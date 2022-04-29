import ApiService from "./ApiService";

export default class AnalyticsService extends ApiService {

    getLearningStandardMaths = async (data) => {
        //let Url = 'http://localhost:8000/public/api/insert_quiztestdata';
        let Url = this.baseURL + 'getLearningStandardMaths';
        let response = await this.post(Url, data);

        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };

    getAwardDetails = async () => {
        //let Url = 'http://localhost:8000/public/api/insert_quiztestdata';
        let Url = this.baseURL + 'learning_awards';
        let response = await this.get(Url);
        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };


}