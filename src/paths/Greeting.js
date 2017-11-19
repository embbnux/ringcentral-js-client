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
var Greeting = /** @class */ (function (_super) {
    __extends(Greeting, _super);
    function Greeting(prv, id, service) {
        return _super.call(this, "greeting", id, prv, service) || this;
    }
    /**
     *  Create Custom Greeting
     */
    Greeting.prototype.post = function (body) {
        return this.postRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Create Custom Greeting
     *  return {ApiResponse}
     */
    Greeting.prototype.postRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    /**
     *  Get Custom Greeting by ID
     */
    Greeting.prototype.get = function () {
        return this.getRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Custom Greeting by ID
     *  return {ApiResponse}
     */
    Greeting.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    return Greeting;
}(PathSegment_1.default));
exports.default = Greeting;
//# sourceMappingURL=Greeting.js.map