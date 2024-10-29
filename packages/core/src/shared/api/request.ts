// import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// const request = async (options: AxiosRequestConfig) => {

//   const onSuccess = (response: AxiosResponse) => {
//     const { data } = response;
//     return data;
//   };

//   const onError = function (error: AxiosError) {
//     return Promise.reject({
//       code: error.code,
//       message: error.message,
//       response: error.response,
//     });
//   };

//   // client.interceptors.request.use(
//   //   (config: InternalAxiosRequestConfig) => {
//   //     const accessToken = localStorage.getItem(STORAGE_TOKEN.ACCESS_TOKEN);
//   //     if (accessToken) {
//   //       config.headers.Authorization = `Bearer ${accessToken}`;
//   //     }
//   //     return config;
//   //   },
//   //   (error: AxiosError) => {
//   //     return Promise.reject(error);
//   //   },
//   // );

//   // client.interceptors.response.use(
//   //   (res: AxiosResponse) => {
//   //     return res; // Simply return the response
//   //   },
//   //   async (err) => {
//   //     const status = error.response ? error.response.status : null;
  
//   //     if (status === 401) {
//   //       try {
//   //         const refreshTokenFromStorage = localStorage.getItem(
//   //           STORAGE_TOKEN.REFRESH_TOKEN
//   //         );
//   //         const { accessToken, refreshToken } = await AuthService.refresh(
//   //           refreshTokenFromStorage
//   //         );
  
//   //         LocalStorageService.setTokens(accessToken, refreshToken);
//   //         client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  
//   //         return await client(originalConfig);
//   //       } catch (error: AxiosError) {
//   //         return Promise.reject(error);
//   //       }
//   //     }
  
//   //     if (status === 403 && err.response.data) {
//   //       return Promise.reject(err.response.data);
//   //     }
  
//   //     return Promise.reject(err);
//   //   }
//   // );

//   return client(options).then(onSuccess).catch(onError);
// };

// export default request;