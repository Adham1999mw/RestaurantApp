import {AxiosRequestConfig, AxiosRequestHeaders} from 'axios';
import {api} from './networkInstance';

const get = (
  url: string,
  params?: AxiosRequestConfig<unknown>,
  headers?: AxiosRequestHeaders,
) => {
  return api.get(url, {
    params,
    headers: {...headers},
  });
};

export {get};
