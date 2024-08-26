import React, { useEffect, useState } from "react";
import LoginForm from "../Images/login-form.png";
import LoginFormLogo from "../Images/Logo.png";
import * as Yup from 'yup';
import { useLocation, useNavigate } from "react-router-dom";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";
import { useFormik } from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toaster } from "./utils/UtilsFuntion";
import axios from "axios";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  useEffect(() => {
    if (params.get('tokenExpired') === 'true') {
      toaster('error', 'Login Expired, Please Login Again');
    }
  }, [search]);

  const ResetPassword = () => {
    navigate("/Forgotpassword");
  };
  const handleclick = () =>{
    navigate('/dashboard')
  }

  // const login = async () => {
  //   try {
  //     const tokenResponse = await axios.get('https://localhost:7004/token', {
  //       params: {
  //         username: formik.values.email,
  //         password: formik.values.password ,
  //       }})                   
  //       if (tokenResponse.status === 200 && tokenResponse.data.token) {
  //       const token = tokenResponse.data.token;
  //       localStorage.setItem('authToken', token);
  //       const loginResponse = await axios.post(
  //         `https://localhost:7004/api/ClientLogin/ValidateClientUser/${formik.values.email}/${formik.values.password}`, 
  //         {
  //           headers: {
  //             'Authorization': `Bearer ${token}`
  //           }
  //         }
  //       );
  //       if (loginResponse.status === 200 && loginResponse.data.mes === 'logged in successfully') {
  //         toaster('success', 'Logged in successfully');
  //         console.log("Login", loginResponse.data);
  //         navigate('/dashboard');
  //       } else {
  //         toaster('error', 'Invalid email or password');
  //       }
  //     } else {
  //       toaster('error', 'Failed to get token');
  //     }
  //   } catch (err) {
  //     toaster('error', 'Login error');
  //     console.error(err);
  //   }
  // };
  
  // const EmailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
  const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Please enter email')
      .min(5, "Minimum 5 characters required")
      .max(64, "Maximum allowed characters are 64")
      .test("valid-description-whitespace", "Too many white spaces are not allowed",
        (value) => {
          const consecutiveWhiteSpaces = value.match(/\s{2,}/g);
          return !consecutiveWhiteSpaces;
        }),
      // .matches(EmailRegex, "Please enter valid email")

    password: Yup.string()
      .required('Please enter password')
      .min(8, "Minimum 8 characters required")
      .max(32, "Maximum allowed characters are 32")
      .matches(PasswordRegex, "Password must contain at least one Capital letter, number, and a special character")
      .matches(/^[a-zA-Z0-9 !@#$%^&*()_+{}\[\]:;"'-<>,.?~\\/-₹]+$/u,
        'Only Alphabet, Number, special characters are allowed')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    // onSubmit: login
  });

  const handleInputChange = (fieldName, value) => {
    formik.setFieldValue(fieldName, value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <section className="d-flex">
        <div className="container-fluid">
          <div className="row p-0">
            <div className="col-lg-6 p-0">
              <img src={LoginForm} className="w-100 left-side-image" alt="" />
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column py-4">
              <div
                className="d-flex justify-content-center flex-column"
                style={{ width: "50%" }}
              >
                <img
                  src={LoginFormLogo}
                  alt=""
                  className="w-100 mb-5 p-0 m-0"
                />
                <Form className="w-100" 
                // onSubmit={formik.handleSubmit}
                >
                  <h5 className="mb-4 fw-medium">DASHBOARD LOGIN</h5>
                  <FormGroup className="mb-3">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                      name="email"
                      type="text"
                      placeholder="Enter Email"
                      value={formik.values.email}
                      onChange={e => {
                        handleInputChange('email', e.target.value);
                      }}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <Form.Text className="text-danger">{formik.errors.email}{' '}</Form.Text>
                    )}
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel>Password</FormLabel>
                    <div className="LoginFormPasswordInput">
                      <FormControl
                        name="password"
                        type={passwordVisible ? 'text' : 'password'}
                        className="loginFormInput"
                        placeholder="Enter Password"
                        value={formik.values.password}
                        onChange={e => {
                          handleInputChange('password', e.target.value);
                        }}
                        onBlur={formik.handleBlur}
                      />
                      <FontAwesomeIcon
                        icon={passwordVisible ? faEyeSlash : faEye}
                        onClick={togglePasswordVisibility}
                        className="LoginPagePasswordIcon"
                      />
                    </div>
                    {formik.touched.password && formik.errors.password && (
                      <Form.Text className="text-danger">{formik.errors.password}{' '}</Form.Text>
                    )}
                    <div className="d-flex justify-content-end">
                      <Button
                        variant="link"
                        className="mb-3 forgotPassword-btn"
                        onClick={ResetPassword}
                      >
                        Forget Password?
                      </Button>
                    </div>
                  </FormGroup>
                  <Button
                    type="submit"
                    className="btn login-form-btn form-control"
                    onClick={handleclick}
                  >
                    LOGIN
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
