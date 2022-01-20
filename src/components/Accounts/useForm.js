import { useState, useEffect } from 'react';
import { validateLogin } from './Validate';

export const useForm = (Validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log(values);
    }
  }, [errors, isSubmitting, values])

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(Validate(values))
    setIsSubmitting(true)
  };

  return { handleChange, values, handleSubmit, errors }
};

export const useLoginForm = validateLogin => {
  const [values, setValues] = useState({
    name: '',
    password: ''
  });

 
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log(values);
    }
  }, [errors, isSubmitting, values])

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validateLogin(values))
    setIsSubmitting(true)
  };

  return { handleChange, values, handleSubmit, errors }
}