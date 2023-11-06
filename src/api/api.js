import axios from "axios"

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': 'd313df37-06a3-4e7a-aed0-1c4f232d7812' }
})

export const getUsersAPI = (selectedPage, pageSize) => {
  return instance.get(`users?page=${selectedPage}&count=${pageSize}`)
    .then(res => {
      return res.data
    })
}

export const authMeAPI = {
  me() {
    return instance.get(`auth/me`)
      .then(res => {
        return res.data
      })
  },
  login(email, password, rememberMe) {
    return instance.post('auth/login', { email, password, rememberMe })
      .then(res => {
        return res.data
      })
  },
  logout() {
    return instance.delete('auth/login')
      .then(res => {
        return res.data
      })
  }
}

export const unfollowAPI = (id) => {
  return instance.delete(`follow/${id}`)
    .then(res => {
      return res.data
    })
}

export const followAPI = (id) => {
  return instance.post(`follow/${id}`)
    .then(res => {
      return res.data
    })
}

export const profileAPI = (id) => {
  return instance.get(`profile/${id}`)
    .then(res => {
      return res.data
    })
}

export const profileStatusAPI = (id) => {
  return instance.get(`profile/status/${id}`)
    .then(res => {
      return res.data
    })
}

export const updateStatusAPI = (status) => {
  return instance.put(`profile/status/`, { status: status })
}