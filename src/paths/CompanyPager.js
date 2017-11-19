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
var CompanyPager = /** @class */ (function (_super) {
    __extends(CompanyPager, _super);
    function CompanyPager(prv, id, service) {
        return _super.call(this, "company-pager", id, prv, service) || this;
    }
    /**
     *  Create and Send Pager Message
     */
    CompanyPager.prototype.post = function (body) {
        return this.postRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Create and Send Pager Message
     *  return {ApiResponse}
     */
    CompanyPager.prototype.postRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    return CompanyPager;
}(PathSegment_1.default));
exports.default = CompanyPager;
//# sourceMappingURL=CompanyPager.js.map