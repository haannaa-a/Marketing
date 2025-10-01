const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const isEmailValid = (email: string): boolean => {
  return Boolean(email.trim().match(emailRegex)?.length);
};
