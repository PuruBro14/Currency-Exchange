import React, { useState } from "react";
import { Grid, Row, Col } from "rsuite";
import "./assets/css/Login.css";
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { setLogin } from "../../services/operations/authAPI";

export default function Login() {
  const [istoggle, setIstoggle] = useState(0);
    const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

    const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

    const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(setLogin(email, password, navigate))
  }

  return (
    <>
      <div className="mainlogindiv">
        <Grid fluid>
          <Row>
            <Col md={12} className="loginImg">
              <h1>Login</h1>
            </Col>
            <Col md={12}>
              <div className="mainlogincontener">
                <Grid fluid>
                  <Row className="indicater">
                    <Col
                      md={12}
                      className={istoggle === 0 ? "tabs activeBtn" : "tabs"}
                      onClick={() => {
                        setIstoggle(0);
                      }}
                    >
                      Login
                    </Col>
                    <Col
                      md={12}
                      className={istoggle === 1 ? "tabs activeBtn" : "tabs"}
                      onClick={() => {
                        setIstoggle(1);
                      }}
                    >
                      Sign Up
                    </Col>
                  </Row>
                </Grid>
                {istoggle === 0 ? (
                  <form className="login-form-part" onSubmit={handleOnSubmit}>
                    <div className="login-content">
                      <div className="login-title">
                        <h3>LOGIN</h3>
                        <div className="underline-title"></div>
                      </div>
                    </div>
                    <div className="login_form">
                      <div className="input-container">
                        <input type="email" name="email" id="email" 
                         value={email}
                         onChange={handleOnChange}
                        />
                        <label htmlFor="username">Email</label>
                      </div>

                      <div className="input-container">
                        <input type="password" name="password" id="password" 
                         value={password}
                         onChange={handleOnChange}
                        />
                        <label htmlFor="email">Password</label>
                      </div>
                    </div>

                    <a href="#">
                      <p className="forgot-pass">Forgot password?</p>
                    </a>
                    <button className="submit-btn" type="submit" name="submit">
                      Login
                    </button>
                  </form>
                ) : (
                    <div className="Register_form_part">
                      <div className="login-content">
                        <div className="login-title">
                          <h3>Sign Up</h3>
                          <div className="underline-title"></div>
                        </div>
                      </div>
                      <div className="login_form">
                        <div className="input-container">
                          <input type="text" id="username" required />
                          <label htmlFor="username">Username</label>
                        </div>

                        <div className="input-container">
                          <input type="email" id="email" required />
                          <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-container">
                          <input type="password" id="pass" required />
                          <label htmlFor="password">Password</label>
                        </div>
                      </div>

                      <button className="submit-btn" type="submit" name="submit">
                        Sign Up
                      </button>
                    </div>
                )}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    </>
  );
}
