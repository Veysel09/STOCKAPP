import axios from "axios"


const axiosWithToken = axios.create({
baseURL: "https://14192.fullstack.clarusway.com/",
headers: {Authorization: `Token ${token}`}
})