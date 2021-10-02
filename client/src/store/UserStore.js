import { makeAutoObservable } from 'mobx';
export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};
    // func для слежения за переменными
    // в случае изменения - rerender
    makeAutoObservable(this);
  }
  // setter
  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }

  //getter
  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
