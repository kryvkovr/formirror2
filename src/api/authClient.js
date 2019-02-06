import axios from 'axios';
import { AUTH_URL } from '../constant/api';

class authClient {
  static login = credentials =>
    axios.post(AUTH_URL, { credentials })
      .then(res => res.data.user)
}

export default authClient;
