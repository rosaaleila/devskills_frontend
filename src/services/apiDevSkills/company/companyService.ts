import { requestConfig } from "../../../utils/request-config";
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default class CompanyService {
  static async getProfileData(id: number, token: string) {
    const config = requestConfig("GET", undefined, token);

    try {
      const res = await fetch(
        BASE_URL + `/company/getProfileCompany/${id}`,
        config
      ).then((data) => data.json());

      return res;
    } catch (error) {
      console.error(error);
    }
  }

  static async updateProfile(data: any, token: string) {
    const config = requestConfig("PUT", data, token);

    try {
      const res = await fetch(BASE_URL + `/company/updatePerfil`, config).then(
        (data) => data.json()
      );

      return res;
    } catch (error) {
      console.error(error);
      return { error: "Algo deu errado!" };
    }
  }
}
