import axios from "axios";

export default axios.create({
  // baseURL: "https://api.gigacover.com/recruitment/challenge",
  baseURL: "http://35.247.189.231:19110/recruitment-challenge/case1-two",
  // baseURL: 'https://mock_api.gigacover.com/recruitment-challenge/case3-big',
  responseType: "json",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Credentials': 'true'
  },
});