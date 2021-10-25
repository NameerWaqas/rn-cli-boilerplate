import Axios from 'axios';

const publicIP = '';
const port = 5000;

export const base_url = `http://${publicIP}:${port}`;

export const connection_string = `${base_url}/api/v1`;

export const publicAPI = Axios.create({baseURL: connection_string});

export const privateAPI = Axios.create({baseURL: connection_string});

export const attachToken = jwt => {
  privateAPI.defaults.headers.common.Authorization = `Bearer ${jwt}`;
};
