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
var ActiveCalls_1 = require("./ActiveCalls");
var BusinessAddress_1 = require("./BusinessAddress");
var CallLog_1 = require("./CallLog");
var Department_1 = require("./Department");
var Device_1 = require("./Device");
var DialingPlan_1 = require("./DialingPlan");
var Extension_1 = require("./Extension");
var Order_1 = require("./Order");
var PhoneNumber_1 = require("./PhoneNumber");
var Recording_1 = require("./Recording");
var ServiceInfo_1 = require("./ServiceInfo");
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account(prv, id, service) {
        return _super.call(this, "account", id || "~", prv, service) || this;
    }
    /**
     *
     */
    Account.prototype.activeCalls = function (id) {
        return new ActiveCalls_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.businessAddress = function (id) {
        return new BusinessAddress_1.default(this, id);
    };
    /**
     * Internal identifier of a call log record
     */
    Account.prototype.callLog = function (id) {
        return new CallLog_1.default(this, id);
    };
    /**
     * Internal identifier of a Department extension (same as extensionId but only the ID of a department extension is valid)
     */
    Account.prototype.department = function (id) {
        return new Department_1.default(this, id);
    };
    /**
     * Internal identifier of a device
     */
    Account.prototype.device = function (id) {
        return new Device_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.dialingPlan = function (id) {
        return new DialingPlan_1.default(this, id);
    };
    /**
     * Internal identifier of an extension or tilde (~) to indicate the extension assigned to the account logged-in within the current session
     */
    Account.prototype.extension = function (id) {
        return new Extension_1.default(this, id);
    };
    /**
     * Internal identifier of an order
     */
    Account.prototype.order = function (id) {
        return new Order_1.default(this, id);
    };
    /**
     * Internal identifier of a phone number
     */
    Account.prototype.phoneNumber = function (id) {
        return new PhoneNumber_1.default(this, id);
    };
    /**
     * Internal identifier of recording (returned in Call Log)
     */
    Account.prototype.recording = function (id) {
        return new Recording_1.default(this, id);
    };
    /**
     *
     */
    Account.prototype.serviceInfo = function (id) {
        return new ServiceInfo_1.default(this, id);
    };
    /**
     *  Get Account Info by ID
     */
    Account.prototype.get = function () {
        return this.getRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Account Info by ID
     *  return {ApiResponse}
     */
    Account.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    return Account;
}(PathSegment_1.default));
exports.default = Account;
//# sourceMappingURL=Account.js.map