import {useReducer} from 'react'

import Navbar from '../components/navbar'
import Forms from '../components/productForm'



const AddProduct = (props) => {
  return (
    <div>
    	<Navbar/>
    	<h3 className="text-center text-primary my-5">Add Product</h3>
    	<div className="my-5 mx-auto w-50">
    		<Forms/>
    	</div>
    </div>
  )
}

export default AddProduct;