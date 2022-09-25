import axios from "./Axios"

function request() {
  return axios
    .request("POST", "path/point")
    .then(res => res)
    .catch(err => err)
}

function requestData(data) {
  return axios
    .requestData("POST", "path/point", data)
    .then(res => res)
    .catch(err => err)
}
