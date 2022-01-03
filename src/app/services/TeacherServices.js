import ApiService from './ApiServices'
export default class TeacherServices extends ApiService {
    getAll = async () => {
        let Url = this.baseURL + 'getActive/'

        let response = await this.get(Url)
        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }

    create = async (data) => {
        let Url = 'http://localhost:8000/public/api/teacher_add'

        let response = await this.post(Url, data)
        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }

    update = async (data) => {
        let Url = 'http://localhost:5000/api/vendor/update'

        let response = await this.put(Url, data)
        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }

    delete = async (id) => {
        let Url = this.baseURL + `delete_teacher/${id}`

        let response = await this.post(Url)

        if (response.status !== 200) {
            throw Error(response)
        }
        return response
    }
}
