"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
class Demo extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.Text, { style: { fontSize: 30 } }, "\u7B2C\u4E00\u4E2A\uFF01")));
    }
}
exports.default = Demo;
//# sourceMappingURL=Demo.js.map