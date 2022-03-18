import ApiService from './ApiServices'
export default class CountryServices extends ApiService {
    create = async (data) => {
        let Url = this.baseURL + 'add_country'
        let response = await this.post(Url, data)
        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }

    delete = async (id) => {
        let Url = this.baseURL + `delete_country/${id}`

        let response = await this.get(Url)

        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }

    getAll = async () => {
        let Url = this.baseURL + 'getAllCountry'
        let response = await this.get(Url)
        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }
}
