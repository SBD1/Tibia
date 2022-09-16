import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3333';
export async function listaNomeVariaveis() {
    try {
        console.log("OI");
        const resposta = await axios.get("/item");
        return resposta.data
    } catch (e) {
        return e
    }

};