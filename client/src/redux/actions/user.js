import { USER } from 'redux/constants'; 

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUser: payload => dispatch({type: USER})
  }
};

export default {
	state: mapStateToProps,
	dispatch: mapDispatchToProps
}