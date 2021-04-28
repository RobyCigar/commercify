import { TOKEN } from 'redux/constants'; 

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUser: payload => dispatch({type: TOKEN, payload: payload})
  }
};

export default {
	state: mapStateToProps,
	dispatch: mapDispatchToProps
}