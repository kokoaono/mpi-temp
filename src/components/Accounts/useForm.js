import { useState, useEffect } from 'react'

export const useForm = () => {
  const [values, setValues] = useState(
    {
      username: '',
      email: '',
      password: ''
    }
  )

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }
  return { handleChange }
};
