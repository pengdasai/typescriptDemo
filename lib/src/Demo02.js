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
class Demo02 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.Text, null, "\u7B2C\u4E8C\u4E2A\uFF01")));
    }
}
exports.default = Demo02;
//# sourceMappingURL=Demo02.js.map