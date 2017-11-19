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
var Content = /** @class */ (function (_super) {
    __extends(Content, _super);
    function Content(prv, id, service) {
        return _super.call(this, "content", id, prv, service) || this;
    }
    /**
     *  Get Message Attachment
     */
    Content.prototype.get = function () {
        return this.getRaw.apply(this, arguments);
    };
    /**
     *  Get Message Attachment
     *  return {ApiResponse}
     */
    Content.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    return Content;
}(PathSegment_1.default));
exports.default = Content;
//# sourceMappingURL=Content.js.map