import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import LoginForm from "../Images/login-form.png";
import LoginFormLogo from "../Images/Logo.png";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toaster } from "./utils/UtilsFuntion";
//localhost:7004/api/ClientLogin/ValidateClientEmail/Testuser%40gmail.com

const ResetPasswordForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target.className.includes("modal add-question-modal")) {
      closeModal();
    }
  };

  const BackToLogin = () => {
    navigate("/Login");
  };

  const handleVerifyEmail = () => {
    setIsVerified(true);
  };
  
  const resetPassword = async () => {
      try {
          const request = {
              emailId: email,
              newPassword: formik.values.newPassword,
              confirmPassword: formik.values.confirmPassword
          }
          const response = await axios.post(`https://localhost:7004/api/ClientLogin/UpdateClientUser`, request);
          if (response.status === 200) {
            console.log("changepassword",response.data)
              localStorage.removeItem('token');
              navigate('/login')
          }
      } catch (error) {
          console.log(error, " Error")
          toaster('error', error.response.data.message)
      }
  }
  const PasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required("New password is required")
      .min(8, "Minimum 8 characters required")
      .max(32, "Maximum allowed characters are 32")
      .matches(
        PasswordRegex,
        "Password must contain atleast one Captial letter, number and a special character"
      ),
    confirmPassword: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("newPassword"), null], "newPassword must match")
      .matches(
        PasswordRegex,
        "Password must contain atleast one Captial letter, number and a special character"
      ),
  });
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    // onSubmit: resetPassword,
    validationSchema: validationSchema,
  });

  const handleInputChange = (fieldName, value) => {
    formik.setFieldValue(fieldName, value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div>
      <section className="d-flex">
        <Container fluid>
          <Row className="p-0">
            <Col lg={6} className="p-0">
              <img src={LoginForm} className="w-100 left-side-image" alt="" />
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center flex-column py-4"
            >
              <div
                className="d-flex justify-content-center flex-column"
                style={{ width: "50%" }}
              >
                <img src={LoginFormLogo} alt="" className="w-100 mb-5" />
                <Form className="w-100">
                  {!isVerified ? (
                    <>
                      <h5 className="mb-4 fw-medium">ENTER YOUR EMAIL</h5>
                      <Form.Group className="mb-5" controlId="verifyEmailInput">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                      </Form.Group>
                      <Button
                        variant="primary"
                        className="login-form-btn form-control mb-5"
                        onClick={handleVerifyEmail}
                      >
                        VERIFY
                      </Button>
                    </>
                  ) : (
                    <>
                      <h5 className="mb-4 fw-medium">RESET PASSWORD</h5>
                      <Form.Group className="mb-3" controlId="emailInput">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="newPasswordInput">
                        <Form.Label>New Password</Form.Label>
                        <div className="LoginFormPasswordInput">
                          <Form.Control
                            name="newPassword"
                            type={passwordVisible ? "text" : "password"}
                            className="loginFormInput"
                            placeholder="Enter New Password"
                            value={formik.values.newPassword}
                            onChange={(e) => {
                              handleInputChange("newPassword", e.target.value);
                            }}
                            onBlur={formik.handleBlur}
                          />
                          <FontAwesomeIcon
                            icon={passwordVisible ? faEyeSlash : faEye}
                            onClick={togglePasswordVisibility}
                            className="LoginPagePasswordIcon"
                          />
                        </div>
                        {formik.touched.newPassword &&
                          formik.errors.newPassword && (
                            <Form.Text className="text-danger">
                              {formik.errors.newPassword}{" "}
                            </Form.Text>
                          )}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="confirmPasswordInput"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <div className="LoginFormPasswordInput">
                          <Form.Control
                            name="confirmPassword"
                            type={confirmPasswordVisible ? "text" : "password"}
                            placeholder="Re-Enter New Password"
                            value={formik.values.confirmPassword}
                            onChange={(e) => {
                              handleInputChange(
                                "confirmPassword",
                                e.target.value
                              );
                            }}
                            onBlur={formik.handleBlur}
                          />
                          <FontAwesomeIcon
                            icon={confirmPasswordVisible ? faEyeSlash : faEye}
                            onClick={toggleConfirmPasswordVisibility}
                            className="LoginPagePasswordIcon"
                          />
                        </div>
                        {formik.touched.confirmPassword &&
                          formik.errors.confirmPassword && (
                            <Form.Text className="text-danger">
                              {formik.errors.confirmPassword}{" "}
                            </Form.Text>
                          )}
                      </Form.Group>
                      <Button
                        variant="primary"
                        className="login-form-btn form-control my-4"
                        onClick={openModal}
                      >
                        RESET
                      </Button>
                    </>
                  )}
                </Form>
                <Modal show={isOpen} onHide={closeModal} centered>
                  <Modal.Body className="py-2 ">
                    <h5 className="modal-box-heading text-center">
                      PASSWORD RESET SUCCESSFUL!
                    </h5>
                    <div className="d-grid gap-2 col-6 mx-auto py-4">
                      <Button
                        variant="primary"
                        className="login-form-btn"
                        onClick={BackToLogin}
                      >
                        LOGIN NOW
                      </Button>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ResetPasswordForm;
