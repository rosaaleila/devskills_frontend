import { requestConfig } from "../../../utils/request-config";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default class UserService {

    static async getById(id: number, token: string) {
        try {
            const config = requestConfig("GET", undefined, token);
            const res = await fetch(BASE_URL + `/developer/${id}`, config).then(
                (data) => data.json()
            );

            return res;

        } catch (error) {
            console.error(error);
        }
    }

    static async getUserGroups(id: number, token: string) {
        try {
            console.log(BASE_URL + `/group/groupsUsers/${id}`)
            const config = requestConfig("GET", undefined, token);
            const res = await fetch(BASE_URL + `/group/groupsUsers/${id}`, config).then(
                (data) => data.json()
            );

            return res;

        } catch (error) {
            console.error(error);
        }
    }

    static async getRecommendedTests(token: string) {
        try {
            console.log(BASE_URL + `/developer/recommendedTests`)
            console.log(token)
            const config = requestConfig("GET", undefined, token);
            const res = await fetch(BASE_URL + `/developer/recommendedTests`, config).then(
                (data) => data.json()
            );

            console.log(res)

            return res;

        } catch (error) {
            console.error(error);
        }
    }

    static async getTestDetails(token: string, id: number) {
        try {
            console.log(token)

            console.log(BASE_URL + `/test/details/${id}`)
            
            const config = requestConfig("GET", undefined, token);
            
            const res = await fetch(BASE_URL + `/test/${id}/details`, config).then(
                (data) => data.json()
            );

            console.log(res)

            return res;

        } catch (error) {
            console.error(error);
        }
    }

}
