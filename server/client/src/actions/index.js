import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
  // uses redux thunk to immediately call the return value of
  // this action creator
  return function(dispatch) {
    axios.get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res }))
  }
}
