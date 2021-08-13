import React from "react";
import "./style.css";
import { Row, Col, Form, Input, Button } from "antd";
import {
    Link
  } from "react-router-dom";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const backgroundUrl = "/assetes/backgrounds/bgimage1.jpg";
const backgroundStyle = {
  backgroundImage: `url(${backgroundUrl})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backroundPosition: "bottom",
  height: "100vh",
};

function SignupPage() {
  
  
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ height: "100vh" }}>
      <Row justify="Center" className="align-items-stretch h-100">
        <Col xs={20} sm={20} md={24} lg={12}>
          <div className="container d-flex flex-column justify-content-center h-100">
            <Row justify="center">
              <Col xs={24} sm={24} md={20} lg={12} xl={12}>
                <h2 className="flex-row ml-4 mainheading"> Places Hub</h2>
                <p className="flex-row ml-4 welcomeBack">
                  {" "}
                  Register Yourself by just Filling the Form
                </p>
                <div className="mt-4 mb-3">
                  <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Name!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="City"
                      name="city"
                      rules={[
                        {
                          required: true,
                          message: "Please input your City!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Country"
                      name="country"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Country!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Contact No"
                      name="contactNo"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Contact No!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Email!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                      <Button style={{color:"#fff",backgroundColor:"#FA9746",fontWeight:"300",paddingLeft:"20%",paddingRight:"20%"}} htmlType="submit">
                        Sign Up
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
                <div className="text-center mt-5">
                  <p>
                    Already Have Account?
                  </p>
                  <Link to="signin">
                  <a style={{color:"#FA9746"}} onClick={console.log("clicked")} href='##'>{" "} Sign In</a>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={12}>
          <div
            className="d-flex flex-column justify-content-between h-100 px-4"
            style={backgroundStyle}
          ></div>
        </Col>
      </Row>
    </div>
  );
}
export default SignupPage;
