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
var CustomData = /** @class */ (function (_super) {
    __extends(CustomData, _super);
    function CustomData(prv, id, service) {
        return _super.call(this, "custom-data", id, prv, service) || this;
    }
    /**
     *  Update Custom Data by Key
     */
    CustomData.prototype.put = function (body) {
        return this.putRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Update Custom Data by Key
     *  return {ApiResponse}
     */
    CustomData.prototype.putRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    };
    return CustomData;
}(PathSegment_1.default));
exports.default = CustomData;
//# sourceMappingURL=CustomData.js.map