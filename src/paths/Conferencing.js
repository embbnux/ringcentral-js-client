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
var Conferencing = /** @class */ (function (_super) {
    __extends(Conferencing, _super);
    function Conferencing(prv, id, service) {
        return _super.call(this, "conferencing", id, prv, service) || this;
    }
    /**
     *  Get Conferencing info
     */
    Conferencing.prototype.get = function (query) {
        return this.getRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Conferencing info
     *  return {ApiResponse}
     */
    Conferencing.prototype.getRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: query,
        });
    };
    /**
     *  Update Conferencing info
     */
    Conferencing.prototype.put = function (body) {
        return this.putRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Update Conferencing info
     *  return {ApiResponse}
     */
    Conferencing.prototype.putRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    };
    return Conferencing;
}(PathSegment_1.default));
exports.default = Conferencing;
//# sourceMappingURL=Conferencing.js.map