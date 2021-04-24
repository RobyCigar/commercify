import {useReducer} from 'react'
import { connect } from 'react-redux'
import Navbar from 'components/navbar'
import Forms from 'components/productForm'
import { Button } from 'reactstrap'
import { addAction } from 'redux/actions'

const AddProduct = ({handleChange, handleSubmit}) => {
	
  return (
    <div>
    	<Navbar/>
    	<h3 className="text-center text-primary my-5"> + Add Product</h3>
    	<div className="my-5 mx-auto w-lg-75 w-50">
    		<Forms handleChange={handleChange} handleSubmit={handleSubmit}/>
    	</div>
    </div>
  )
}

export default connect(null, addAction.props)(AddProduct);