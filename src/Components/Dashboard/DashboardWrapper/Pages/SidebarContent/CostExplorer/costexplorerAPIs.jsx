import { api } from "../../../../../Utils/axios";

export const getCEdata = async () => {
    const data = await api.get('/accounts');
    console.log("accounts", data.data);

}