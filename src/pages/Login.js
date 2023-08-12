import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import '../styles/Login.css';

function Login() {
  const {
    email,
    setEmail, password, setPassword, btnDisable, setBtnDisable } = useContext(MyContext);

  const validateInput = () => {
    const regex = /\S+@\S+\.\S+/;
    const passwordLength = 6;
    const verifyEmail = email && regex.test(email);
    const verifyName = password.length > passwordLength;
    setBtnDisable(!(verifyEmail && verifyName));
  };

  useEffect(() => {
    validateInput();
  });

  const history = useHistory();

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/meals');
  };

  return (
    <div className="login-container vh-100">
      <h1>Login</h1>
      <form className="d-flex aline-items-center form-login">
        <fieldset>
          <legend className="d-flex justify-content-center">
            Digite e-mail e senha
          </legend>
          <label htmlFor="email" className="label-login">
            E-mail:
            {' '}
            {' '}
            {' '}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="rounded input-login"
              data-testid="email-input"
              value={ email }
              onChange={ (({ target }) => setEmail(target.value)) }
            />
          </label>
          <label htmlFor="password">
            Senha:
            {' '}
            {' '}
            {' '}
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="rounded input-login"
              data-testid="password-input"
              value={ password }
              onChange={ (({ target }) => setPassword(target.value)) }
            />
          </label>
          <button
            type="button"
            data-testid="login-submit-btn"
            className="btn-login"
            disabled={ btnDisable }
            onClick={ handleClick }
          >
            Enter
          </button>
          <p>
            Caso não tenha login digite um
            email valida e uma senha com no
            minimo 7 digítos para se registrar.
          </p>
        </fieldset>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Login;
