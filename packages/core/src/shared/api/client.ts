import axios from "axios";

export const ApiClient = (baseURL: string) => {
  return axios.create({
    baseURL,
    headers: {
      // Accept: "application/json, text/plain, */*",
      Accept: "application/json",
    },
  });
};
