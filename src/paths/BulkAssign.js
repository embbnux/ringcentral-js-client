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
var BulkAssign = /** @class */ (function (_super) {
    __extends(BulkAssign, _super);
    function BulkAssign(prv, id, service) {
        return _super.call(this, "bulk-assign", id, prv, service) || this;
    }
    /**
     *  Edit Group Members
     */
    BulkAssign.prototype.post = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Edit Group Members
     *  return {ApiResponse}
     */
    BulkAssign.prototype.postRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    return BulkAssign;
}(PathSegment_1.default));
exports.default = BulkAssign;
//# sourceMappingURL=BulkAssign.js.map