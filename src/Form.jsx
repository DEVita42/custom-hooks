import React from 'react';
import UseForm from './UseForm';
function Form() {
  const { formValues, handleInputChange } = UseForm({
    username: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', formValues.username);
    console.log('Password:', formValues.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formValues.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formValues.password}
          onChange={handleInputChange} 
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Form;
