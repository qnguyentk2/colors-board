/* eslint-disable class-methods-use-this */
import API from '@utils/API';

class Trip {
  getList() {
    return API.get('/');
  }
}

const service = new Trip();
export default service;
