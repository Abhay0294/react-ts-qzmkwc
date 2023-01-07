import * as React from 'react';
import './style.css';

export default function App() {
  const formFields = { name: '', email: '', password: 0 };
  //const [formFields, setFormFields]=React.useState()
  const handleChange =
    (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormFields({
        ...formFields,
        [fieldName]: e.currentTarget.value,
      });
    };
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={formFields.name}
        onChange={handleChange('name')}
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={formFields.email}
        onChange={handleChange('email')}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={formFields.password}
        onChange={handleChange('password')}
      />
      <button type="submit">Register</button>
    </form>
  );
}

function setFormFields(arg0: {
  name: string;
  email: string;
  password: number;
}) {}
