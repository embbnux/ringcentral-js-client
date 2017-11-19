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
var Country = /** @class */ (function (_super) {
    __extends(Country, _super);
    function Country(prv, id, service) {
        return _super.call(this, "country", id, prv, service) || this;
    }
    /**
     *  Get Country List
     */
    Country.prototype.list = function (query) {
        return this.listRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Country List
     *  return {ApiResponse}
     */
    Country.prototype.listRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    };
    /**
     *  Get Country by ID
     */
    Country.prototype.get = function () {
        return this.getRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Country by ID
     *  return {ApiResponse}
     */
    Country.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    return Country;
}(PathSegment_1.default));
exports.default = Country;
//# sourceMappingURL=Country.js.map