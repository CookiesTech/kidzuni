import ApiService from './ApiServices'
export default class QuestionServices extends ApiService {
    upload = async (data) => {
        let Url = this.baseURL + 'upload_question'
        let response = await this.post(Url, data)
        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }

    getAll = async () => {
        let Url = this.baseURL + 'getAllQuestions'
        let response = await this.get(Url)
        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }
    update = async (data) => {
        let Url = this.baseURL + 'subject_update'
        let response = await this.post(Url, data)
        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }

    delete = async (id) => {
        let Url = this.baseURL + `delete_subject/${id}`

        let response = await this.get(Url)

        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }
}
