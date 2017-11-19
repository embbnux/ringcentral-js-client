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
var DialingPlan = /** @class */ (function (_super) {
    __extends(DialingPlan, _super);
    function DialingPlan(prv, id, service) {
        return _super.call(this, "dialing-plan", id, prv, service) || this;
    }
    /**
     *  Get IBO Dialing Plans
     */
    DialingPlan.prototype.list = function (query) {
        return this.listRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get IBO Dialing Plans
     *  return {ApiResponse}
     */
    DialingPlan.prototype.listRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    };
    return DialingPlan;
}(PathSegment_1.default));
exports.default = DialingPlan;
//# sourceMappingURL=DialingPlan.js.map