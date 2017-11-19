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
var AnsweringRule = /** @class */ (function (_super) {
    __extends(AnsweringRule, _super);
    function AnsweringRule(prv, id, service) {
        return _super.call(this, "answering-rule", id, prv, service) || this;
    }
    /**
     *  Create Custom Answering Rule
     */
    AnsweringRule.prototype.post = function (body) {
        return this.postRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Create Custom Answering Rule
     *  return {ApiResponse}
     */
    AnsweringRule.prototype.postRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    /**
     *  Get Answering Rules List
     */
    AnsweringRule.prototype.list = function () {
        return this.listRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Answering Rules List
     *  return {ApiResponse}
     */
    AnsweringRule.prototype.listRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  Delete Answering Rule by ID
     */
    AnsweringRule.prototype.delete = function () {
        return this.deleteRaw.apply(this, arguments);
    };
    /**
     *  Delete Answering Rule by ID
     *  return {ApiResponse}
     */
    AnsweringRule.prototype.deleteRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    };
    /**
     *  Get Custom Answering Rule by ID
     */
    AnsweringRule.prototype.get = function () {
        return this.getRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Custom Answering Rule by ID
     *  return {ApiResponse}
     */
    AnsweringRule.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  Update Answering Rule by ID
     */
    AnsweringRule.prototype.put = function (body) {
        return this.putRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Update Answering Rule by ID
     *  return {ApiResponse}
     */
    AnsweringRule.prototype.putRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    };
    return AnsweringRule;
}(PathSegment_1.default));
exports.default = AnsweringRule;
//# sourceMappingURL=AnsweringRule.js.map