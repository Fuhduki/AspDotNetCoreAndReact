"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const App = (props) => {
    return React.createElement("div", { className: "hello-world" },
        "Hello world!! ",
        props.name,
        ".");
};
ReactDOM.render(React.createElement(App, { name: "Fuhduki" }), document.getElementById("content"));
//# sourceMappingURL=index.js.map