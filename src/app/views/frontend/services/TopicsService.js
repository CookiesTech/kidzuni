import ApiService from "./ApiService";

export default class TopicsService extends ApiService {

    // subjecttopics = async () => {    //parameter pass
    //     const standard = { standard_id: 6 }

    //     axios.post('http://feltech.in/kidzuni_backend/public/api/getTopics', standard)
    //         .then((response) => {
    //             setStandardid({ standard_id: response.data })

    //             setTopics(response?.data.Topics);

    //             //  console.log(response);

    //             // if(!response.ok) throw new Error(response);

    //             if (response.status !== 200) {
    //                 throw Error(response);
    //             }

    //             //   console.log(response);
    //         });
    // }

    subjecttopics = async () => {

        const standard = { standard_id: 6 }

        let Url = "http://feltech.in/kidzuni_backend/public/api/getTopics";
    
        let response = await this.post(Url, standard);
        if (response.status !== 200) {
          throw Error(response);
        }
        return response;
      };
    


}  