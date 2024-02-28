export const validateEmailPAssword = (email, password) => {
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!validEmail) return "email is invalid";

  if (!validPassword) return "password is invalid";
  else return null;
};
