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
var CallLog = /** @class */ (function (_super) {
    __extends(CallLog, _super);
    function CallLog(prv, id, service) {
        return _super.call(this, "call-log", id, prv, service) || this;
    }
    /**
     *  Get Account Call Log
     */
    CallLog.prototype.list = function (query) {
        return this.listRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Account Call Log
     *  return {ApiResponse}
     */
    CallLog.prototype.listRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    };
    /**
     *  Get Account Call Log Record by ID
     */
    CallLog.prototype.get = function () {
        return this.getRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Account Call Log Record by ID
     *  return {ApiResponse}
     */
    CallLog.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  Delete Extension Call Log
     */
    CallLog.prototype.delete = function (query) {
        return this.deleteRaw.apply(this, arguments);
    };
    /**
     *  Delete Extension Call Log
     *  return {ApiResponse}
     */
    CallLog.prototype.deleteRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: query,
        });
    };
    return CallLog;
}(PathSegment_1.default));
exports.default = CallLog;
//# sourceMappingURL=CallLog.js.map