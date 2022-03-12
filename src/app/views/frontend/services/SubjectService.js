import ApiService from "./ApiService";

export default class StandardService extends ApiService {
    // subjectList = async () => {   //subject lists
    //     try {
    //         const data = await axios.get("http://feltech.in/kidzuni_backend/public/api/getAllSubjects");

    //         // console.log(data.data.data);
    //         setSubject(data.data.data);
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    // }

    standardDtata = async () => {
        let Url = `http://feltech.in/kidzuni_backend/public/api/getAllStandard`;
    
        let response = await this.get(Url);
        // console.log(data);

        if (response.status !== 200) {
          throw Error(response);
        }
        return response;
      };

}