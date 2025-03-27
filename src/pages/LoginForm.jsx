import React from 'react'

const LoginForm = () => {
    return (
      <div>
        <h2>Login Form</h2>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  export default LoginForm;



  <Router>
      <div>
        <h1>Welcome to My App</h1>
        <Link to="/login">
        <button className="bg-amber-500 text-white absolute flex items-center justify-center mt-100  left-150  px-2 py-2 font-semibold  w-70 rounded-md hover:bg-white transition hover:text-black align-center">Join Now!</button>

        </Link>
      </div>
      <Route path="/login" component={LoginForm} />
    </Router>