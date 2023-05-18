/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  if(password === 'null') return 0
    let count = 0
    let wordDuplicate = 1
    for (let i = 0; i < password.length; i++) {
      if (password[i] === password[i + 1]) {
        wordDuplicate = wordDuplicate + 1
      }
    }
  
    if (wordDuplicate === 2) return (count += 1);
    if (wordDuplicate >= 3) return (count += 2);
    
    return count
}
