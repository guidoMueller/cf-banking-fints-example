
class LoginUser {
  constructor( sessionID ) {
    this._sessionID = sessionID;
  }

  setUser( loginArray ) {
    this._username = loginArray[0];
    this._password = loginArray[1];
    this._blz = loginArray[2];
  }

  set accounts( accounts ) {
    this._accounts = accounts;
  }

  set statements( statements ) {
    this._statements = statements;
  }

  get username() {
    return this._username;
  }

  get password() {
    return this._password;
  }

  get blz() {
    return this._blz;
  }

  get session() {
    return this._sessionID;
  }

  get accounts() {
    return this._accounts;
  }

  get statements() {
    return this._statements;
  }
}

export default LoginUser