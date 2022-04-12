import ApiService from "./ApiService";

export default class CounrtyService extends ApiService {

    countrylistdata = async () => {

        let Url = this.baseURL + 'getAllCountry';
        let response = await this.get(Url);

        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };

}