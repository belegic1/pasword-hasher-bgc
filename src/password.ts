import { randomBytes, pbkdf2Sync } from "crypto";
/**
 * Given an input password a salt and an hash
 * Does the given password match with the hash
 * @param {string} inpitPassword
 * @param {string} salt
 * @param {string} storeHashed
 * @returns {boolean} does hash(inputPassword + ssalt) === storedHash?
 */
export const validatePassword = (
  inpitPassword: string,
  salt: string,
  storeHashed: string
): boolean => {
  const inputHash = pbkdf2Sync(
    inpitPassword,
    salt,
    1000,
    64,
    "sha512"
  ).toString("hex");

  return storeHashed === inputHash;
};

/**
 * @typeof {Object} HashAndSalt
 * @property {string} hash - The hash we got
 * @property {string} salt - The salt used for hashing
 */

/**
 * Given a password, hash it with a solt , then return the hash and the salt
 * @param {string} password
 * @returns {HaskedSalt} object containing the hash ant the salt
 */

export const hashPassword = (
  password: string
): { hash: string; salt: string } => {
  const salt = randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");

  return { hash, salt };
};
