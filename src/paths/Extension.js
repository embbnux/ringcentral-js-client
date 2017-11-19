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
var AddressBook_1 = require("./AddressBook");
var AddressBookSync_1 = require("./AddressBookSync");
var AnsweringRule_1 = require("./AnsweringRule");
var AuthzProfile_1 = require("./AuthzProfile");
var BlockedNumber_1 = require("./BlockedNumber");
var BusinessHours_1 = require("./BusinessHours");
var CallLog_1 = require("./CallLog");
var CallLogSync_1 = require("./CallLogSync");
var CompanyPager_1 = require("./CompanyPager");
var Conferencing_1 = require("./Conferencing");
var Device_1 = require("./Device");
var Fax_1 = require("./Fax");
var ForwardingNumber_1 = require("./ForwardingNumber");
var Grant_1 = require("./Grant");
var Greeting_1 = require("./Greeting");
var Meeting_1 = require("./Meeting");
var MessageStore_1 = require("./MessageStore");
var MessageSync_1 = require("./MessageSync");
var PhoneNumber_1 = require("./PhoneNumber");
var Presence_1 = require("./Presence");
var ProfileImage_1 = require("./ProfileImage");
var Ringout_1 = require("./Ringout");
var Sms_1 = require("./Sms");
var Extension = /** @class */ (function (_super) {
    __extends(Extension, _super);
    function Extension(prv, id, service) {
        return _super.call(this, "extension", id || "~", prv, service) || this;
    }
    /**
     *
     */
    Extension.prototype.activeCalls = function (id) {
        return new ActiveCalls_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.addressBookSync = function (id) {
        return new AddressBookSync_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.addressBook = function (id) {
        return new AddressBook_1.default(this, id);
    };
    /**
     * Internal identifier of an answering rule. The value can be standard digital ID or specific ID - either business-hours-rule or after-hours-rule
     */
    Extension.prototype.answeringRule = function (id) {
        return new AnsweringRule_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.authzProfile = function (id) {
        return new AuthzProfile_1.default(this, id);
    };
    /**
     * Internal identifier of a blocked number list entry
     */
    Extension.prototype.blockedNumber = function (id) {
        return new BlockedNumber_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.businessHours = function (id) {
        return new BusinessHours_1.default(this, id);
    };
    /**
     * Internal identifier of a call log record
     */
    Extension.prototype.callLog = function (id) {
        return new CallLog_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.callLogSync = function (id) {
        return new CallLogSync_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.companyPager = function (id) {
        return new CompanyPager_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.conferencing = function (id) {
        return new Conferencing_1.default(this, id);
    };
    /**
     * Internal identifier of a device
     */
    Extension.prototype.device = function (id) {
        return new Device_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.fax = function (id) {
        return new Fax_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.forwardingNumber = function (id) {
        return new ForwardingNumber_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.grant = function (id) {
        return new Grant_1.default(this, id);
    };
    /**
     * Internal identifier of a greeting
     */
    Extension.prototype.greeting = function (id) {
        return new Greeting_1.default(this, id);
    };
    /**
     * Internal identifier of a meeting
     */
    Extension.prototype.meeting = function (id) {
        return new Meeting_1.default(this, id);
    };
    /**
     * Internal identifier of a message
     */
    Extension.prototype.messageStore = function (id) {
        return new MessageStore_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.messageSync = function (id) {
        return new MessageSync_1.default(this, id);
    };
    /**
     * Internal identifier of a phone number
     */
    Extension.prototype.phoneNumber = function (id) {
        return new PhoneNumber_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.presence = function (id) {
        return new Presence_1.default(this, id);
    };
    /**
     * Dimensions of a profile image which will be returned in response
     */
    Extension.prototype.profileImage = function (id) {
        return new ProfileImage_1.default(this, id);
    };
    /**
     * Internal identifier of a RingOut call
     */
    Extension.prototype.ringout = function (id) {
        return new Ringout_1.default(this, id);
    };
    /**
     *
     */
    Extension.prototype.sms = function (id) {
        return new Sms_1.default(this, id);
    };
    /**
     *  Get Extension List
     */
    Extension.prototype.list = function (query) {
        return this.listRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Extension List
     *  return {ApiResponse}
     */
    Extension.prototype.listRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    };
    /**
     *  Get Extension Info by ID
     */
    Extension.prototype.get = function () {
        return this.getRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Extension Info by ID
     *  return {ApiResponse}
     */
    Extension.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  Update Extension by ID
     */
    Extension.prototype.put = function (body) {
        return this.putRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Update Extension by ID
     *  return {ApiResponse}
     */
    Extension.prototype.putRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    };
    return Extension;
}(PathSegment_1.default));
exports.default = Extension;
//# sourceMappingURL=Extension.js.map