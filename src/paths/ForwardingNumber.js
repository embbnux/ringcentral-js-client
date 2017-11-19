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
var ForwardingNumber = /** @class */ (function (_super) {
    __extends(ForwardingNumber, _super);
    function ForwardingNumber(prv, id, service) {
        return _super.call(this, "forwarding-number", id, prv, service) || this;
    }
    /**
     *  Add New Forwarding Number
     */
    ForwardingNumber.prototype.post = function (body) {
        return this.postRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Add New Forwarding Number
     *  return {ApiResponse}
     */
    ForwardingNumber.prototype.postRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    /**
     *  Get Forwarding Numbers
     */
    ForwardingNumber.prototype.list = function (query) {
        return this.listRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Forwarding Numbers
     *  return {ApiResponse}
     */
    ForwardingNumber.prototype.listRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    };
    return ForwardingNumber;
}(PathSegment_1.default));
exports.default = ForwardingNumber;
//# sourceMappingURL=ForwardingNumber.js.map