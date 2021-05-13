import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from './actions/auth'
import "./SignUp.css"


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    props.onAuth(values.Username, values.email, values.password, values.confirm)
    props.history.push('/');
  };

  return (
    <div className='form-body' style={{ marginTop: '11vh' }}>
      <Form
        className="signup-form"
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <h1>Sign Up</h1>
        
        <Form.Item
          name="Username"
          rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
          >
          <Input className="signup-username" placeholder="Username" />
        </Form.Item>  
         
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input className="signup-email"  placeholder="E-mail" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button className="signup-form-button" type="primary" htmlType="submit">
            Sign Up
          </Button>
          Or 
          <NavLink to='/signin/'>
              Already have an account? Sign in here.
          </NavLink>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
      loading: state.loading,
      error: state.error
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);