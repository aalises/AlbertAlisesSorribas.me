import * as React from 'react';
import * as ReactDOM from "react-dom";
import Main from './Main';

const mountNode = document.getElementById('root');

ReactDOM.render(<Main />, mountNode);
// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}



