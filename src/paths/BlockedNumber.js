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
var BlockedNumber = /** @class */ (function (_super) {
    __extends(BlockedNumber, _super);
    function BlockedNumber(prv, id, service) {
        return _super.call(this, "blocked-number", id, prv, service) || this;
    }
    /**
     *  Add New Blocked Number
     */
    BlockedNumber.prototype.post = function (body) {
        return this.postRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Add New Blocked Number
     *  return {ApiResponse}
     */
    BlockedNumber.prototype.postRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    /**
     *  Get Blocked Number List
     */
    BlockedNumber.prototype.list = function () {
        return this.listRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Blocked Number List
     *  return {ApiResponse}
     */
    BlockedNumber.prototype.listRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  Delete Blocked Number by ID
     */
    BlockedNumber.prototype.delete = function () {
        return this.deleteRaw.apply(this, arguments);
    };
    /**
     *  Delete Blocked Number by ID
     *  return {ApiResponse}
     */
    BlockedNumber.prototype.deleteRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    };
    /**
     *  Get Blocked Number by ID
     */
    BlockedNumber.prototype.get = function () {
        return this.getRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Blocked Number by ID
     *  return {ApiResponse}
     */
    BlockedNumber.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  Update Blocked Number Label
     */
    BlockedNumber.prototype.put = function (body) {
        return this.putRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Update Blocked Number Label
     *  return {ApiResponse}
     */
    BlockedNumber.prototype.putRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    };
    return BlockedNumber;
}(PathSegment_1.default));
exports.default = BlockedNumber;
//# sourceMappingURL=BlockedNumber.js.map