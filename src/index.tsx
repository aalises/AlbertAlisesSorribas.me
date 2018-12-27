import * as React from 'react';
import { hydrate, render } from "react-dom";
import Main from './Main';

const mountNode = document.getElementById('root');

if (mountNode.hasChildNodes()) {
    hydrate(<Main />, mountNode);
  } else {
    render(<Main />, mountNode);
}

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}



