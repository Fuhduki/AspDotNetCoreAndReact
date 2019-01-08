import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = (props: { name: string }) => {
    return <div className="hello-world">Hello world!! {props.name}.</div>;
};

ReactDOM.render(
    <App name="Fuhduki" />,
    document.getElementById("content")
);