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
var Subscription = /** @class */ (function (_super) {
    __extends(Subscription, _super);
    function Subscription(prv, id, service) {
        return _super.call(this, "subscription", id, prv, service) || this;
    }
    /**
     *  Create New Subscription
     */
    Subscription.prototype.post = function (body) {
        return this.postRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Create New Subscription
     *  return {ApiResponse}
     */
    Subscription.prototype.postRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    /**
     *  Get Subscription List
     */
    Subscription.prototype.list = function () {
        return this.listRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Subscription List
     *  return {ApiResponse}
     */
    Subscription.prototype.listRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  Cancel Subscription by ID
     */
    Subscription.prototype.delete = function () {
        return this.deleteRaw.apply(this, arguments);
    };
    /**
     *  Cancel Subscription by ID
     *  return {ApiResponse}
     */
    Subscription.prototype.deleteRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    };
    /**
     *  Get Subscription by ID
     */
    Subscription.prototype.get = function () {
        return this.getRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Subscription by ID
     *  return {ApiResponse}
     */
    Subscription.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  Update/Renew Subscription by ID
     */
    Subscription.prototype.put = function (body) {
        return this.putRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Update/Renew Subscription by ID
     *  return {ApiResponse}
     */
    Subscription.prototype.putRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    };
    return Subscription;
}(PathSegment_1.default));
exports.default = Subscription;
//# sourceMappingURL=Subscription.js.map