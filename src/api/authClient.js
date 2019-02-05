import axios from 'axios';
import { AUTH_URL } from '../constant/api';

class authClient {
  static login = credentials =>
    axios.post(AUTH_URL, { credentials })
      .then(res => res.data.user)


  // static login = credentials =>
  //   axios.get('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22', { crossdomain: true })
  //     .then(res => {
  //       console.log(res);
  //       return res.data.coord
  //     })
}

export default authClient;
