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
var Content_1 = require("./Content");
var MessageStore = /** @class */ (function (_super) {
    __extends(MessageStore, _super);
    function MessageStore(prv, id, service) {
        return _super.call(this, "message-store", id, prv, service) || this;
    }
    /**
     * Internal identifier of a message attachment
     */
    MessageStore.prototype.content = function (id) {
        return new Content_1.default(this, id);
    };
    /**
     *  Get Message List
     */
    MessageStore.prototype.list = function (query) {
        return this.listRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Message List
     *  return {ApiResponse}
     */
    MessageStore.prototype.listRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    };
    /**
     *  Delete Message by ID
     */
    MessageStore.prototype.delete = function (query) {
        return this.deleteRaw.apply(this, arguments);
    };
    /**
     *  Delete Message by ID
     *  return {ApiResponse}
     */
    MessageStore.prototype.deleteRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "delete",
            query: query,
        });
    };
    /**
     *  Get Message by ID
     */
    MessageStore.prototype.get = function () {
        return this.getRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Message by ID
     *  return {ApiResponse}
     */
    MessageStore.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    /**
     *  Update Message by ID
     */
    MessageStore.prototype.put = function (body) {
        return this.putRaw.apply(this, arguments).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Update Message by ID
     *  return {ApiResponse}
     */
    MessageStore.prototype.putRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "put",
            query: undefined,
        });
    };
    return MessageStore;
}(PathSegment_1.default));
exports.default = MessageStore;
//# sourceMappingURL=MessageStore.js.map