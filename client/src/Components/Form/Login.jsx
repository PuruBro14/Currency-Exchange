import React, { useState } from "react";
import { Grid, Row, Col } from "rsuite";
import "./assets/css/Login.css";

export default function Login() {
  const [istoggle, setIstoggle] = useState(0);

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
                  <div className="login-form-part">
                    <div className="login-content">
                      <div className="login-title">
                        <h3>LOGIN</h3>
                        <div className="underline-title"></div>
                      </div>
                    </div>
                    <div className="login_form">
                      <div className="input-container">
                        <input type="text" name="username" id="username" />
                        <label for="username">Username</label>
                      </div>

                      <div className="input-container">
                        <input type="email" name="email" id="email" />
                        <label for="email">Email</label>
                      </div>
                    </div>

                    <a href="#">
                      <p className="forgot-pass">Forgot password?</p>
                    </a>
                    <button className="submit-btn" type="submit" name="submit">
                      Login
                    </button>
                  </div>
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
                        <label for="username">Username</label>
                      </div>

                      <div className="input-container">
                        <input type="email" id="email" required />
                        <label for="email">Email</label>
                      </div>
                      <div className="input-container">
                        <input type="password" id="pass" required />
                        <label for="password">Password</label>
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
