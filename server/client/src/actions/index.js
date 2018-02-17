import axios from 'axios';
import { FETCH_USER } from './types';

// Refactored from .get / .then pattern and using implicit
// one expression arrow function return
export const fetchUser = () =>
  // uses redux thunk to immediately call the return value of
  // this action creator
  async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
  };


// og version
// export const fetchUser = () => {
//   return function(dispatch) {
//     axios
//       .get('/api/current_user')
//       .then(res => dispatch({ type: FETCH_USER, payload: res.data }); );
//   }
// };

