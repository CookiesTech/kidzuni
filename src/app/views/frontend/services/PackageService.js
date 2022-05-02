
import ApiService from "./ApiService";

export default class PackageService extends ApiService {


    getallpackage = async (data) => {

        let Url = this.baseURL + "getPackage";
        let response = await this.post(Url, data);
        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };
}  