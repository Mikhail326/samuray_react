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

export const authMeAPI = () => {
  return instance.get(`auth/me`)
    .then(res => {
      return res.data
    })
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