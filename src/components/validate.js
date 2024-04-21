export const validate = (email, password, fullname) => {
  
  const isValidEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  const isValidPassword =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/.test(
      password
    );
  if (fullname) {
    const isValidName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(fullname);
    if (!isValidName) return "Invalid Name";
  }
  
  if (!isValidEmail) return "Invalid email format";
  if (!isValidPassword) return "Invalid password format";

  return null;
};
