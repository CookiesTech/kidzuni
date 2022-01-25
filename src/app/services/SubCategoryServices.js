import ApiService from './ApiServices'
export default class SubCategoryServices extends ApiService {
    create = async (data) => {
        let Url = this.baseURL + 'add_subCategory'
        let response = await this.post(Url, data)
        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }

    delete = async (id) => {
        let Url = this.baseURL + `delete_subCategory/${id}`

        let response = await this.get(Url)

        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }

    getAll = async () => {
        let Url = this.baseURL + 'getAllsubCategory'
        let response = await this.get(Url)
        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }
}
