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
  PRODUCT_ADD_PICTURE,
  PRODUCT_ADD_QUANTITY,
  PRODUCT_ADD_SUBMIT
} from "redux/constants";

const ProductForm = ({handleChange, handleSubmit}) => {
  return (
    <Form>
      <FormGroup>
        <Label for="EMAIL">Name</Label>
        <Input onChange={handleChange} type="email" name={PRODUCT_ADD_NAME} id="exampleEmail" placeholder="Product name" />
      </FormGroup>
      <FormGroup>
        <Label for="DESCRIPTION">Description</Label>
        <Input onChange={handleChange} type="textarea" name={PRODUCT_ADD_DESCRIPTION} placeholder="Product Description" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="QUANTITY">Quantity</Label>
        <Input onChange={handleChange} type="number" name={PRODUCT_ADD_QUANTITY} placeholder="Product Available" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="PRICE">Price</Label>
        <Input onChange={handleChange} type="number" min="0" step="100" name={PRODUCT_ADD_PRICE} placeholder="Product Available" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="PICTURE">Picture</Label>
        <Input onChange={handleChange} type="file" name={PRODUCT_ADD_PICTURE} id="exampleFile" />
        <FormText color="muted">
          Please fill all the form above
        </FormText>
      </FormGroup>
      <Button type="button" onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default ProductForm;