"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = exports.validatePassword = void 0;
var crypto_1 = require("crypto");
/**
 * Given an input password a salt and an hash
 * Does the given password match with the hash
 * @param {string} inpitPassword
 * @param {string} salt
 * @param {string} storeHashed
 * @returns {boolean} does hash(inputPassword + ssalt) === storedHash?
 */
var validatePassword = function (inpitPassword, salt, storeHashed) {
    var inputHash = (0, crypto_1.pbkdf2Sync)(inpitPassword, salt, 1000, 64, "sha512").toString("hex");
    return storeHashed === inputHash;
};
exports.validatePassword = validatePassword;
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
var hashPassword = function (password) {
    var salt = (0, crypto_1.randomBytes)(16).toString("hex");
    var hash = (0, crypto_1.pbkdf2Sync)(password, salt, 1000, 64, "sha512").toString("hex");
    return { hash: hash, salt: salt };
};
exports.hashPassword = hashPassword;
