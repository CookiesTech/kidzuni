import ApiService from "./ApiService";

export default class KidzAddService extends ApiService {

    kidzdetailadd = async () => {
        const kidz = { name: "Kid1", email: "kid1@gmail.com", password: "12345678" }

        let Url = "http://feltech.in/kidzuni_backend/public/api/add_kids";

        let response = await this.post(Url, kidz)
        if (response.status !== 200) {
            throw Error(response);
        }
        return response;
    }

}

