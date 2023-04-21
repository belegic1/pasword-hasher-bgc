"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var password_1 = require("./password");
var PASSWORD = "1234";
var VALUES = {
    hash: "303070dae341d71c167917bfd88a9c07d5820359959cfd45c37391befae06f9ef2d9e04a43ce01f550e24b01a88a8c59464876fa0a901503d5e379c02b534b9c",
    salt: "b032e8c7e7c73c07f4001f36f47ea1cf",
    string: "mySecretPassword",
    wrongString: "admin1234",
};
describe("hashPassword", function () {
    test("hashPassword returns an object with hash", function () {
        var result = (0, password_1.hashPassword)(PASSWORD);
        expect(result).toHaveProperty("hash");
    });
    test("hashPassword returns an object with salt", function () {
        var result = (0, password_1.hashPassword)(PASSWORD);
        expect(result).toHaveProperty("salt");
    });
});
describe("validatePassword", function () {
    test("validatePassword returns true when password is correct", function () {
        var result = (0, password_1.validatePassword)(VALUES.string, VALUES.salt, VALUES.hash);
        expect(result).toBeTruthy();
    });
    test("validatePassword returns false when password is incorrect", function () {
        var result = (0, password_1.validatePassword)(VALUES.wrongString, VALUES.salt, VALUES.hash);
        expect(result).toBeFalsy();
    });
});
