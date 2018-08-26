import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import InlineEdit from './InlineEdit/InlineEdit';
import Todo from './Todo/Todo';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Todo />, document.getElementById('root'));
registerServiceWorker();
