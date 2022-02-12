import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { getUserData } from '../Lsfunctions';

//For registration
export const useForm = (Validate, callback) => {
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

  const handleSubmit = async e => {
    e.preventDefault();
    const newUser = {
      id: Math.floor(Math.random() * 100),
      name: values.name,
      email: values.email,
      password: values.password
    }

    if (!values.name || !values.email || !values.password) {
      return setErrors(Validate(values))
    }
    try {
      await setUsers([...users, newUser])
      setIsSubmitting(true)
    } catch {
      setErrors('')
    }
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
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || '/';

  const [values, setValues] = useState({
    username: '',
    password: ''
  });
  const [checkedItem, setCheckedItem] = useState(false);
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
    setAuth({ values })
    setErrors(validateLogin(values))
    navigate('/home', { state: { from: { pathname: 'login' } } }
    )
    // setIsSubmitting(true)
  };

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isSubmitting) {
  //     console.log(values, checkedItem);

  //   }
  // }, [errors, isSubmitting, values, checkedItem, navigate, from])


  return { handleChange, values, handleSubmit, errors, checkedItem, handleCheckedItem }
};