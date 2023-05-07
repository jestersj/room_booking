import {makeAutoObservable} from "mobx";

export default class FormStore {
    constructor() {
        this._tower = ''
        this._floor = ''
        this._room = ''
        this._date = new Date()
        this._comment = ''
        makeAutoObservable(this)
    }
    setTower(value) {
        this._tower = value
    }
    get tower() {
        return this._tower
    }
    setFloor(value) {
        this._floor = value
    }
    get floor() {
        return this._floor
    }
    setRoom(value) {
        this._room = value
    }
    get room() {
        return this._room
    }
    setDate(value) {
        this._date = value
    }
    get date() {
        return this._date
    }
    setComment(value) {
        this._comment = value
    }
    get comment() {
        return  this._comment
    }
    clear() {
        this._tower = ''
        this._floor = ''
        this._room = ''
        this._date = new Date()
        this._comment = ''
    }
}

