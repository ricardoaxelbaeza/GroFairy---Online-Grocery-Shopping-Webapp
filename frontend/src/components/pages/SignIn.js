import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import * as actions from './actions/auth'
import { LoadingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import './SignIn.css';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


const NormalLoginForm = (props) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    props.onAuth(values.username, values.password)
    props.history.push('/');
  };

  let errorMessage = null;
  if(props.error) {
    errorMessage = (
      <p>{props.error.message}</p>
    )
  }

  return (
    <body>
    <div className='form-body' style={{ marginTop: '11vh' }}>
      {errorMessage}
      {
        props.loading ?

        <Spin indicator={antIcon} />

        :
      
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <h1>Login</h1>
          <label className='form-label'>Username</label>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input className="login-username" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <label className='form-label'>Password</label>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
          <button className='form-input-btn' type='submit'>
              Log in
          </button>
          <span className='form-input-login'>
            <p></p>
          Or <NavLink to='/signup'>
              Sign up
            </NavLink>
        </span>
           
          </Form.Item>
        </Form>
      }
    </div>
    </body>
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
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);