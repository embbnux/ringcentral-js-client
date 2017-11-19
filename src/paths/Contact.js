"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PathSegment_1 = require("../PathSegment");
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact(prv, id, service) {
        return _super.call(this, "contact", id, prv, service) || this;
    }
    /**
     *  Create New Contact
     */
    Contact.prototype.post = function (body) {
        return this.postRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Create New Contact
     *  return {ApiResponse}
     */
    Contact.prototype.postRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    /**
     *  Get Contact List
     */
    Contact.prototype.list = function (query) {
        return this.listRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Contact List
     *  return {ApiResponse}
     */
    Contact.prototype.listRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    };
    /**
     *  Delete Contact by ID
     */
    Contact.prototype.delete = function () {
        return this.deleteRaw.apply(this, arguments);
    };
    /**
     *  Delete Contact by ID
     *  return {ApiResponse}
     */
    Contact.prototype.deleteRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    };
    /**
     *  Get Contact by ID
     */
    Contact.prototype.get = function () {
        return this.getRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Contact by ID
     *  return {ApiResponse}
     */
    Contact.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  Update Contact by ID
     */
    Contact.prototype.put = function (body) {
        return this.putRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Update Contact by ID
     *  return {ApiResponse}
     */
    Contact.prototype.putRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    };
    return Contact;
}(PathSegment_1.default));
exports.default = Contact;
//# sourceMappingURL=Contact.js.map