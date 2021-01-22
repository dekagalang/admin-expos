export default function setupAxios(axios) {
  axios.interceptors.request.use(
    config => {
      config.baseURL = 'https://expos-compro.herokuapp.com';

      config.crossDomain = true
      config.credentials = 'same-origin'
      return config;
    },
    err => Promise.reject(err)
  );
}