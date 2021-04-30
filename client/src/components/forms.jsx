import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import PropTypes from 'prop-types'


const Forms = ({
	EMAIL,
	PASSWORD,
	PASSWORD_CHECK,
	TEXT_AREA,
	SELECT,
	SELECT_OPTIONS,
	MULTIPLE,
	MULTIPLE_OPTIONS,
	FILE,
	RADIO,
	CHECKBOX,
	FIRSTNAME,
	LASTNAME,
	FULLNAME,
	ONSUBMIT,
	ONCHANGE
}) => {
	return (
		<Form method="POST" onSubmit={ONSUBMIT} encType="multipart/form-data">
			{EMAIL ? (
				<FormGroup>
					<Label for="exampleEmail">Email</Label>
					<Input
						type="email"
						name={EMAIL}
						placeholder="Type your email"
						onChange={ONCHANGE}
					/>
				</FormGroup>
			) : null}
			{FIRSTNAME ? (
				<FormGroup>
					<Label for="exampleEmail">First Name</Label>
					<Input
						type="text"
						name={FIRSTNAME}
						placeholder="Type your first name"
						onChange={ONCHANGE}
					/>
				</FormGroup>
			) : null}
			{LASTNAME ? (
				<FormGroup>
					<Label for="exampleEmail">Last Name</Label>
					<Input
						name={LASTNAME}
						placeholder="type your last name"
						onChange={ONCHANGE}
					/>
				</FormGroup>
			) : null}
			{FULLNAME ? (
				<FormGroup>
					<Label for="exampleEmail">Full Name</Label>
					<Input
						name={FULLNAME}
						placeholder="type your full name"
						onChange={ONCHANGE}
					/>
				</FormGroup>
			) : null}
			{PASSWORD ? (
				<FormGroup>
					<Label for="examplePassword">Password</Label>
					<Input
						type="password"
						name={PASSWORD}
						placeholder="Your Password"
						onChange={ONCHANGE}
					/>
				</FormGroup>
			) : null}
			{PASSWORD_CHECK ? (
				<FormGroup>
					<Label for="examplePassword">Verify Password</Label>
					<Input
						type="password"
						name={PASSWORD_CHECK}
						placeholder="Type again"
						onChange={ONCHANGE}
					/>
				</FormGroup>
			) : null}
			{SELECT ? (
				<FormGroup>
					<Label for="exampleSelect">Select</Label>
					<Input type="select" name={SELECT} id="exampleSelect" onChange={ONCHANGE}>
						<option>{SELECT_OPTIONS}</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
					</Input>
				</FormGroup>
			) : null}
			{MULTIPLE ? (
				<FormGroup>
					<Label for="exampleSelectMulti">Select Multiple</Label>
					<Input
						type="select"
						name="selectMulti"
						onChange={ONCHANGE}
					>
						<option>{MULTIPLE_OPTIONS}</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
					</Input>
				</FormGroup>
			) : null}
			{TEXT_AREA ? (
				<FormGroup>
					<Label for="exampleText">Text Area</Label>
					<Input type="textarea" name={TEXT_AREA} onChange={ONCHANGE}/>
				</FormGroup>
			) : null}
			{FILE ? (
				<FormGroup>
					<Label for="exampleFile">File</Label>
					<Input type="file" name={FILE} id="exampleFile" />
					<FormText color="muted">
						Please only submit .png or .jpg file
					</FormText>
				</FormGroup>
			) : null}
			{RADIO ? (
				<FormGroup tag="fieldset">
					<legend>Radio Buttons</legend>
					<FormGroup check>
						<Label check>
							<Input type="radio" name="radio1" /> Option one is this and
							that—be sure to include why it's great
						</Label>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input type="radio" name="radio1" /> Option two can be something
							else and selecting it will deselect option one
						</Label>
					</FormGroup>
					<FormGroup check disabled>
						<Label check>
							<Input type="radio" name={RADIO} disabled /> Option three is
							disabled
						</Label>
					</FormGroup>
				</FormGroup>
			) : null}

			{CHECKBOX ? (
				<FormGroup check>
					<Label check>
						<Input type="checkbox" name={CHECKBOX} /> Check me out
					</Label>
				</FormGroup>
			) : null}

			<Button className="my-3" color="primary">
				Submit
			</Button>
		</Form>
	);
};

Forms.propTypes = {
	EMAIL: PropTypes.string,
	PASSWORD: PropTypes.string ,
	PASSWORD_VERIFY: PropTypes.string,
	TEXT_AREA: PropTypes.string,
	SELECT: PropTypes.string,
	MULTIPLE: PropTypes.string,
	FILE: PropTypes.string,
	RADIO: PropTypes.string,
	CHECKBOX: PropTypes.string,
	FIRSTNAME: PropTypes.string,
	LASTNAME: PropTypes.string,
	FULLNAME: PropTypes.string,
	ONSUBMIT: PropTypes.func,
	ONCHANGE: PropTypes.func
}

export default Forms;
