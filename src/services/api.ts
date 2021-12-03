import axios from "axios";

export const api = axios.create({
  baseURL: "https://eduardacalderan.github.io/ignite-reactjs-dtmoney/api", //endereço que se repete em todas as requisições
});
