import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import "./contact.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${name} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const Contact = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="contactContainer" id="contact">
      <div className="lineContainer">
        <div className="leftContactContainer">
          <h2>Contact Me</h2>
          <h3>Email: ductrung190499@gmail.com</h3>
          <h3>Phone: +358 449 347 664</h3>
          <h4>Always here to serve you with my all pleasure!</h4>
        </div>
        <div className="rightContactContainer">
          <Form
            // {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={
              {
                // maxWidth: 600,
              }
            }
            validateMessages={validateMessages}
          >
            <Form.Item
              name={"name"}
              label=""
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <span className="contactLabel">Name</span>
              <Input style={{ height: "50px", borderRadius: "3px" }} />
            </Form.Item>
            <Form.Item
              name={"email"}
              label=""
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <span className="contactLabel">Email</span>
              <Input style={{ height: "50px", borderRadius: "3px" }} />
            </Form.Item>
            <Form.Item name={"introduction"} label="">
              <span className="contactLabel">Message</span>
              <Input.TextArea style={{ height: "80px", borderRadius: "3px" }} />
            </Form.Item>
            <Form.Item
            // wrapperCol={{
            //   ...layout.wrapperCol,
            //   offset: 8,
            // }}
            >
              <Button
                htmlType="submit"
                style={{
                  height: "50px",
                  width: "100%",
                  borderRadius: "3px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Go Go Go&nbsp;
                <RocketLaunchIcon />
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
