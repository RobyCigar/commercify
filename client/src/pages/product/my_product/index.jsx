import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import Loader from "react-loader-spinner"
import { fetchProducts, deleteProduct } from 'api';
import Table from './table';

const mapStateToProps = ({user}) => {
  return {
    token: user.token
  }
}

const MyProduct = ({token}) => {
  const [ products, setProducts ] = useState(null);
  const [ deleted, setDeleted ] = useState(false);

  useEffect(() => {
    const result = fetchProducts();
    setProducts(result);
  }, [deleted])

  if (!products) {
    return (
      <Loader
        className="loader--center"
        type="Bars"
        color="#00BFFF"
        height={80}
        width={80}
      />
    );
  }

  const handleDelete = (productId) => {
    console.log(token, productId, deleted)
    deleteProduct(productId, token)
    setDeleted(!deleted);
  }

  return (
    <>
    <Navbar/>
    <Table
    products={products}
    handleDelete={handleDelete}
    />
    <Footer/>
    </>
  );
}

export default connect(mapStateToProps, null)(MyProduct);
