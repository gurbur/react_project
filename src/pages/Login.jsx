import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ loginHandler, setUserInfo }) => {
  const [username, setUsername] = useState('');  // useState로 상태 관리
  const [password, setPassword] = useState('');

  // input 값 변경 시 상태 업데이트
  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // 로그인 요청 처리
  const loginRequestHandler = () => {
    axios
      .post(
        'https://localhost:4000/users/login',
        {
          userId: username,  // 'userId'로 서버에 데이터 전송
          password: password,
        },
        { 'Content-Type': 'application/json', withCredentials: true }
      )
      .then((res) => {
        loginHandler(true);  // 로그인 성공 처리
        // 유저 정보를 받기 위한 추가 요청
        return axios.get('https://localhost:4000/users/userinfo', {
          withCredentials: true,
        });
      })
      .then((res) => {
        const { userId, email } = res.data.data;
        setUserInfo({ userId, email });  // 유저 정보 상태 업데이트
      })
      .catch((err) => alert(err));
  };

  return (
    <div className='loginContainer'>
      <div className='inputField'>
        <div>Username</div>
        <input
          name='username'
          onChange={inputHandler}
          value={username}
          type='text'
        />
      </div>
      <div className='inputField'>
        <div>Password</div>
        <input
          name='password'
          onChange={inputHandler}
          value={password}
          type='password'
        />
      </div>
      <div className='passwordField'>
        <button onClick={loginRequestHandler} className='loginBtn'>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;