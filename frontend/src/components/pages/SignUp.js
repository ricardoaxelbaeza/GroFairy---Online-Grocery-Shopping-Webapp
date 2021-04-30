import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from './actions/auth'

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
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="Username"
          label="Username"
          rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
          >
          <Input />
        </Form.Item>   
        <Form.Item
          name="email"
          label="E-mail"
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
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
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
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
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