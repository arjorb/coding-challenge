export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  if(password.length !== 10){
    return false
  }

  if (/[^a-zA-Z0-9]/.test(password)) {
    return false;
  }

 if(/^[A-Za-z0-9].{10}$/.test(password)){
  return false
 }

 if(/^[A-Za-z0-9]*$/.test(password)){
  return false
 }


  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
