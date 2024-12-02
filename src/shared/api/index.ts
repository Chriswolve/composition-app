import axios, { type AxiosInstance, type AxiosResponse } from 'axios'

type IApiClient = {
  get: <T>(path: string) => Promise<AxiosResponse<T>>
}
const headers = {
  'Content-Type': 'application/json',
}

export const axiosInstance = (url: string): AxiosInstance => {
  return axios.create({
    baseURL: url,
    headers,
  })
}

export const apiClient = (url: string): IApiClient => {
  const instance: AxiosInstance = axios.create({
    baseURL: url,
    headers,
  })

  return {
    get: async <T>(path: string) => {
      return instance.get<T>(path)
    },
  }
}
