import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from 'reactstrap'

const ProductForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Product name" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Description</Label>
        <Input type="textarea" name="text" placeholder="Product Description" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Quantity</Label>
        <Input type="number" name="text" placeholder="Product Available" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Price</Label>
        <Input type="number" min="0" step="100" name="text" placeholder="Product Available" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">Picture</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          Please fill all the form above
        </FormText>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default ProductForm;