import { ALERT } from 'redux/constants'

const initialState = {
  message: null
}

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT:
      return {...state, message: action.payload}
  }
  return state
};

export default alertReducer