// /** @format */

// import React, { useState } from "react";
// import { Form, Col, InputGroup, Button } from "react-bootstrap";

// function FormExample() {
//   const [validated, setValidated] = useState(false);



//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Form.Row>
//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <Form.Label>First name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="First name"
//             defaultValue="Mark"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Label>Last name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Last name"
//             defaultValue="Otto"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//           <Form.Label>Username</Form.Label>
//           <InputGroup hasValidation>
//             <InputGroup.Prepend>
//               <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//             </InputGroup.Prepend>
//             <Form.Control
//               type="text"
//               placeholder="Username"
//               aria-describedby="inputGroupPrepend"
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please choose a username.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>
//       </Form.Row>
//       <Form.Row>
//         <Form.Group as={Col} md="6" controlId="validationCustom03">
//           <Form.Label>City</Form.Label>
//           <Form.Control type="text" placeholder="City" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid city.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom04">
//           <Form.Label>State</Form.Label>
//           <Form.Control type="text" placeholder="State" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid state.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom05">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control type="text" placeholder="Zip" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid zip.
//           </Form.Control.Feedback>
//         </Form.Group>
//       </Form.Row>
//       <Form.Group>
//         <Form.Check
//           required
//           label="Agree to terms and conditions"
//           feedback="You must agree before submitting."
//         />
//       </Form.Group>
//       <Button type="submit">Submit form</Button>
//     </Form>
//   );
// }

// export default FormExample;





// /** @format */

// import React, { useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   InputGroup,
//   Form,
//   FormControl,
//   Button,
// } from "react-bootstrap";
// import firebase from "../../firebase/firebase";
// import { deactivateForm } from "../../slices/form.slice";
// import { useDispatch, useSelector } from "react-redux";

// import { ButtonGroupContainer, ButtonContainer } from "./recipe-form.styles";

// const RecipeForm = () => {
//   const dispatch = useDispatch();
//   const [isFormValidated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     console.log(form.checkValidity());
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//     } else {
//       setValidated(true);
//       itemsRef.push(inputValue);
//       dispatch(deactivateForm());
//     }
//   };

//   const [inputValue, setInputValue] = useState({
//     imageUrl: "",
//     title: "",
//     description: "",
//     ingredients: "",
//     directions: "",
//   });
//   const itemsRef = firebase.database().ref("items");

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col md={8}>
//           <Card>
//             <Card.Header as="h5">New Recipe</Card.Header>
//             <Card.Body>
//               <Form
//                 onSubmit={handleSubmit}
//                 noValidate
//                 validated={isFormValidated}
//               >
//                 <Form.Group>
//                   <Form.Label>Recipe Name</Form.Label>
//                   <Form.Control
//                     onChange={(event) => {
//                       const { value, name } = event.target;
//                       setInputValue({ ...inputValue, [name]: value });
//                     }}
//                     type="text"
//                     placeholder="Add the name of your recipe here"
//                     name="title"
//                     required
//                     controlId="validationCustom01"
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     Please enter a recipe name.
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <label htmlFor="basic-url">Image URL</label>
//                 <InputGroup className="mb-3">
//                   <InputGroup.Prepend>
//                     <InputGroup.Text id="basic-addon3">
//                       https://
//                     </InputGroup.Text>
//                   </InputGroup.Prepend>
//                   <FormControl
//                     onChange={(event) => {
//                       const { value, name } = event.target;
//                       setInputValue({ ...inputValue, [name]: value });
//                     }}
//                     type="text"
//                     name="imageUrl"
//                     id="basic-url"
//                     aria-describedby="basic-addon3"
//                     controlId="validationCustom02"
//                   />
//                 </InputGroup>

//                 <Form.Group controlId="exampleForm.ControlTextarea1">
//                   <Form.Label>Description</Form.Label>
//                   <Form.Control
//                     onChange={(event) => {
//                       const { value, name } = event.target;
//                       setInputValue({ ...inputValue, [name]: value });
//                     }}
//                     type="text"
//                     placeholder="Add your description here"
//                     name="description"
//                     as="textarea"
//                     rows={2}
//                     required
//                     controlId="validationCustom03"
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     Please enter a recipe description.
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <label>Ingredients</label>
//                 <InputGroup className="mb-3">
//                   <FormControl
//                     onChange={(event) => {
//                       const { value, name } = event.target;
//                       setInputValue({ ...inputValue, [name]: value });
//                     }}
//                     type="text"
//                     placeholder="Add ingredients here"
//                     name="ingredients"
//                     aria-label="Ingredients list"
//                     aria-describedby="basic-addon2"
//                     required
//                     controlId="validationCustom04"
//                   />
//                   <InputGroup.Append>
//                     <Button variant="outline-success">+</Button>
//                   </InputGroup.Append>
//                   <Form.Control.Feedback type="invalid">
//                     Please add at least one ingredient.
//                   </Form.Control.Feedback>
//                 </InputGroup>
//                 <Form.Group controlId="exampleForm.ControlTextarea3">
//                   <Form.Label>Directions</Form.Label>
//                   <Form.Control
//                     onChange={(event) => {
//                       const { value, name } = event.target;
//                       setInputValue({ ...inputValue, [name]: value });
//                     }}
//                     type="text"
//                     name="directions"
//                     as="textarea"
//                     rows={8}
//                     required
//                     controlId="validationCustom05"
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     Please add the directions
//                   </Form.Control.Feedback>
//                 </Form.Group>
//                 <ButtonGroupContainer>
//                   <ButtonContainer>
//                     <Button
//                       onClick={() => dispatch(deactivateForm())}
//                       variant="secondary"
//                     >
//                       Cancel
//                     </Button>
//                   </ButtonContainer>
//                   <Button variant="primary" type="submit">
//                     Save
//                   </Button>
//                 </ButtonGroupContainer>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default RecipeForm;
