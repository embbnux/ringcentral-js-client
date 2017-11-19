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
var CustomData_1 = require("./CustomData");
var ClientInfo = /** @class */ (function (_super) {
    __extends(ClientInfo, _super);
    function ClientInfo(prv, id, service) {
        return _super.call(this, "client-info", id, prv, service) || this;
    }
    /**
     * Custom data access key. The number of unique custom data keys is limited to 100 keys per extension, summarized for all the applications. For example, if you have created 50 custom data keys under the Android mobile client application for the particular extension, then logged in the iOS application and created another 50 keys, the web client application won't be allowed to create any custom data key for that extension
     */
    ClientInfo.prototype.customData = function (id) {
        return new CustomData_1.default(this, id);
    };
    return ClientInfo;
}(PathSegment_1.default));
exports.default = ClientInfo;
//# sourceMappingURL=ClientInfo.js.map