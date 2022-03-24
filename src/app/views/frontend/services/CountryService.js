import ApiService from "./ApiService";

export default class CounrtyService extends ApiService {

    CountryData = async () => {
        let Url = 'http://feltech.in/kidzuni_backend/public/api/getAllCountry';

        let response = await this.get(Url);
        // console.log(data);

        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };

}