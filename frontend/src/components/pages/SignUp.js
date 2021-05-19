import React from 'react';
import { Form, Input } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from './actions/auth'
import "./SignUp.css"

/*
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
*/
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
  // const [form] = Form.useForm();

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
        <div className='form-inputs'>
          <label className='form-label'>Username</label>

          <Form.Item
            name="Username"
            rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
          >
            <Input className="signup-username" placeholder="Username" />
          </Form.Item>
        </div>
        <label className='form-label'>E-mail</label>
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
          <Input className="signup-email" placeholder="E-mail" />
        </Form.Item>
        <label className='form-label'>Password</label>
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
        <label className='form-label'>Confirm Password</label>
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

                if (getFieldValue('password').length < 8) {
                  return Promise.reject(new Error('Your password must be greater than 8 characters!'))
                }

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
          <button className='form-input-btn' type='submit'>
            Sign up
        </button>
          <br></br>
          <span className='form-input-login'>
            Already have an account? Login <NavLink to='/signin/'>
              here.
          </NavLink>
          </span>
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