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
// This is Generated Source.
var PathSegment_1 = require("../PathSegment");
var Lookup_1 = require("./Lookup");
var Reserve_1 = require("./Reserve");
var NumberPool = /** @class */ (function (_super) {
    __extends(NumberPool, _super);
    function NumberPool(prv, id, service) {
        return _super.call(this, "number-pool", id, prv, service) || this;
    }
    /**
     *
     */
    NumberPool.prototype.lookup = function (id) {
        return new Lookup_1.default(this, id);
    };
    /**
     *
     */
    NumberPool.prototype.reserve = function (id) {
        return new Reserve_1.default(this, id);
    };
    return NumberPool;
}(PathSegment_1.default));
exports.default = NumberPool;
//# sourceMappingURL=NumberPool.js.map