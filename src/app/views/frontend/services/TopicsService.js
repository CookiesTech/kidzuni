import ApiService from "./ApiService";

export default class TopicsService extends ApiService {

  subjecttopics = async (data) => {

    let Url = this.baseURL + 'getTopics';
    let response = await this.post(Url, data);
    if (response.status !== 200) {
      throw Error(response);
    }
    return response;
  };

}  