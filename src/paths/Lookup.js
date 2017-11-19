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
var Lookup = /** @class */ (function (_super) {
    __extends(Lookup, _super);
    function Lookup(prv, id, service) {
        return _super.call(this, "lookup", id, prv, service) || this;
    }
    /**
     *  Look up Phone Number
     */
    Lookup.prototype.post = function (query) {
        return this.postRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Look up Phone Number
     *  return {ApiResponse}
     */
    Lookup.prototype.postRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "post",
            query: query,
        });
    };
    return Lookup;
}(PathSegment_1.default));
exports.default = Lookup;
//# sourceMappingURL=Lookup.js.map