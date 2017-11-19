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
var Parse = /** @class */ (function (_super) {
    __extends(Parse, _super);
    function Parse(prv, id, service) {
        return _super.call(this, "parse", id, prv, service) || this;
    }
    /**
     *  Parse Phone Number
     */
    Parse.prototype.post = function (body, query) {
        return this.postRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Parse Phone Number
     *  return {ApiResponse}
     */
    Parse.prototype.postRaw = function (body, query) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: query,
        });
    };
    return Parse;
}(PathSegment_1.default));
exports.default = Parse;
//# sourceMappingURL=Parse.js.map