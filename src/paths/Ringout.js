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
var Ringout = /** @class */ (function (_super) {
    __extends(Ringout, _super);
    function Ringout(prv, id, service) {
        return _super.call(this, "ringout", id, prv, service) || this;
    }
    /**
     *  Initiate RingOut Call
     */
    Ringout.prototype.post = function (body) {
        return this.postRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Initiate RingOut Call
     *  return {ApiResponse}
     */
    Ringout.prototype.postRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    /**
     *  Cancel RingOut Call
     */
    Ringout.prototype.delete = function () {
        return this.deleteRaw.apply(this, arguments);
    };
    /**
     *  Cancel RingOut Call
     *  return {ApiResponse}
     */
    Ringout.prototype.deleteRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: undefined,
        });
    };
    /**
     *  Get RingOut Call Status
     */
    Ringout.prototype.get = function () {
        return this.getRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get RingOut Call Status
     *  return {ApiResponse}
     */
    Ringout.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    return Ringout;
}(PathSegment_1.default));
exports.default = Ringout;
//# sourceMappingURL=Ringout.js.map