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
var BusinessHours = /** @class */ (function (_super) {
    __extends(BusinessHours, _super);
    function BusinessHours(prv, id, service) {
        return _super.call(this, "business-hours", id, prv, service) || this;
    }
    /**
     *  Get User Hours Setting
     */
    BusinessHours.prototype.get = function () {
        return this.getRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get User Hours Setting
     *  return {ApiResponse}
     */
    BusinessHours.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    return BusinessHours;
}(PathSegment_1.default));
exports.default = BusinessHours;
//# sourceMappingURL=BusinessHours.js.map