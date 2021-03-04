import React, { useRef, useState, useContext } from 'react';
import './SigninPage.scss';
import { useAuth, AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

import './SigninPage.scss';

function SigninPage() {
  const { currentUser } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/waiter');
    } catch {
      setError('Failed to sign in');
    }

    setLoading(false);
  }

  return (
    <>
      {!currentUser ? (
        <div className="login-wrapper">
          <h2 className="title">Sign In</h2>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="un " id="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                ref={emailRef}
                value="test@test.com"
                required
              />
            </div>
            <div className="pass" id="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                ref={passwordRef}
                value="password"
                required
              />
            </div>
            <button className="submit" type="submit" disabled={loading}>
              Sign In
            </button>
          </form>
        </div>
      ) : (
        history.push('/waiter')
      )}
    </>
  );
}

export default SigninPage;
