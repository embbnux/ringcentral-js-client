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
var Content_1 = require("./Content");
var Recording = /** @class */ (function (_super) {
    __extends(Recording, _super);
    function Recording(prv, id, service) {
        return _super.call(this, "recording", id, prv, service) || this;
    }
    /**
     * Internal identifier of a message attachment
     */
    Recording.prototype.content = function (id) {
        return new Content_1.default(this, id);
    };
    /**
     *  Get Call Recording Metadata
     */
    Recording.prototype.get = function () {
        return this.getRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Call Recording Metadata
     *  return {ApiResponse}
     */
    Recording.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    return Recording;
}(PathSegment_1.default));
exports.default = Recording;
//# sourceMappingURL=Recording.js.map