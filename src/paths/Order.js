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
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order(prv, id, service) {
        return _super.call(this, "order", id, prv, service) || this;
    }
    /**
     *  Create New Order
     */
    Order.prototype.post = function (body) {
        return this.postRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Create New Order
     *  return {ApiResponse}
     */
    Order.prototype.postRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    /**
     *  Get Order by ID
     */
    Order.prototype.get = function () {
        return this.getRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Order by ID
     *  return {ApiResponse}
     */
    Order.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    return Order;
}(PathSegment_1.default));
exports.default = Order;
//# sourceMappingURL=Order.js.map