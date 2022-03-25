import { School } from "@mui/icons-material";
import ApiService from "./ApiService";

export default class PackageService extends ApiService {


    getallpackage = async () => {

        const packagedetails = { package_for: 'parent', type: 'monthly' }

        let Url = "http://feltech.in/kidzuni_backend/public/api/getPackage";

        let response = await this.post(Url, packagedetails);
        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    };



}  