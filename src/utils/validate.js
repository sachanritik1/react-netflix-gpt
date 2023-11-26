export const validateData = (email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid) {
    return "Please enter a valid email";
  }
  if (!isPasswordValid) {
    return "Please enter a valid password";
  }
  return null;
};
