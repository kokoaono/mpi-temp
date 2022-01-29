export const Validate = (values) => {
  let errors = {};

  //Name
  if (!values.name.trim()) {
    errors.name = 'Name required'
  };

  //Email
  if (!values.email) {
    errors.email = 'Email required'
  } else if (!/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
    errors.email = 'Email address is invalid'
  };

  //Password
  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 4) {
    errors.password = 'Password needs to be 4 characteres or more'
  };

  return errors;
};

//validation for login
export const validateLogin = (values) => {
  let errors = {};

  //Name
  if (!values.username.trim()) {
    errors.username = 'Username is required'
  };

  //Password
  if (!values.password) {
    errors.password = 'Password is required'
  };

  return errors;
}