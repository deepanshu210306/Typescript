var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var score = [];
var names = [];
function identity(val) {
    return val;
}
// You can use generic type parameters in functions for flexible input/output types.
function getArray(items) {
    return new Array().concat(items);
}
var numberArray = getArray([1, 2, 3]);
var stringArray = getArray(["A", "B", "C"]);
var stringBox = { content: "Hello" };
var numberBox = { content: 42 };
//Generics can also be used with classes.
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data = this.data.filter(function (i) { return i !== item; });
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem("Hello");
textStorage.addItem("World");
textStorage.removeItem("Hello");
console.log(textStorage.getItems()); // ["World"]
