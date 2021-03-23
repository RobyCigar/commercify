import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useState } from "react";

const Forms = ({
	email,
	password,
	passwordVerify,
	textArea,
	select,
	multiple,
	file,
	radio,
	checkbox,
	firstName,
	lastName,
	fullName,
	onSubmit,
	onChange
}) => {
	return (
		<Form onSubmit={onSubmit}>
			{email ? (
				<FormGroup>
					<Label for="exampleEmail">Email</Label>
					<Input
						type="email"
						name="email"
						id="exampleEmail"
						placeholder="Type your email"
						onChange={onChange}
					/>
				</FormGroup>
			) : null}
			{firstName ? (
				<FormGroup>
					<Label for="exampleEmail">First Name</Label>
					<Input
						type="firstname"
						name="firstname"
						id="firstname"
						placeholder="Type your first name"
						onChange={onChange}
					/>
				</FormGroup>
			) : null}
			{lastName ? (
				<FormGroup>
					<Label for="exampleEmail">Last Name</Label>
					<Input
						type="lastname"
						name="lastname"
						id="lastname"
						placeholder="type your last name"
						onChange={onChange}
					/>
				</FormGroup>
			) : null}
			{fullName ? (
				<FormGroup>
					<Label for="exampleEmail">Full Name</Label>
					<Input
						type="fullname"
						name="fullname"
						id="fullname"
						placeholder="type your full name"
						onChange={onChange}
					/>
				</FormGroup>
			) : null}
			{password ? (
				<FormGroup>
					<Label for="examplePassword">Password</Label>
					<Input
						type="password"
						name="password"
						id="examplePassword"
						placeholder="Your Password"
						onChange={onChange}
					/>
				</FormGroup>
			) : null}
			{passwordVerify ? (
				<FormGroup>
					<Label for="examplePassword">Verify Password</Label>
					<Input
						type="password"
						name="password1"
						id="examplePassword"
						placeholder="Type again"
						onChange={onChange}
					/>
				</FormGroup>
			) : null}
			{select ? (
				<FormGroup>
					<Label for="exampleSelect">Select</Label>
					<Input type="select" name="select" id="exampleSelect" onChange={onChange}>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</Input>
				</FormGroup>
			) : null}
			{multiple ? (
				<FormGroup>
					<Label for="exampleSelectMulti">Select Multiple</Label>
					<Input
						type="select"
						name="selectMulti"
						id="exampleSelectMulti"
						multiple
					>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</Input>
				</FormGroup>
			) : null}
			{textArea ? (
				<FormGroup>
					<Label for="exampleText">Text Area</Label>
					<Input type="textarea" name="text" id="exampleText" />
				</FormGroup>
			) : null}
			{file ? (
				<FormGroup>
					<Label for="exampleFile">File</Label>
					<Input type="file" name="file" id="exampleFile" />
					<FormText color="muted">
						Please only submit .png or .jpg file
					</FormText>
				</FormGroup>
			) : null}
			{radio ? (
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
							<Input type="radio" name="radio1" disabled /> Option three is
							disabled
						</Label>
					</FormGroup>
				</FormGroup>
			) : null}

			{checkbox ? (
				<FormGroup check>
					<Label check>
						<Input type="checkbox" /> Check me out
					</Label>
				</FormGroup>
			) : null}

			<Button className="my-3" color="primary">
				Submit
			</Button>
		</Form>
	);
};

export default Forms;
