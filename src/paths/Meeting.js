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
var End_1 = require("./End");
var ServiceInfo_1 = require("./ServiceInfo");
var Meeting = /** @class */ (function (_super) {
    __extends(Meeting, _super);
    function Meeting(prv, id, service) {
        return _super.call(this, "meeting", id, prv, service) || this;
    }
    /**
     *
     */
    Meeting.prototype.serviceInfo = function (id) {
        return new ServiceInfo_1.default(this, id);
    };
    /**
     *
     */
    Meeting.prototype.end = function (id) {
        return new End_1.default(this, id);
    };
    /**
     *  Create Meeting
     */
    Meeting.prototype.post = function (body) {
        return this.postRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Create Meeting
     *  return {ApiResponse}
     */
    Meeting.prototype.postRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    /**
     *  Get Meetings List
     */
    Meeting.prototype.list = function () {
        return this.listRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Meetings List
     *  return {ApiResponse}
     */
    Meeting.prototype.listRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  Delete Meeting
     */
    Meeting.prototype.delete = function () {
        return this.deleteRaw.apply(this, arguments);
    };
    /**
     *  Delete Meeting
     *  return {ApiResponse}
     */
    Meeting.prototype.deleteRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    };
    /**
     *  Get Meeting
     */
    Meeting.prototype.get = function () {
        return this.getRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Meeting
     *  return {ApiResponse}
     */
    Meeting.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  Update Meeting
     */
    Meeting.prototype.put = function (body) {
        return this.putRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Update Meeting
     *  return {ApiResponse}
     */
    Meeting.prototype.putRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    };
    return Meeting;
}(PathSegment_1.default));
exports.default = Meeting;
//# sourceMappingURL=Meeting.js.map