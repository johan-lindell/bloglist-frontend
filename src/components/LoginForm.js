import React from 'react'
import Notificaiton from './Notification'

const LoginForm = ({
  message,
  errorMessage,
  handleLogin,
  username,
  setUsername,
  password,
  setPassword
}) => {
  return (
    <div>
      <h2>Log in to application</h2>
      <Notificaiton message={message} errorMessage={errorMessage} />
      <form onSubmit={handleLogin}>
        <div>
            username
          <input id='username' type='text' value={username} name='Username' onChange={({ target }) => setUsername(target.value)}/>
        </div>
        <div>
            password
          <input id='password' type='password' value={password} name='Password' onChange={({ target }) => setPassword(target.value)}/>
        </div>
        <button id='login-button' type='submit'>login</button>
      </form>
    </div>
  )
}

export default LoginForm