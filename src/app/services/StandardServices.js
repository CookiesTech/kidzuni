import ApiService from './ApiServices'
export default class StandardServices extends ApiService {
    create = async (data) => {
        let Url = this.baseURL + 'add_standard'
        let response = await this.post(Url, data)
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
        let Url = this.baseURL + `delete_standard/${id}`

        let response = await this.get(Url)

        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }

    getAll = async () => {
        let Url = this.baseURL + 'getAllStandard'
        let response = await this.get(Url)
        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }

    getSubjectByID = async (id) => {
        let Url = this.baseURL + 'getSubjectByID/' + id
        let response = await this.get(Url)

        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }
}
