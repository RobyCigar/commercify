import { TOKEN } from 'redux/constants'; 

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUser: payload => dispatch({type: TOKEN, payload: payload})
  }
};

const action = {
	state: mapStateToProps,
	dispatch: mapDispatchToProps
};

export default action;