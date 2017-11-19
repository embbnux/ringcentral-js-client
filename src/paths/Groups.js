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
var BulkAssign_1 = require("./BulkAssign");
var Groups = /** @class */ (function (_super) {
    __extends(Groups, _super);
    function Groups(prv, id, service) {
        return _super.call(this, "groups", id, prv, service) || this;
    }
    /**
     *
     */
    Groups.prototype.bulkAssign = function (id) {
        return new BulkAssign_1.default(this, id);
    };
    /**
     *  Create Group
     */
    Groups.prototype.post = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Create Group
     *  return {ApiResponse}
     */
    Groups.prototype.postRaw = function (body) {
        return this._send({
            body: body,
            ignoreId: true,
            method: "post",
            query: undefined,
        });
    };
    /**
     *  Get Group List
     */
    Groups.prototype.list = function (query) {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Group List
     *  return {ApiResponse}
     */
    Groups.prototype.listRaw = function (query) {
        return this._send({
            body: undefined,
            ignoreId: false,
            method: "get",
            query: query,
        });
    };
    /**
     *  Get Group by ID
     */
    Groups.prototype.get = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        }).then(function (res) {
            return res.json();
        });
    };
    /**
     *  Get Group by ID
     *  return {ApiResponse}
     */
    Groups.prototype.getRaw = function () {
        return this._send({
            body: undefined,
            ignoreId: true,
            method: "get",
            query: undefined,
        });
    };
    return Groups;
}(PathSegment_1.default));
exports.default = Groups;
//# sourceMappingURL=Groups.js.map