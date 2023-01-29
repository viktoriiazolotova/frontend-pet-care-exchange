import React from "react";
import Alert from "react-bootstrap/Alert";
import { Button, Form, FormGroup, Label, Row, Col, Input } from "reactstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import "./NewPetsitterForm.css";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  zipcode: "",
  city: "",
  pet_type_take_care: "",
  is_available_help: false,
};

const NewPetsitterForm = ({
  addPetsitterCallbackFunc,
  responseToPostSitterRequest,
}) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [showAlert, setShowAlert] = useState(false);

  const handleNewDataChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.checked);
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    let isChecked = e.target.checked;
    if (isChecked) {
      newFormData.is_available_help = true;
    } else {
      newFormData.is_available_help = false;
    }

    // console.log("here is the new form data", newFormData);
    setFormData(newFormData);
  };

  const handleNewPetsitterAdd = (e) => {
    e.preventDefault();
    addPetsitterCallbackFunc(formData);
  };

  return (
    <div>
      <Form className="petsitter-form" onSubmit={handleNewPetsitterAdd}>
        <h1>Submit a form to become PetSitter</h1>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="name placeholder"
                type="text"
                value={formData.name}
                onChange={handleNewDataChange}
              />
            </FormGroup>
          </Col>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="email placeholder"
                  type="text"
                  value={FormData.email}
                  onChange={handleNewDataChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </Row>

        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                id="city"
                name="city"
                placeholder="Seattle"
                type="text"
                value={formData.city}
                onChange={handleNewDataChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <FormGroup>
              <Label for="zipcode">Zip</Label>
              <Input
                id="zipcode"
                name="zipcode"
                placeholder="00000"
                type="text"
                value={formData.zipcode}
                onChange={handleNewDataChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup check>
          <Input
            id="is_available_help"
            name="is_available_help"
            type="checkbox"
            value={formData.is_available_help}
            onChange={handleNewDataChange}
          />
          <Label check for="is_available_help">
            Avaialble to help
          </Label>
        </FormGroup>
        <Row>
          <Col md={2}>
            <FormGroup>
              <Label for="pet_type_take_care">Select pet types</Label>
              <Input
                id="pet_type_take_care"
                name="pet_type_take_care"
                type="select"
                value={formData.pet_type_take_care}
                onChange={handleNewDataChange}
              >
                <option></option>
                <option>Cat</option>
                <option>Dog</option>
                <option>Bird</option>
                <option>Any</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        {/* <Button type="submit">Submit form</Button> */}

        <Button type="submit" onClick={() => setShowAlert(true)}>
          Submit form
        </Button>
      </Form>
      <Row>
        <Col md={4}>
          <>
            <Alert
              className="petsitter-alert"
              show={showAlert}
              variant="secondary"
            >
              {/* <Alert.Heading>How's it going?!</Alert.Heading> */}
              <p>
                {responseToPostSitterRequest
                  ? `${responseToPostSitterRequest}`
                  : " "}
              </p>

              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => setShowAlert(false)}
                  variant="outline-success"
                >
                  Close
                </Button>
              </div>
            </Alert>
          </>
        </Col>
      </Row>

      {/* <p>
        {responseToPostSitterRequest ? `${responseToPostSitterRequest}` : " "}
      </p> */}
    </div>
  );
};

NewPetsitterForm.propTypes = {
  addPetsitterCallbackFunc: PropTypes.func.isRequired,
};

export default NewPetsitterForm;
