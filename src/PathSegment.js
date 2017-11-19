"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * UrlParts
 */
var PathSegment = /** @class */ (function () {
    function PathSegment(name, value, prv, service) {
        this._service = service;
        this._name = name;
        this._value = value || null;
        this._previous = prv;
    }
    PathSegment.prototype.toString = function (withValue) {
        if (withValue === void 0) { withValue = true; }
        var str = "/" + this._name;
        if (withValue && this._value) {
            str += "/" + this._value;
        }
        return str;
    };
    PathSegment.prototype.getEndpoint = function (withValue) {
        if (withValue === void 0) { withValue = true; }
        var end = "";
        if (this._previous) {
            end = this._previous.getEndpoint();
        }
        return end + this.toString(withValue);
    };
    PathSegment.prototype._getService = function () {
        var sec = this;
        while (sec) {
            if (sec._service) {
                return sec._service;
            }
            if (sec._previous) {
                sec = sec._previous;
            }
        }
    };
    PathSegment.prototype._send = function (_a) {
        var method = _a.method, ignoreId = _a.ignoreId, body = _a.body, query = _a.query;
        return this._getService().send({
            body: body,
            method: method,
            query: query,
            url: this.getEndpoint(ignoreId),
        });
    };
    return PathSegment;
}());
exports.default = PathSegment;
//# sourceMappingURL=PathSegment.js.map