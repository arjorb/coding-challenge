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

  if (password.length !== 10) return false;

  // The password that only has numbers is invalid
  if (/^[0-9]+$/.test(password)) return false;

  // The password that only has characters is invalid
  if (/^[A-Za-z]+$/.test(password)) return false;

  // a password with special characters is invalid
  if (/[^a-zA-Z0-9]/.test(password)) return false;

  // a password with only lower/upper case characters is invalid
  if (password === password.toLowerCase() || password === password.toUpperCase()) return false;

  //  forbidden password are invalid
  if (forbiddenPasswords.includes(password)) return false;

  // a password with a directly ascending/descending sequence of numbers is invalid
  if (/012|123|234|345|456|567|678|789|987|876|765|654|543|432|321|210/.test(password)) return false;

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
