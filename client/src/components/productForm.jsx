import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from 'reactstrap'
import {
  PRODUCT_ADD_NAME,
  PRODUCT_ADD_DESCRIPTION,
  PRODUCT_ADD_PRICE,
  PRODUCT_ADD_QUANTITY,
} from "redux/constants";
import MyDropzone from './dropzone'

const ProductForm = ({handleChange, handleSubmit}) => {
  return (
    <Form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
      <FormGroup>
        <Label for="EMAIL">Name</Label>
        <Input onChange={handleChange} type="text" name={PRODUCT_ADD_NAME} placeholder="Product name" />
      </FormGroup>
      <FormGroup>
        <Label for="DESCRIPTION">Description</Label>
        <Input minlength="200" maxlength=" 1000" onChange={handleChange} type="textarea" name={PRODUCT_ADD_DESCRIPTION} placeholder="Product Description" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="QUANTITY">Quantity</Label>
        <Input onChange={handleChange} type="number" name={PRODUCT_ADD_QUANTITY} placeholder="Product Available" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="PRICE">Price</Label>
        <Input onChange={handleChange} type="number" min="0" step="100" name={PRODUCT_ADD_PRICE} placeholder="Product Price" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="PRICE">Picture</Label>
        <MyDropzone />
      </FormGroup>
      <FormGroup>
        <FormText color="muted">
          Please fill all the form above
        </FormText>
      </FormGroup>
      <Button type="submit" color="primary">Submit</Button>
    </Form>
  )
}

export default ProductForm;