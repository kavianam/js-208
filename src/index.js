import React from 'react';
import ReactDOM from 'react-dom';

import Blog from './Blog/Blog';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Blog />, document.getElementById('root'));
registerServiceWorker();
