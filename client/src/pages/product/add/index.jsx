import { useReducer } from "react";
import { connect } from "react-redux";
import Navbar from "components/navbar";
import Forms from "components/productForm";
import { Button, UncontrolledAlert } from "reactstrap";
import { productAddAction } from "redux/actions";


const AddProduct = ({ handleChange, handleSubmit, alert }) => {
  return (
    <div>
      <Navbar />
      <h3 className="text-center text-primary my-5"> + Add Product</h3>
      <div className="my-5 mx-auto w-lg-75 w-50">
        <Forms handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      {alert ? (
        <UncontrolledAlert
          style={{ position: "fixed", top: 0, width: "100vw", margin: 0 }}
          color="info"
        >
          {alert}
        </UncontrolledAlert>
      ) : null}
    </div>
  );
};

export default connect(
  productAddAction.state,
  productAddAction.dispatch
)(AddProduct);
