import { useState, useEffect } from 'react';
// import { UseLocalStoage } from './UseLocalStoage';
import { getUserData } from '../Lsfunctions'
import { useAuth } from './AuthContext';

//For registration
export const useForm = (Validate, callback) => {
  // const [values, setValues] = UseLocalStoage('users', [{ name: '', email: '', password: '' }])
  const [users, setUsers] = useState(getUserData());
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);


  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      id: Math.floor(Math.random() * 100),
      name: values.name,
      email: values.email,
      password: values.password
    };
    setUsers([...users, newUser])
    setErrors(Validate(values))
    setIsSubmitting(true)
  };


  const handlePassword = () => {
    setShow(!show)
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors, isSubmitting, values, callback])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])


  return { handleChange, values, handleSubmit, handlePassword, show, errors }
};


//For login
export const useLoginForm = (validateLogin) => {
  const setAuthData = useAuth();
  const [values, setValues] = useState({
    username: '',
    password: ''
  });
  const [checkedItem, setCheckedItem] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleCheckedItem = e => {
    const { checked } = e.target
    setCheckedItem(checked)
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validateLogin(values))
    setIsSubmitting(true)
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log(values);
    }
  }, [errors, isSubmitting, values])



  return { handleChange, values, handleSubmit, errors, checkedItem, handleCheckedItem }
};