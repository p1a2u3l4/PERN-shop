import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        makeAutoObservable(this);
    }

    setAuthState(bool) {
        this._isAuth = bool;
    }

    setUserInfo(info) {
        this._user = info;
    }

    get isAuth() {
        return this._isAuth;
    }
    
    get userInfo() {
        return this._user;
    }
}
