var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var nigga = /** @class */ (function () {
    function nigga(email, name) {
        this.email = email;
        this.name = name;
        this._coursecount = 1;
    }
    Object.defineProperty(nigga.prototype, "getEmail", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(nigga.prototype, "coursecount", {
        get: function () {
            return this._coursecount;
        },
        set: function (coursenum) {
            coursenum = 2;
        },
        enumerable: false,
        configurable: true
    });
    return nigga;
}());
var nigger = /** @class */ (function (_super) {
    __extends(nigger, _super);
    function nigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hi = 1; // can be accessed in any inherited class
        return _this;
    }
    return nigger;
}(nigga));
