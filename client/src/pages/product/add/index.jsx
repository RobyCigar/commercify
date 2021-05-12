import { connect } from "react-redux";
import { useState } from 'react';
import Navbar from "components/navbar";
import Forms from "components/productForm";
import { Alert } from "reactstrap";
import { productAddAction } from "redux/actions";


const AddProduct = ({ handleChange, handleSubmit, alert, handleAlert }) => {
  const [ visible, setVisible ] = useState(false)


  const onDismiss = () =>  {
    setVisible(!visible)
    handleAlert()
  }

  return (
    <div>
      <Navbar />
      {alert ? (
        <Alert
          style={{ position: "fixed", top: 0, width: "100vw", margin: 0 }}
          color="info"
          toggle={onDismiss}
        >
          {alert}
        </Alert>
      ) : null}
      <h3 className="text-center text-primary my-5"> + Add Product</h3>
      <div className="my-5 mx-auto w-lg-75 w-50">
        <Forms handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default connect(
  productAddAction.state,
  productAddAction.dispatch
)(AddProduct);
