import ApiService from "./ApiService";

export default class UsageService extends ApiService {


    usageData = async () => {

        let Url = this.baseURL + 'getAnalytics';
        let response = await this.post(Url);
        // console.log(data);
        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };

}