## password-hasher-bgc
A simple typescript library used for password generation and verification

## Instalation
```
yarn add password-hasher-bgc
```
```
npm install password-hasher-bgc
```

## Usage
```
  import {validatePAssword, hashedPassword} from "password-hasher-bgc"

  const {hash,salt} = hashPasword("yourpasword)

  const isValid = validatePasword("yourpassword, salt,hash)
```
## Functions
<dl>
<dt><a href="#validatePassword">validatePassword(inpitPassword, salt, storeHashed)</a> ⇒ <code>boolean</code></dt>
<dd><p>Given an input password a salt and an hash
Does the given password match with the hash</p>
</dd>
<dt><a href="#hashPassword">hashPassword(password)</a> ⇒ <code>HaskedSalt</code></dt>
<dd><p>Given a password, hash it with a solt , then return the hash and the salt</p>
</dd>
</dl>

<a name="validatePassword"></a>

## validatePassword(inpitPassword, salt, storeHashed) ⇒ <code>boolean</code>
Given an input password a salt and an hash
Does the given password match with the hash

**Kind**: global function
**Returns**: <code>boolean</code> - does hash(inputPassword + ssalt) === storedHash?

| Param | Type |
| --- | --- |
| inpitPassword | <code>string</code> |
| salt | <code>string</code> |
| storeHashed | <code>string</code> |

<a name="hashPassword"></a>

## hashPassword(password) ⇒ <code>HaskedSalt</code>
Given a password, hash it with a solt , then return the hash and the salt

**Kind**: global function
**Returns**: <code>HaskedSalt</code> - object containing the hash ant the salt

| Param | Type |
| --- | --- |
| password | <code>string</code> |
