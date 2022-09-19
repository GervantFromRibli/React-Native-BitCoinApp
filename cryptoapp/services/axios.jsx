import axios from "axios";

const instance = axios.create({
 baseURL: "https://api.coincap.io/v2",
});

export const axiosAPI = {
 async getAssets(limit) {
  let data = await instance.get(`/assets?limit=${limit}`)
  return data.data.data
 },

 async getAsset(id) {
  let data = await instance.get(`/assets/${id}`)
  return data.data.data
 },

 async getHistory(id) {
  let date = new Date()
  let endDate = date.getTime()
  date.setDate(date.getDate() - 8)
  let startDate = date.getTime()
  let data = await instance.get(`/assets/${id}/history?interval=d1&start=${startDate}&end=${endDate}`)
  return data.data.data
 }
}