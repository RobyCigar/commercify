import axios from 'axios'
import {URL} from './index'

export const user = async (token) => {
  return await axios({
    method: "get",
    Authorization: token,
    url: `${URL}/user`,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
  })
    .then((res) => {
      console.log(res)
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
};