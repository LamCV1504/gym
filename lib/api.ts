import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.PUBLIC_API_URL,
  withCredentials: true,
})

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      await axios.post('/auth/refresh', {}, { withCredentials: true })

      return api(originalRequest)
    }

    return Promise.reject(error)
  }
)