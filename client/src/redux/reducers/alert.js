import { ALERT } from 'redux/constants'

const initialState = {
  msg: ""
}

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT:
      return {...state, msg: action.payload}
  }
  return state
};

export default loginReducer